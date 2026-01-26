import { fetchNftImage } from '@/services/nft';
import { useQueries } from '@tanstack/react-query';

export default function useNftImages(ids: number[]) {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ['nft', id],
      queryFn: () => fetchNftImage(id),
      staleTime: Infinity,
      retry: 1,
    })),
  });

  const isError = results.some((r) => r.isError);
  const isLoading = results.some((r) => r.isLoading);
  const isSuccess = results.every((r) => r.isSuccess);
  const data = results.map((r) => r.data);

  return {
    data,
    isError,
    isLoading,
    isSuccess,
  };
}
