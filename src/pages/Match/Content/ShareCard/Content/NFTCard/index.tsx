import { useTranslation } from 'react-i18next';

import { URLS } from '@/constants/urls';
import { cn } from '@/utils/cn';

import type { NFTData } from '../../types';

interface NFTCardProps extends NFTData {
  variant: 'green' | 'purple';
}

export default function NFTCard({ id, imgUrl, variant }: NFTCardProps) {
  const { t } = useTranslation('match');

  return (
    <div className="relative">
      <div className={cn('border-4 h-72 overflow-hidden rounded-xl w-72', `neon-border-${variant}-xl`)}>
        <img
          alt={`${t(($) => $['share_card.content.img_alt'])} #${id}`}
          className="h-full object-cover scale-102 w-full"
          crossOrigin="anonymous"
          loading="eager"
          src={imgUrl || URLS.imgUrlPlaceholder(id)}
        />
      </div>

      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2">
        <span
          className={cn(
            'bg-background/90 border-2 font-bold px-3 py-0.5 rounded-sm text-xl',
            `border-neon-${variant}/40 text-neon-${variant}`,
          )}
        >
          #{id}
        </span>
      </div>
    </div>
  );
}
