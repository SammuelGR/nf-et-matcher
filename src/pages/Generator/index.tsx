import { useState } from 'react';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';

import type { SearchMode } from './types';

export default function Generator() {
  const [searchMode, setSearchMode] = useState<SearchMode>('id');

  const onSubmitForm = () => {
    // it does nothing ¯\_(ツ)_/¯
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />

      <Content onSubmitForm={onSubmitForm} searchMode={searchMode} setSearchMode={setSearchMode} />

      <Footer />
    </div>
  );
}
