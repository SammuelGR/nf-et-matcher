import { Navigate } from 'react-router';

import useMatchUrl from '@/hooks/useMatchUrl';
import { PATHS } from '@/routes/paths';
import Background from '@/ui/Background';

import Content from './Content';
import Header from './Header';

export default function Match() {
  const { matchIds } = useMatchUrl();

  return matchIds === null ? (
    <Navigate to={PATHS.GENERATOR} replace={true} />
  ) : (
    <div className="min-h-screen relative">
      <Background />

      <div className="flex flex-col min-h-screen relative z-10">
        <Header />

        <Content />
      </div>
    </div>
  );
}
