import { useState } from 'react';

import Background from '@/ui/Background';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';

import type { SearchMode } from './types';

export default function Generator() {
  const [searchMode, setSearchMode] = useState<SearchMode>('random');

  const onSubmitForm = () => {
    // it does nothing ¯\_(ツ)_/¯
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      <Background />

      <div className="flex flex-col items-center min-h-screen relative z-10">
        <Header />

        <Content onSubmitForm={onSubmitForm} searchMode={searchMode} setSearchMode={setSearchMode} />

        <Footer />
      </div>
    </div>
  );
}
