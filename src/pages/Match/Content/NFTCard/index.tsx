import { useTranslation } from 'react-i18next';

import Sticker from '@/components/Sticker';
import { cn } from '@/utils/cn';

interface NFTCardProps {
  delay: number;
  imgUrl?: string;
  tokenId: string;
}

export default function NFTCard({ delay, imgUrl, tokenId }: NFTCardProps) {
  const { t } = useTranslation('match');

  const imgUrlPlaceholder = `https://placehold.co/400x400/1a1a2e/39ff14?text=NFET%23${tokenId}`;

  return (
    <div
      className="animate-slot-reveal border-2 border-highlight/40 flex-1 group w-54 md:w-70 neon-border-green overflow-hidden relative rounded-xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-square bg-card/80 overflow-hidden">
        <img
          src={imgUrl || imgUrlPlaceholder}
          alt={`${t(($) => $['content.nft_card.img_alt'])} #${tokenId}`}
          className="duration-500 group-hover:scale-115 h-full object-center object-cover transition-transform scale-105 w-full"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent" />

      <div className="absolute bottom-3 flex items-center justify-between left-3 right-3">
        <span className="font-orbitron font-bold text-primary neon-text-green text-lg">#{tokenId}</span>

        <Sticker text={t(($) => $['content.nft_card.sticker'])} variant="purple" />
      </div>

      <div
        className={cn(
          'absolute duration-300 inset-0 group-hover:opacity-100 opacity-0 pointer-events-none transition-opacity',
          'bg-linear-to-t from-highlight/20 to-transparent',
        )}
      />
    </div>
  );
}
