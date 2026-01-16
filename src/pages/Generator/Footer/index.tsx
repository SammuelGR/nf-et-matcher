import { URLS } from '@/constants/urls';

export default function Footer() {
  return (
    <footer className="mt-auto px-4 py-6 relative text-sm w-full">
      <p className="font-medium mb-4 text-center">
        <span className="text-highlight">4.200</span> NF_ETs avistados na coleção 👽
      </p>

      <div className="space-x-8 text-center">
        <a
          className="hover:text-highlight transition-colors"
          href={URLS.openSeaCollection}
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 OpenSea
        </a>

        <a
          className="hover:text-highlight transition-colors"
          href={URLS.repositoryGitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 GitHub
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
