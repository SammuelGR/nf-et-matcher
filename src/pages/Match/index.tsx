import { ArrowLeft as ArrowLeftIcon, RefreshCw as RefreshCwIcon, Sparkles as SparklesIcon } from 'lucide-react';
import { useNavigate } from 'react-router';

import NeonButton from '@/components/NeonButton';
import { PATHS } from '@/routes/paths';
import Background from '@/ui/Background';

export default function Match() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      <Background />

      <div className="flex flex-col min-h-screen relative z-10">
        <header className="flex items-center justify-between px-4 md:px-18 py-4">
          <NeonButton onClick={() => navigate(PATHS.GENERATOR)} size="sm" variant="purple">
            <ArrowLeftIcon className="w-4 h-4" />
            Voltar
          </NeonButton>

          <h1 className="text-primary text-xl neon-text-pink">
            <span className="neon-text-green">NF_ET</span>inder
          </h1>

          <NeonButton
            isLoading={false /* TODO */}
            onClick={() => {
              /* TODO */
            }}
            size="sm"
            variant="cyan"
          >
            <RefreshCwIcon className="w-4 h-4" />
            Novo match
          </NeonButton>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center px-4 py-8">
          <div className="animate-slot-reveal flex flex-col gap-2 items-center">
            <div className="flex gap-2 items-center">
              <SparklesIcon className="animate-pulse-glow h-6 text-neon-yellow w-6" />

              <h2 className="font-black neon-text-green text-2xl md:text-3xl tracking-wider uppercase text-highlight">
                Match Detectado!
              </h2>

              <SparklesIcon className="animate-pulse-glow h-6 text-neon-yellow w-6" />
            </div>

            <p className="text-sm">O algoritmo degen encontrou um par cósmico</p>
          </div>

          <div className="pt-4 space-y-1 text-center">
            <p className="text-sm">Manda no chat e marca o ET 👽</p>

            <p className="text-secondary/60 text-xs">Se der ruim, gera outro e finge que era esse</p>
          </div>
        </main>
      </div>
    </div>
  );
}
