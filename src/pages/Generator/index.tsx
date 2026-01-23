import { useState } from 'react';
import { useNavigate } from 'react-router';

import useCollectionStats from '@/hooks/useCollectionStats';
import useMatchUrl from '@/hooks/useMatchUrl';
import { PATHS } from '@/routes/paths';
import Background from '@/ui/Background';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';

import type { SearchMode } from './types';

export default function Generator() {
  const [searchMode, setSearchMode] = useState<SearchMode>('random');
  const [nftId, setNftId] = useState('');

  const navigate = useNavigate();

  const { lastMintedId } = useCollectionStats();

  const { generateHash } = useMatchUrl();

  const onSubmitForm = (isRandom: boolean) => {
    const idA = isRandom ? Math.floor(Math.random() * lastMintedId) : Number(nftId);

    let idB = Math.floor(Math.random() * lastMintedId);

    while (idA === idB) idB = Math.floor(Math.random() * lastMintedId);

    const hashedUrl = generateHash(idA, idB);

    navigate(`${PATHS.MATCH}?q=${hashedUrl}`);
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      <Background />

      <div className="flex flex-col items-center min-h-screen relative z-10">
        <Header />

        <Content
          nftId={nftId}
          onSubmitForm={onSubmitForm}
          searchMode={searchMode}
          setNftId={setNftId}
          setSearchMode={setSearchMode}
        />

        <Footer />
      </div>
    </div>
  );
}
