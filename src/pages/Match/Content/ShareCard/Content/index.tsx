import { useTranslation } from 'react-i18next';

import Sticker from '@/components/Sticker';
import { cn } from '@/utils/cn';

import NFTCard from './NFTCard';

import type { NFTData } from '../types';

interface ContentProps {
  compatibility: number;
  nftLeft: NFTData;
  nftRight: NFTData;
}

export default function Content({ compatibility, nftLeft, nftRight }: ContentProps) {
  const { t } = useTranslation('match');

  return (
    <>
      <div className="flex flex-1 gap-8 items-center justify-center relative z-10">
        <NFTCard id={nftLeft.id} imgUrl={nftLeft.imgUrl} variant="green" />

        <div className="flex flex-col items-center gap-4 px-4">
          <div className="relative">
            <div className="absolute bg-neon-pink/50 blur-2xl inset-0 rounded-full" />

            <div
              className={cn(
                'flex h-24 items-center justify-center relative rounded-full w-24',
                'bg-linear-to-br from-highlight via-accent to-neon-purple',
              )}
            >
              <span className="text-4xl font-black text-primary-foreground">💚</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <span className="text-lg tracking-wider uppercase">{t(($) => $['share_card.content.match'])}</span>

            <span className="font-medium neon-text-cyan text-4xl text-accent">{compatibility}%</span>
          </div>
        </div>

        <NFTCard id={nftRight.id} imgUrl={nftRight.imgUrl} variant="purple" />
      </div>

      <div className="flex gap-2 items-center justify-center my-5">
        <Sticker size="lg" text={t(($) => $['share_card.content.sticker.1'])} variant="green" />

        <Sticker size="lg" text={t(($) => $['share_card.content.sticker.2'])} variant="pink" />

        <Sticker size="lg" text={`#${nftLeft.id} + #${nftRight.id}`} variant="cyan" />
      </div>
    </>
  );
}
