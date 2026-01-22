import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';

const RPC_URL = import.meta.env.VITE_PUBLIC_RPC_URL;

export const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(RPC_URL),
  },
});
