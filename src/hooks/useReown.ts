import { cookieStorage, createStorage } from 'wagmi';
import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { base, mainnet } from '@reown/appkit/networks'; 


export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error('Project ID is not defined in .env.local');
}

export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks: [base, mainnet],
  ssr: true,
  connectors: [],
});

createAppKit({
  adapters: [wagmiAdapter],
  networks: [base, mainnet],
  projectId,
  metadata: {
    name: "MiniDex",
    description: "MiniDex",
    url: "https://dex.oxymarket.app",
    icons: ["https://dex.exymarket.app/logo.png"],
  },
  themeMode: "light",
});


export const config = wagmiAdapter.wagmiConfig;
