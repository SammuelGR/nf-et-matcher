import { useTranslation } from 'react-i18next';

import { cn } from '@/utils/cn';

import type { SearchMode } from '../../types';

interface ModeToggleProps {
  mode: SearchMode;
  onModeChange: (mode: SearchMode) => void;
}

export default function ModeToggle({ mode, onModeChange }: ModeToggleProps) {
  const { t } = useTranslation('generator');

  return (
    <div className="backdrop-blur-sm bg-muted/50 border border-white/5 flex p-1 relative rounded-xl w-full">
      {/* slider */}
      <div
        className={cn(
          'absolute border border-highlight/40 duration-300 h-[calc(100%-8px)] neon-border-green rounded-lg top-1 transition-all w-[calc(50%-4px)]',
          'bg-linear-to-r from-highlight/20 to-accent/20',
          mode === 'id' ? 'left-1' : 'left-1/2',
        )}
      />

      <button
        onClick={() => onModeChange('id')}
        className={cn(
          'duration-300 flex-1 font-medium font-orbitron px-4 py-3 relative rounded-lg text-sm tracking-wider transition-colors uppercase z-10',
          mode === 'id' ? 'text-highlight' : 'text-secondary hover:text-foreground',
        )}
      >
        {t(($) => $['content.mode.by_id'])}
      </button>

      <button
        onClick={() => onModeChange('random')}
        className={cn(
          'duration-300 flex-1 font-medium font-orbitron px-4 py-3 relative rounded-lg text-sm tracking-wider transition-colors uppercase z-10',
          mode === 'random' ? 'text-highlight' : 'text-secondary hover:text-foreground',
        )}
      >
        {t(($) => $['content.mode.random'])}
      </button>
    </div>
  );
}
