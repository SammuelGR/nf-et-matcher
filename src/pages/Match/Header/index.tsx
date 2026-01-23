import { ArrowLeft as ArrowLeftIcon, RefreshCw as RefreshCwIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router';

import NeonButton from '@/components/NeonButton';
import useCollectionStats from '@/hooks/useCollectionStats';
import { useMatchUrl } from '@/hooks/useMatchUrl';
import { PATHS } from '@/routes/paths';

export default function Header() {
  const navigate = useNavigate();

  const { t } = useTranslation('match');

  const [, setSearchParams] = useSearchParams();

  const { isLoading, lastMintedId } = useCollectionStats();

  const { generateHash } = useMatchUrl();

  const newMatchClickHandler = () => {
    const idA = Math.floor(Math.random() * lastMintedId);

    let idB = Math.floor(Math.random() * lastMintedId);

    while (idA === idB) idB = Math.floor(Math.random() * lastMintedId);

    const hashedUrl = generateHash(idA, idB);

    setSearchParams({ q: hashedUrl });
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-18 py-4 relative">
      <NeonButton onClick={() => navigate(PATHS.GENERATOR)} size="sm" variant="purple">
        <ArrowLeftIcon className="w-4 h-4" />
        {t(($) => $['header.btn_go_back'])}
      </NeonButton>

      <h1 className="absolute inset-x-0 font-bold neon-text-pink hidden sm:block pointer-events-none text-center text-primary text-xl">
        <span className="neon-text-green">{t(($) => $['header.title.1'])}</span>
        {t(($) => $['header.title.2'])}
      </h1>

      <NeonButton isLoading={isLoading} onClick={newMatchClickHandler} size="sm" variant="cyan">
        <RefreshCwIcon className="w-4 h-4" />
        {t(($) => $['header.btn_new_match'])}
      </NeonButton>
    </header>
  );
}
