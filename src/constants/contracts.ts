export const DEFIZEROS_ADDRESS = '0xa74c0b5adea01df5a43a6c6b5e012dc8ed5d2687';

export const DEFIZEROS_ABI = [
  {
    type: 'function',
    name: 'totalSupply',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'tokenURI',
    stateMutability: 'view',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    outputs: [{ type: 'string' }],
  },
] as const;

export const DEFIZEROS_MAX_SUPPLY = 4200;
