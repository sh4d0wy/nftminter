
import { cookieStorage, createConfig, createStorage, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

// Get projectId from https://cloud.walletconnect.com
export const projectId ="26e1fd07d89bf6998f4f0bd97c27c480";

export const config = createConfig({
    chains: [mainnet, sepolia],
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  })