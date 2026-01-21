import { useTranslation } from 'react-i18next';

import Sticker from '@/components/Sticker';
import { cn } from '@/utils/cn';

interface NFTCardProps {
  id: string;
  delay: number;
  imgUrl: string;
}

export default function NFTCard({ id, delay, imgUrl }: NFTCardProps) {
  const { t } = useTranslation('match');

  const imgUrlPlaceholder = `https://placehold.co/400x400/1a1a2e/39ff14?text=NFET%23${id}`;

  return (
    <div
      className="animate-slot-reveal border-2 border-highlight/40 flex-1 group max-w-54 md:max-w-70 neon-border-green overflow-hidden relative rounded-xl w-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-square bg-card/80 overflow-hidden">
        <img
          src={imgUrl}
          alt={`${t(($) => $['content.nft_card.img_alt'])} #${id}`}
          className="duration-500 group-hover:scale-115 h-full object-center object-cover transition-transform scale-105 w-full"
          onError={(e) => {
            (e.target as HTMLImageElement).src = imgUrlPlaceholder;
          }}
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent" />

      <div className="absolute bottom-3 flex items-center justify-between left-3 right-3">
        <span className="font-orbitron font-bold text-primary neon-text-green text-lg">#{id}</span>

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
