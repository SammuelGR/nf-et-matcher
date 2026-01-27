import { Route, Routes } from 'react-router';

import Generator from '@/pages/Generator';
import Match from '@/pages/Match';
import NotFound from '@/pages/NotFound';
import ShareCardPage from '@/pages/ShareCardPage'; // TODO: temporary

import { PATHS } from './paths';

export default function AppRoutes() {
  return (
    <Routes>
      <Route index={true} element={<Generator />} />
      <Route path={PATHS.MATCH} element={<Match />} />
      <Route path={PATHS.SHARE_CARD} element={<ShareCardPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
