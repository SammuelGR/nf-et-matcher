import { useTranslation } from 'react-i18next';

import Sticker from '@/components/Sticker';

export default function Header() {
  const { t } = useTranslation('generator');

  return (
    <header className="px-4 py-6 flex flex-col gap-2">
      <h1 className="animate-pulse-glow text-center text-primary text-4xl md:text-5xl font-black tracking-wider neon-text-pink">
        <span className="neon-text-green">{t(($) => $['header.title.1'])}</span>
        {t(($) => $['header.title.2'])}
      </h1>

      <div className="flex gap-2 justify-center items-center">
        <span className="text-sm font-medium">{t(($) => $['header.subtitle'])}</span>

        <Sticker text={t(($) => $['header.sticker'])} variant="cyan" />
      </div>
    </header>
  );
}
