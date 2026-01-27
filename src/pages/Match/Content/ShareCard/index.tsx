import { cn } from '@/utils/cn';

import Background from './Background';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

import type { NFTData } from './types';

interface ShareCardProps {
  compatibility: number;
  nftLeft: NFTData;
  nftRight: NFTData;
}

export default function ShareCard({ compatibility, nftLeft, nftRight }: ShareCardProps) {
  return (
    <div
      className={cn(
        'border-3 border-white/10 rounded-4xl font-orbitron h-200 overflow-hidden relative w-300',
        'bg-linear-to-br from-[#0a0a12] via-[#12121f] to-[#0a0a12]',
      )}
    >
      <Background />

      <div className="flex flex-col h-full p-12 relative">
        <Header />

        <Content compatibility={compatibility} nftLeft={nftLeft} nftRight={nftRight} />

        <Footer />
      </div>
    </div>
  );
}
