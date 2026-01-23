import { useState } from 'react';

export default function useClipboard(timeout = 2000) {
  const [isCopied, setIsCopied] = useState(false);

  const writeToClipboard = async (text: string) => {
    if (!navigator?.clipboard) return;

    try {
      await navigator.clipboard.writeText(text);

      setIsCopied(true);

      setTimeout(() => setIsCopied(false), timeout);
    } catch {
      /* ¯\_(ツ)_/¯ */
    }
  };

  return {
    isCopied,
    writeToClipboard,
  };
}
