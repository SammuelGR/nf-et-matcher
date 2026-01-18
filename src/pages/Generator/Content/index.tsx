import { Search as SearchIcon, Shuffle as ShuffleIcon, Zap as ZapIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import ArcadeCard from '@/components/ArcadeCard';
import NeonButton from '@/components/NeonButton';
import Sticker from '@/components/Sticker';

import type { SearchMode } from '../types';

interface ContentProps {
  onSubmitForm: () => void;
  searchMode: SearchMode;
  setSearchMode: React.Dispatch<React.SetStateAction<SearchMode>>;
}

export default function Content({ onSubmitForm, searchMode, setSearchMode }: ContentProps) {
  const { t } = useTranslation('generator');

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmitForm();
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-8">
      <ArcadeCard
        animate={true}
        className="flex flex-col items-center justify-center space-y-6 w-full"
        variant="purple"
      >
        <div className="space-y-2 text-center">
          <div className="flex items-center space-x-2">
            <ZapIcon className="animate-pulse h-5 text-neon-yellow w-5" />

            <h2 className="font-bold text-primary text-xl tracking-wider uppercase">
              {t(($) => $['content.heading.title'])}
            </h2>

            <ZapIcon className="animate-pulse h-5 text-neon-yellow w-5" />
          </div>

          <p className="text-sm">{t(($) => $['content.heading.subtitle'])}</p>
        </div>

        <div className="flex gap-4 justify-center w-full">
          <button
            className="cursor-pointer bg-highlight/70 hover:bg-highlight h-10 w-full rounded-sm text-highlight-foreground transition-colors"
            onClick={() => setSearchMode('id')}
          >
            {t(($) => $['content.mode.by_id'])}
          </button>

          <button
            className="cursor-pointer bg-highlight/70 hover:bg-highlight h-10 w-full rounded-sm text-highlight-foreground transition-colors"
            onClick={() => setSearchMode('random')}
          >
            {t(($) => $['content.mode.random'])}
          </button>
        </div>

        {searchMode === 'id' ? (
          <form className="w-full" id="form-nft-id" onSubmit={formSubmitHandler} noValidate={true}>
            <label className="space-y-2">
              <p className="text-sm font-medium">{t(($) => $['content.form.label'])}</p>

              <input
                className="bg-muted/50 border border-white/10 focus:outline-none focus:border-highlight/50 focus:ring-2 focus:ring-highlight/20 font-mono placeholder:text-secondary/50 px-4 py-3 rounded-xl text-primary transition-all w-full"
                id="input-nft-id"
                max={4199}
                min={0}
                placeholder={t(($) => $['content.form.placeholder'])}
                step={1}
                type="number"
              />
            </label>

            <NeonButton
              className="mt-4 w-full"
              disabled={false /* TODO */}
              isLoading={false /* TODO */}
              size="lg"
              type="submit"
              variant="green"
            >
              <SearchIcon className="w-5 h-5" /> {t(($) => $['content.form.btn_submit'])}
            </NeonButton>
          </form>
        ) : (
          <NeonButton
            className="w-full"
            disabled={false /* TODO */}
            isLoading={false /* TODO */}
            size="lg"
            variant="gradient"
          >
            <ShuffleIcon className="w-5 h-5" /> {t(($) => $['content.btn_random_match'])}
          </NeonButton>
        )}

        <div className="mt-2 space-x-2">
          <Sticker text={t(($) => $['content.sticker.1'])} variant="green" />

          <Sticker text={t(($) => $['content.sticker.2'])} variant="pink" />

          <Sticker text={t(($) => $['content.sticker.3'])} variant="purple" />
        </div>
      </ArcadeCard>

      <div className="mt-8 space-y-2 text-center">
        <p className="text-sm">✨ {t(($) => $['content.footer.heading'])}</p>

        <small className="opacity-60 text-xs">{t(($) => $['content.footer.subheading'])} 🙏</small>
      </div>
    </main>
  );
}
