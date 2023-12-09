import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'

import {
	SafeAuthPack,
	SafeAuthConfig,
	SafeAuthInitOptions,
  } from '@safe-global/auth-kit'

	  
const Home: NextPage = () => {
		  
	const createNewSafe = async (rpcUrl: string) => {
		
		const safeAuthInitOptions: SafeAuthInitOptions = {
			enableLogging: true,
			showWidgetButton: false,
			chainConfig: {
			  chainId: '0x1',
			  rpcTarget: `${rpcUrl}`
			},
		}

		const safeAuthConfig: SafeAuthConfig = {
			txServiceUrl: 'https://safe-transaction-mainnet.safe.global'
		}

		const safeAuthPack = new SafeAuthPack(safeAuthConfig)
		
		await safeAuthPack.init(safeAuthInitOptions)

		const authKitSignData = await safeAuthPack.signIn()

		console.log(authKitSignData)
	}

	return (
		<Box>

		</Box>
	)
}

export default Home