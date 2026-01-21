import { ArrowLeft as ArrowLeftIcon, RefreshCw as RefreshCwIcon } from 'lucide-react';
import { useNavigate } from 'react-router';

import NeonButton from '@/components/NeonButton';
import { PATHS } from '@/routes/paths';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-4 md:px-18 py-4 relative">
      <NeonButton onClick={() => navigate(PATHS.GENERATOR)} size="sm" variant="purple">
        <ArrowLeftIcon className="w-4 h-4" />
        Voltar
      </NeonButton>

      <h1 className="absolute inset-x-0 font-bold neon-text-pink hidden sm:block pointer-events-none text-center text-primary text-xl">
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
  );
}
