'use client'

import { Box, Button } from '@chakra-ui/react'
import { NextPage } from 'next'

import {
	SafeAuthPack,
	SafeAuthConfig,
	SafeAuthInitOptions,
  } from '@safe-global/auth-kit'

	  
const Home: NextPage = () => {
		  
	// const createNewSafe = async (rpcUrl: string) => {
		
	// 	const safeAuthInitOptions: SafeAuthInitOptions = {
	// 		enableLogging: true,
	// 		showWidgetButton: false,
	// 		chainConfig: {
	// 		  chainId: '0x1',
	// 		  rpcTarget: `${rpcUrl}`
	// 		},
	// 	}

	// 	const safeAuthConfig: SafeAuthConfig = {
	// 		txServiceUrl: 'https://safe-transaction-mainnet.safe.global'
	// 	}

	// 	const safeAuthPack = new SafeAuthPack(safeAuthConfig)
		
	// 	await safeAuthPack.init(safeAuthInitOptions)

	// 	const authKitSignData = await safeAuthPack.signIn()

	// 	console.log(authKitSignData)
	// }

	{/* <Button onClick={() => createNewSafe(`https://goerli.rpc.thirdweb.com`)}>Login</Button> */}
	
	return (

		<Box
			bg={`url('/valmor protocol.png')`}
			bgPosition="center"
			bgRepeat="no-repeat"
			bgSize="cover"
			width="100vw"
			height="100vh"
		>
			<Button>get started</Button>
		</Box>
	)
}

export default Home