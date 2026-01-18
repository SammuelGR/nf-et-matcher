import { cn } from '@/utils/cn';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isLoading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'cyan' | 'gradient' | 'green' | 'pink' | 'purple' | 'yellow';
}

const variantsMap = {
  gradient:
    'bg-linear-to-r from-highlight via-accent to-neon-purple focus:ring-accent border-none hover:opacity-90 text-highlight-foreground',
  green: 'bg-neon-green/10 hover:bg-neon-green/20 neon-border-green text-neon-green',
  purple: 'bg-neon-purple/10 hover:bg-neon-purple/20 neon-border-purple text-neon-purple',
  cyan: 'bg-neon-cyan/10 hover:bg-neon-cyan/20 neon-border-cyan text-neon-cyan',
  pink: 'bg-neon-pink/10 hover:bg-neon-pink/20 neon-border-pink text-neon-pink',
  yellow: 'bg-neon-yellow/10 hover:bg-neon-yellow/20 neon-border-yellow text-neon-yellow',
};

const sizesMap = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function NeonButton({
  children,
  className,
  disabled,
  isLoading,
  size = 'md',
  variant = 'green',
  ...props
}: React.PropsWithChildren<NeonButtonProps>) {
  return (
    <button
      className={cn(
        'border-2 duration-300 font-bold font-orbitron relative rounded-xl tracking-wider transition-all uppercase',
        'active:scale-95 disabled:opacity-50 hover-shake',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background',
        isLoading && 'cursor-wait',
        sizesMap[size],
        variantsMap[variant],
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      <span className={cn('flex gap-2 items-center justify-center', isLoading && 'opacity-0')}>{children}</span>

      {isLoading && (
        <span className="absolute flex inset-0 items-center justify-center">
          <span className="flex gap-1">
            <span className="animate-bounce h-2 bg-current rounded-full w-2" style={{ animationDelay: '0ms' }} />
            <span className="animate-bounce h-2 bg-current rounded-full w-2" style={{ animationDelay: '150ms' }} />
            <span className="animate-bounce h-2 bg-current rounded-full w-2" style={{ animationDelay: '300ms' }} />
          </span>
        </span>
      )}
    </button>
  );
}
