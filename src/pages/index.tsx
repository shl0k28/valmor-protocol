'use client'

import { Box, Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
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
	
	const heroText = `Interchain 1-click defi automation `
	return (

		<Stack
			bg={`url('/valmor protocol.png')`}
			bgPosition="center"
			bgRepeat="no-repeat"
			bgSize="cover"
			width="100vw"
			height="100vh"
			spacing={8}
		>
			<Stack px={[4,8,12]} p={[4,8,12]}>
				<Heading fontFamily={'Major Mono Display'} color={'gray.400'}>
					valmor
				</Heading>
			</Stack>
			<VStack fontFamily={'monospace'}>
				<Text fontSize={'3xl'} color={'gray.300'} fontFamily={'Major Mono Display'}>{heroText}</Text>
				<Button
					mt={4}
					style={{
						borderRadius: 0,
						backgroundColor: 'rgba(255, 255, 255, 0.1)',
						fontFamily: 'monospace'
					}}
					color={'gray.300'}
					fontSize={'xl'}
					fontWeight={'regular'}
				>
					Get Started
				</Button>
			</VStack>
		</Stack>
	)
}

export default Home