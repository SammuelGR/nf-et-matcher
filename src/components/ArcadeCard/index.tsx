import { cn } from '@/utils/cn';

interface ArcadeCardProps {
  animate?: boolean;
  className?: string;
  variant?: 'cyan' | 'green' | 'pink' | 'purple' | 'yellow';
}

export default function ArcadeCard({
  animate,
  children,
  className,
  variant = 'green',
}: React.PropsWithChildren<ArcadeCardProps>) {
  return (
    <div
      className={cn(
        animate && 'animate-float-slow',
        'border-2',
        'glass-card',
        `neon-border-${variant}`,
        'p-6',
        'md:p-8',
        'relative',
        'rounded-2xl',
        className,
      )}
    >
      {children}
    </div>
  );
}
