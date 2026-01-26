import { useMemo } from 'react';
import { useSearchParams } from 'react-router';

export default function useMatchUrl() {
  const [searchParams] = useSearchParams();

  const generateHash = (id1: number, id2: number) => {
    const payload = JSON.stringify({ a: id1, b: id2 });

    try {
      return encodeURIComponent(btoa(payload));
    } catch {
      return '';
    }
  };

  const hash = searchParams.get('q');

  const matchIds = useMemo(() => {
    if (!hash) return null;

    try {
      const jsonString = atob(hash);
      const parsed = JSON.parse(jsonString);

      if (typeof parsed.a !== 'number' || typeof parsed.b !== 'number') {
        return null;
      }

      return [Number.parseInt(parsed.a), Number.parseInt(parsed.b)];
    } catch {
      return null;
    }
  }, [hash]);

  return {
    generateHash,
    matchIds,
  };
}
