import Sticker from '@/components/Sticker';

import type { SearchMode } from '../types';

interface ContentProps {
  onSubmitForm: () => void;
  searchMode: SearchMode;
  setSearchMode: React.Dispatch<React.SetStateAction<SearchMode>>;
}

export default function Content({ onSubmitForm, searchMode, setSearchMode }: ContentProps) {
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmitForm();
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-8">
      {/* TODO: card */}
      <div className="border-2 flex flex-col items-center justify-center p-8 rounded-xl space-y-6 w-full">
        <div className="space-y-2 text-center">
          <div className="flex items-center space-x-2">
            <span className="animate-pulse neon-text-yellow">⚡️</span>

            <h2 className="font-bold text-primary text-xl tracking-wider uppercase">Encontre seu match</h2>

            <span className="animate-pulse neon-text-yellow">⚡️</span>
          </div>

          <p className="text-sm">Escolha um modo e deixe o algoritmo degen trabalhar</p>
        </div>

        <div className="flex gap-4 justify-center w-full">
          <button
            className="cursor-pointer bg-highlight/70 hover:bg-highlight h-10 w-full rounded-sm text-highlight-foreground transition-colors"
            onClick={() => setSearchMode('id')}
          >
            Por ID
          </button>

          <button
            className="cursor-pointer bg-highlight/70 hover:bg-highlight h-10 w-full rounded-sm text-highlight-foreground transition-colors"
            onClick={() => setSearchMode('random')}
          >
            Aleatório
          </button>
        </div>

        {searchMode === 'id' ? (
          <form className="w-full" id="form-nft-id" onSubmit={formSubmitHandler} noValidate={true}>
            <label className="space-y-2">
              <p className="text-sm font-medium">ID do seu ET</p>

              <input
                className="bg-muted/50 border border-white/10 focus:outline-none focus:border-highlight/50 focus:ring-2 focus:ring-highlight/20 font-mono placeholder:text-secondary/50 px-4 py-3 rounded-xl text-primary transition-all w-full"
                id="input-nft-id"
                max={4199}
                min={0}
                placeholder="Digite o ID (0 a 4199)"
                step={1}
                type="number"
              />
            </label>

            <button
              className="bg-neon-green/70 cursor-pointer mt-4 uppercase text-muted h-10 rounded-sm w-full "
              type="submit"
            >
              🔍 Procurar match
            </button>
          </form>
        ) : (
          <button className="bg-neon-green/70 cursor-pointer h-12 rounded-sm text-muted uppercase w-full">
            🔀 Match aleatório
          </button>
        )}

        <div className="mt-2 space-x-2">
          <Sticker text="NFA" variant="yellow" />

          <Sticker text="DYOR" variant="pink" />

          <Sticker text="AURA++" variant="cyan" />
        </div>
      </div>

      <div className="mt-8 space-y-2 text-center">
        <p className="text-sm">✨ Sem login, sem KYC, só match de ET</p>

        <small className="opacity-60 text-xs">Clique e reze pro algoritmo degen 🙏</small>
      </div>
    </main>
  );
}
