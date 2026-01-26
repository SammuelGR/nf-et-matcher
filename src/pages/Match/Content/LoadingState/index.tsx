import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ArcadeCard from '@/components/ArcadeCard';

export default function LoadingState() {
  const [dots, setDots] = useState('');
  const [messageIdx, setMessageIdx] = useState(0);

  const { t } = useTranslation('match');

  const messagesMap = [
    t(($) => $['loading_state.message.1']),
    t(($) => $['loading_state.message.2']),
    t(($) => $['loading_state.message.3']),
    t(($) => $['loading_state.message.4']),
    t(($) => $['loading_state.message.5']),
  ];

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length === 3 ? '' : prev + '.'));
    }, 400);

    const messagesInterval = setInterval(() => {
      setMessageIdx((prev) => (prev + 1) % messagesMap.length);
    }, 2000);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(messagesInterval);
    };
  }, [messagesMap.length]);

  return (
    <div className="flex flex-1 flex-col gap-8 items-center justify-center">
      <div className="relative size-32">
        <div className="absolute border-4 border-highlight/20 inset-0 rounded-full" />
        <div className="absolute border-4 border-highlight/20 inset-2 rounded-full" />
        <div className="absolute border-4 border-highlight/10 inset-4 rounded-full" />

        <div
          className="absolute animate-spin border-highlight border-t-4 inset-0 rounded-full"
          style={{ animationDuration: '1.5s' }}
        />

        <p aria-hidden={true} className="absolute animate-twinkle flex inset-0 items-center justify-center text-4xl">
          👽
        </p>
      </div>

      <ArcadeCard variant="cyan">
        <p aria-live="polite" className="font-orbitron text-accent text-xs sm:text-sm tracking-wider uppercase">
          {messagesMap[messageIdx]}

          <span aria-hidden={true}>{dots}</span>
        </p>
      </ArcadeCard>
    </div>
  );
}
