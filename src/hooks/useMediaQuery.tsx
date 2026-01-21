import { useEffect, useState } from 'react';

export default function useMediaQueries(query: string) {
  const getMatch = () => {
    if (globalThis.window === undefined) return false;

    return globalThis.window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    const mql = globalThis.window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);

    onChange();

    mql.addEventListener?.('change', onChange);

    return () => {
      mql.removeEventListener?.('change', onChange);
    };
  }, [query]);

  return matches;
}
