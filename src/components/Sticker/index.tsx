import { cn } from '@/utils/cn';

interface StickerProps {
  className?: string;
  text: string;
  variant?: 'cyan' | 'green' | 'pink' | 'purple' | 'yellow';
}

export default function Sticker({ className, text, variant = 'green' }: StickerProps) {
  return <span className={cn('sticker', `sticker-${variant}`, className)}>{text}</span>;
}
