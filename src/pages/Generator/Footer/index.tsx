import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { URLS } from '@/constants/urls';

const NFT_COUNT = 4200;

export default function Footer() {
  const { t } = useTranslation('generator');

  return (
    <footer className="mt-auto px-4 py-6 relative text-sm w-full">
      <p className="font-medium mb-4 text-center">
        <span className="text-highlight">{NFT_COUNT}</span> {t(($) => $['footer.nft_count'])} 👽
      </p>

      <div className="flex gap-6 justify-center text-center">
        <a
          className="flex gap-1.5 items-center hover:text-highlight transition-colors"
          href={URLS.openSeaCollection}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLinkIcon className="h-4 w-4" />

          {t(($) => $['footer.anchor.opensea'])}
        </a>

        <a
          className="flex gap-1.5 items-center hover:text-highlight transition-colors"
          href={URLS.repositoryGitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLinkIcon className="h-4 w-4" />

          {t(($) => $['footer.anchor.github'])}
        </a>
      </div>

      <p
        aria-hidden={true}
        className="absolute animate-pulse bottom-4 cursor-grab hover:opacity-100 opacity-30 right-4 text-2xl"
      >
        👽
      </p>
    </footer>
  );
}
