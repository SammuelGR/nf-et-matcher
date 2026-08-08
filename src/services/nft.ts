interface NftImageResponse {
  imageUrl: string;
}

const blobToDataUrl = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => reject(reader.error || new Error('Failed to read NFT image'));
    reader.onloadend = () => {
      if (typeof reader.result !== 'string') {
        reject(new Error('Failed to convert NFT image'));
        return;
      }

      resolve(reader.result);
    };

    reader.readAsDataURL(blob);
  });
};

export const fetchNftImage = async (id: number): Promise<NftImageResponse> => {
  const response = await fetch(`/api/nft?id=${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch NFT image');
  }

  const image = await response.blob();
  const imageUrl = await blobToDataUrl(image);

  return { imageUrl };
};
