import { useSearchParams } from 'react-router';

export function useMatchUrl() {
  const [searchParams] = useSearchParams();

  const generateHash = (id1: number, id2: number) => {
    const payload = JSON.stringify({ a: id1, b: id2 });

    try {
      return btoa(payload);
    } catch {
      return '';
    }
  };

  const getIdsFromUrl = () => {
    const hash = searchParams.get('q');

    if (!hash) return null;

    try {
      const jsonString = atob(hash);
      const parsed = JSON.parse(jsonString);

      if (typeof parsed.a !== 'number' || typeof parsed.b !== 'number') {
        return null;
      }

      return { id1: parsed.a, id2: parsed.b };
    } catch {
      return null;
    }
  };

  return {
    generateHash,
    matchIds: getIdsFromUrl(),
  };
}
