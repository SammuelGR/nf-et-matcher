import { useReadContract } from 'wagmi';

import { DEFIZEROS_ABI, DEFIZEROS_ADDRESS } from '@/constants/contracts';

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
    totalSupply: totalSupply ? Number(totalSupply) : null,
    isLoading,
    isError,
  };
}
