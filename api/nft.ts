import type { VercelRequest, VercelResponse } from '@vercel/node';

const DEFIZEROS_ADDRESS = '0xa74c0b5adea01df5a43a6c6b5e012dc8ed5d2687';

async function fetchNftImageUrl(id: string, apiKey: string): Promise<{ imageUrl: string }> {
  const endpoint = `https://eth-mainnet.g.alchemy.com/nft/v3/${apiKey}/getNFTMetadata`;
  const url = `${endpoint}?contractAddress=${DEFIZEROS_ADDRESS}&tokenId=${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Alchemy API Error: ${response.statusText}`);
  }

  const data = await response.json();
  const imageUrl = data.image?.cachedUrl || data.image?.originalUrl || data.tokenUri;

  if (!imageUrl) {
    throw new Error('Image not found in metadata');
  }

  return { imageUrl };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;

  const apiKey = process.env.ALCHEMY_API_KEY;

  if (!id || typeof id !== 'string' || Number.isNaN(Number.parseInt(id))) {
    return res.status(400).json({ error: 'Invalid or missing ID' });
  }

  if (!apiKey) {
    return res.status(500).json({ error: 'Missing ALCHEMY_API_KEY in environment variables' });
  }

  try {
    const data = await fetchNftImageUrl(id, apiKey);

    return res.status(200).json(data);
  } catch (error) {
    console.error('Failed to fetch NFT data:', error);

    return res.status(500).json({
      error: 'Failed to fetch NFT data',
    });
  }
}
