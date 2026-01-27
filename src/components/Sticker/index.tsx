import { cn } from '@/utils/cn';

interface StickerProps {
  className?: string;
  size?: 'md' | 'lg';
  text: string;
  variant?: 'cyan' | 'green' | 'pink' | 'purple' | 'yellow';
}

export default function Sticker({ className, size = 'md', text, variant = 'green' }: StickerProps) {
  return (
    <span
      className={cn(
        'animate-pulse-glow',
        'sticker',
        `sticker-${variant}`,
        size === 'lg' && 'text-xl px-3 py-1 rounded-3xl',
        className,
      )}
    >
      {text}
    </span>
  );
}
