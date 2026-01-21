import { useEffect, useState } from 'react';

import Background from '@/ui/Background';

import Content from './Content';
import Header from './Header';
import LoadingState from './LoadingState';

export default function Match() {
  const [isLoading, setIsLoading] = useState(true);

  // TODO: switch to real loading of fetch
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Background />

      <div className="flex flex-col min-h-screen relative z-10">
        <Header />

        {isLoading ? <LoadingState /> : <Content />}
      </div>
    </div>
  );
}
