import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/major-mono-display'
import { WagmiConfig, createConfig } from 'wagmi'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'
import { polygonMumbai, arbitrumSepolia, baseGoerli, mainnet, polygonZkEvmTestnet, goerli } from 'wagmi/chains'
import { FC } from 'react'
import theme from '@/theme.json'

const chains = [goerli, polygonMumbai, arbitrumSepolia, baseGoerli, mainnet, polygonZkEvmTestnet]

const config = createConfig(
	getDefaultConfig({
		alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID as string,
		walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
		appName: 'Safe Intents',
		chains
	})
)

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return(
		<WagmiConfig config={config}>
			<ConnectKitProvider customTheme={theme}>
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
			</ConnectKitProvider>
		</WagmiConfig>
  )
}

export default App
