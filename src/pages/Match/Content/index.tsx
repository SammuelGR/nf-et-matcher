import { toPng } from 'html-to-image';
import {
    Check as CheckIcon, Copy as CopyIcon, Download as DownloadIcon, ExternalLink as ExternalLinkIcon,
    Sparkles as SparklesIcon
} from 'lucide-react';
import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ArcadeCard from '@/components/ArcadeCard';
import NeonButton from '@/components/NeonButton';
import Sticker from '@/components/Sticker';
import { rules } from '@/constants/breakpoints';
import { URLS } from '@/constants/urls';
import useClipboard from '@/hooks/useClipboard';
import useMatchUrl from '@/hooks/useMatchUrl';
import useMediaQuery from '@/hooks/useMediaQuery';
import useNftImages from '@/hooks/useNftImages';
import { cn } from '@/utils/cn';
import { calculateCompatibility } from '@/utils/match';

import LoadingState from './LoadingState';
import NFTCard from './NFTCard';
import ShareCard from './ShareCard';

export default function Content() {
  const [isDownloadingCard, setIsDownloadingCard] = useState(false);

  const shareCardRef = useRef<HTMLDivElement>(null);

  const isMd = useMediaQuery(rules.md);

  const { t } = useTranslation('match');

  const { matchIds } = useMatchUrl();

  const { data, isLoading } = useNftImages(matchIds || []);

  const { isCopied, writeToClipboard } = useClipboard();

  const nftLeft = { id: matchIds?.[0] || 0, imgUrl: data[0]?.imageUrl };
  const nftRight = { id: matchIds?.[1] || 1, imgUrl: data[1]?.imageUrl };

  const compatibility = calculateCompatibility(nftLeft.id, nftRight.id);

  const downloadCardClickHandler = useCallback(async () => {
    if (shareCardRef.current === null) return;

    try {
      setIsDownloadingCard(true);

      const dataUrl = await toPng(shareCardRef.current, {
        cacheBust: true,
        pixelRatio: 1,
      });

      const link = document.createElement('a');
      link.download = `match-nfet-${nftLeft.id}-vs-${nftRight.id}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      // ¯\_(ツ)_/¯
    } finally {
      setIsDownloadingCard(false);
    }
  }, [nftLeft.id, nftRight.id]);

  const copyLinkClickHandler = () => {
    writeToClipboard(globalThis.window.location.href);
  };

  return isLoading ? (
    <LoadingState />
  ) : (
    <>
      <div aria-hidden={true} className="fixed -left-2000 opacity-0 pointer-events-none -z-10">
        <div ref={shareCardRef}>
          <ShareCard compatibility={compatibility} nftLeft={nftLeft} nftRight={nftRight} />
        </div>
      </div>

      <main className="flex flex-1 flex-col gap-6 items-center justify-center px-4 py-8">
        <div className="animate-slot-reveal flex flex-col gap-2 items-center">
          <div className="flex gap-2 items-center">
            <SparklesIcon className="animate-pulse-glow h-6 text-neon-yellow w-6" />

            <h2 className="font-black neon-text-green text-xl md:text-3xl tracking-wider uppercase text-center text-highlight">
              {t(($) => $['content.heading.title'])}
            </h2>

            <SparklesIcon className="animate-pulse-glow h-6 text-neon-yellow w-6" />
          </div>

          <p className="text-sm">{t(($) => $['content.heading.subtitle'])}</p>
        </div>

        <ArcadeCard variant="pink">
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-8">
            <NFTCard delay={200} imgUrl={nftLeft.imgUrl} tokenId={String(nftLeft.id)} />

            <div className="flex flex-col items-center py-4">
              <div
                className={cn(
                  'animate-scale-bounce flex font-orbitron h-16 md:h-20 items-center justify-center neon-border-cyan rounded-full w-16 md:w-20',
                  'bg-linear-to-br from-highlight via-accent to-neon-purple',
                )}
              >
                <span className="font-black text-2xl md:text-3xl text-highlight-foreground uppercase">
                  {t(($) => $['content.card.versus'])}
                </span>
              </div>

              <span className="pb-1 pt-3 text-xs tracking-wider uppercase">
                {t(($) => $['content.card.compatibility'])}
              </span>

              <span className="font-black neon-text-cyan text-2xl text-accent">{compatibility}%</span>
            </div>

            <NFTCard delay={400} imgUrl={nftRight.imgUrl} tokenId={String(nftRight.id)} />
          </div>

          <div className="border-t border-white/5 flex flex-wrap gap-2 justify-center mt-6 pt-6">
            <Sticker variant="purple" text={t(($) => $['content.card.sticker.1'])} />

            <Sticker variant="cyan" text={t(($) => $['content.card.sticker.2'])} />

            <Sticker variant="yellow" text={`#${nftLeft.id} + #${nftRight.id}`} />
          </div>
        </ArcadeCard>

        <div className="flex flex-wrap gap-4 justify-between">
          <NeonButton
            className="w-full sm:w-auto"
            onClick={copyLinkClickHandler}
            size={isMd ? 'md' : 'sm'}
            variant="cyan"
          >
            {isCopied ? <CheckIcon className="w-4 h-4" /> : <CopyIcon className="w-4 h-4" />}

            {isCopied
              ? t(($) => $['content.action_btn.copy_link.success'])
              : t(($) => $['content.action_btn.copy_link.label'])}
          </NeonButton>

          <NeonButton
            className="w-full sm:w-auto"
            isLoading={isDownloadingCard}
            onClick={downloadCardClickHandler}
            size={isMd ? 'md' : 'sm'}
            variant="purple"
          >
            <DownloadIcon className="w-4 h-4" />
            {t(($) => $['content.action_btn.download'])}
          </NeonButton>

          <a href={`${URLS.openSeaNftDetails}/${nftLeft.id}`} rel="noopener noreferrer" tabIndex={-1} target="_blank">
            <NeonButton className="w-full sm:w-auto" size={isMd ? 'md' : 'sm'} variant="green">
              <ExternalLinkIcon className="w-4 h-4" />
              {t(($) => $['content.action_btn.open_external_link'])} #{nftLeft.id}
            </NeonButton>
          </a>

          <a href={`${URLS.openSeaNftDetails}/${nftRight.id}`} rel="noopener noreferrer" tabIndex={-1} target="_blank">
            <NeonButton className="w-full sm:w-auto" size={isMd ? 'md' : 'sm'} variant="pink">
              <ExternalLinkIcon className="w-4 h-4" />
              {t(($) => $['content.action_btn.open_external_link'])} #{nftRight.id}
            </NeonButton>
          </a>
        </div>

        <div className="pt-4 space-y-1 text-center">
          <p className="text-sm">{t(($) => $['content.footer.title'])} 👽</p>

          <p className="text-secondary/60 text-xs">{t(($) => $['content.footer.subtitle'])}</p>
        </div>
      </main>
    </>
  );
}
