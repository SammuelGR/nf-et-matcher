import { useEffect, useState } from 'react';
import { Navigate } from 'react-router';

import useMatchUrl from '@/hooks/useMatchUrl';
import { PATHS } from '@/routes/paths';
import Background from '@/ui/Background';

import Content from './Content';
import Header from './Header';
import LoadingState from './LoadingState';

export default function Match() {
  const [isLoading, setIsLoading] = useState(true);

  const { matchIds } = useMatchUrl();

  // TODO: switch to real loading of fetch
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return matchIds === null ? (
    <Navigate to={PATHS.GENERATOR} replace={true} />
  ) : (
    <div className="min-h-screen relative">
      <Background />

      <div className="flex flex-col min-h-screen relative z-10">
        <Header />

        {isLoading ? <LoadingState /> : <Content />}
      </div>
    </div>
  );
}
