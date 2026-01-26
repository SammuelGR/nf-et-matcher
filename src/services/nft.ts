interface NftImageResponse {
  imageUrl: string;
}

export const fetchNftImage = async (id: number): Promise<NftImageResponse> => {
  const response = await fetch(`/api/nft?id=${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch NFT data');
  }

  return response.json();
};
