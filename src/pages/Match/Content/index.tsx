import {
    Check as CheckIcon, Copy as CopyIcon, Download as DownloadIcon, ExternalLink as ExternalLinkIcon,
    Sparkles as SparklesIcon
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import ArcadeCard from '@/components/ArcadeCard';
import NeonButton from '@/components/NeonButton';
import Sticker from '@/components/Sticker';
import { rules } from '@/constants/breakpoints';
import useClipboard from '@/hooks/useClipboard';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cn } from '@/utils/cn';

import NFTCard from './NFTCard';

const nftIds = [192, 7]; // TODO

export default function Content() {
  const isMd = useMediaQuery(rules.md);

  const { t } = useTranslation('match');

  const { isCopied, writeToClipboard } = useClipboard();

  const copyLinkClickHandler = () => {
    writeToClipboard(globalThis.window.location.href);
  };

  return (
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
          <NFTCard delay={200} id={String(nftIds[0])} imgUrl="TODO" />

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

            <span className="font-black neon-text-cyan text-2xl text-accent">
              50%
              {/* TODO */}
            </span>
          </div>

          <NFTCard delay={400} id={String(nftIds[1])} imgUrl="TODO" />
        </div>

        <div className="border-t border-white/5 flex flex-wrap gap-2 justify-center mt-6 pt-6">
          <Sticker variant="purple" text={t(($) => $['content.card.sticker.1'])} />

          <Sticker variant="cyan" text={t(($) => $['content.card.sticker.2'])} />

          <Sticker variant="yellow" text={`#${nftIds[0]} + #${nftIds[1]}`} />
        </div>
      </ArcadeCard>

      <div className="flex flex-wrap gap-4 justify-between ">
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

        <NeonButton className="w-full sm:w-auto" size={isMd ? 'md' : 'sm'} variant="purple">
          <DownloadIcon className="w-4 h-4" />
          {t(($) => $['content.action_btn.download'])}
        </NeonButton>

        <NeonButton className="w-full sm:w-auto" size={isMd ? 'md' : 'sm'} variant="green">
          <ExternalLinkIcon className="w-4 h-4" />
          {t(($) => $['content.action_btn.open_external_link'])} #{nftIds[0]}
        </NeonButton>

        <NeonButton className="w-full sm:w-auto" size={isMd ? 'md' : 'sm'} variant="pink">
          <ExternalLinkIcon className="w-4 h-4" />
          {t(($) => $['content.action_btn.open_external_link'])} #{nftIds[1]}
        </NeonButton>
      </div>

      <div className="pt-4 space-y-1 text-center">
        <p className="text-sm">{t(($) => $['content.footer.title'])} 👽</p>

        <p className="text-secondary/60 text-xs">{t(($) => $['content.footer.subtitle'])}</p>
      </div>
    </main>
  );
}
