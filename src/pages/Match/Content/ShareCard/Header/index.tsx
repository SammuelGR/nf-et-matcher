import { Sparkles as SparklesIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import Sticker from '@/components/Sticker';

export default function Header() {
  const { t } = useTranslation('match');

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <SparklesIcon className="h-10 text-neon-yellow w-10" />

        <p className="font-bold neon-text-green-xl text-2xl text-highlight tracking-widest uppercase">
          {t(($) => $['share_card.header.title'])}
        </p>
      </div>

      <Sticker size="lg" text={t(($) => $['share_card.header.sticker'])} variant="purple" />
    </div>
  );
}
