import { useTranslation } from 'react-i18next';

import { URLS } from '@/constants/urls';

export default function Footer() {
  const { t } = useTranslation('match');

  return (
    <div className="flex items-center justify-between pt-5 border-t border-white/10">
      <div className="flex items-center gap-6">
        <p className="font-bold text-3xl text-primary">
          <span className="neon-text-green">{t(($) => $['share_card.footer.title.1'])}</span>

          <span className="neon-text-pink">{t(($) => $['share_card.footer.title.2'])}</span>
        </p>

        <span className="text-lg text-primary/80">{t(($) => $['share_card.footer.subtitle'])}</span>
      </div>

      <div className="flex gap-4 items-center text-2xl">
        <span className="neon-text-yellow">🛸</span>

        <span className="font-medium text-2xl text-neon-yellow/80 tracking-wide">{URLS.appUrl}</span>
      </div>
    </div>
  );
}
