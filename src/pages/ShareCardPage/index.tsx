// TODO: temporary page

import ShareCard from '../Match/Content/ShareCard';

export default function ShareCardPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ShareCard
        compatibility={50}
        nftLeft={{ id: 10, imgUrl: 'https://nft-cdn.alchemy.com/eth-mainnet/b1c3b236d18c8d77ff9292048a09cd6a' }}
        nftRight={{ id: 100, imgUrl: 'https://nft-cdn.alchemy.com/eth-mainnet/6269d197665c1bca9bb83bf00355f1b3' }}
      />
    </div>
  );
}
