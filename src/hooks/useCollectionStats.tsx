import { useReadContract } from 'wagmi';

import { DEFIZEROS_ABI, DEFIZEROS_ADDRESS, DEFIZEROS_MAX_SUPPLY } from '@/constants/contracts';

export default function useCollectionStats() {
  const {
    data: totalSupply,
    isLoading,
    isError,
  } = useReadContract({
    address: DEFIZEROS_ADDRESS,
    abi: DEFIZEROS_ABI,
    functionName: 'totalSupply',
    query: {
      staleTime: Infinity,
    },
  });

  return {
    isError,
    isLoading,
    lastMintedId: (totalSupply ? Number(totalSupply) : DEFIZEROS_MAX_SUPPLY) - 1,
    totalSupply: totalSupply ? Number(totalSupply) : null,
  };
}
