import {
  Copy as CopyIcon,
  Download as DownloadIcon,
  ExternalLink as ExternalLinkIcon,
  Sparkles as SparklesIcon,
} from 'lucide-react';

import ArcadeCard from '@/components/ArcadeCard';
import NeonButton from '@/components/NeonButton';
import Sticker from '@/components/Sticker';
import { rules } from '@/constants/breakpoints';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cn } from '@/utils/cn';

import NFTCard from './NFTCard';

const nftIds = [192, 7]; // TODO

export default function Content() {
  const isMd = useMediaQuery(rules.md);

  return (
    <main className="flex flex-1 flex-col gap-6 items-center justify-center px-4 py-8">
      <div className="animate-slot-reveal flex flex-col gap-2 items-center">
        <div className="flex gap-2 items-center">
          <SparklesIcon className="animate-pulse-glow h-6 text-neon-yellow w-6" />

          <h2 className="font-black neon-text-green text-xl md:text-3xl tracking-wider uppercase text-center text-highlight">
            Match Detectado!
          </h2>

          <SparklesIcon className="animate-pulse-glow h-6 text-neon-yellow w-6" />
        </div>

        <p className="text-sm">O algoritmo degen encontrou um par cósmico</p>
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
              <span className="font-black text-2xl md:text-3xl text-highlight-foreground">VS</span>
            </div>

            <span className="pb-1 pt-3 text-xs tracking-wider uppercase">Compatibilidade</span>

            <span className="font-black neon-text-cyan text-2xl text-accent">
              50%
              {/* TODO */}
            </span>
          </div>

          <NFTCard delay={400} id={String(nftIds[1])} imgUrl="TODO" />
        </div>

        <div className="border-t border-white/5 flex flex-wrap gap-2 justify-center mt-6 pt-6">
          <Sticker variant="purple" text="Et Approved" />

          <Sticker variant="cyan" text="LFG" />

          <Sticker variant="yellow" text={`#${nftIds[0]} + #${nftIds[1]}`} />
        </div>
      </ArcadeCard>

      <div className="flex flex-wrap gap-4 justify-between ">
        <NeonButton className="w-full sm:w-auto" size={isMd ? 'md' : 'sm'} variant="cyan">
          <CopyIcon className="w-4 h-4" />
          Copiar link
        </NeonButton>

        <NeonButton className="w-full sm:w-auto" size={isMd ? 'md' : 'sm'} variant="purple">
          <DownloadIcon className="w-4 h-4" />
          Baixar card
        </NeonButton>

        <NeonButton className="w-full sm:w-auto" size={isMd ? 'md' : 'sm'} variant="green">
          <ExternalLinkIcon className="w-4 h-4" />
          Ver #{nftIds[0]}
        </NeonButton>

        <NeonButton className="w-full sm:w-auto" size={isMd ? 'md' : 'sm'} variant="pink">
          <ExternalLinkIcon className="w-4 h-4" />
          Ver #{nftIds[1]}
        </NeonButton>
      </div>

      <div className="pt-4 space-y-1 text-center">
        <p className="text-sm">Manda no chat e marca o ET 👽</p>

        <p className="text-secondary/60 text-xs">Se der ruim, gera outro e finge que era esse</p>
      </div>
    </main>
  );
}
