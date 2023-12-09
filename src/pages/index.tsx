import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Intents } from '@bytekode/intents'
import { useAccount } from 'wagmi'
import { useState } from 'react'
import {
	SafeAuthPack,
	SafeAuthConfig,
	SafeAuthInitOptions,
  } from '@safe-global/auth-kit'

import { ConnectKitButton } from 'connectkit'

	  
const Home: NextPage = () => {
	
	const { address, isConnected, connector } = useAccount()
	const [ command, setCommand] = useState('')
	const [ txObjectArray, setTxObjectArray] = useState<Array<{
		to: string,
		data: string,
		value: string
	}>>([{
		to: '',
		data: '',
		value: ''
	}])
	
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
	
	const heroText = `Infra for building the next-gen of web3 automation agents`
	
	const executeIntents = async () => {
		const url = 'http://localhost:8080/payments';
		const chainId = '137'
		console.log()
		const body = JSON.stringify({
			chainId: 1,
			// chainId: (await connector!.getChainId()).toString(),
			command: command,
			recipient: address,
		});

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: body,
			});

			const res = await response.json()
			setTxObjectArray([res])
			console.log(res)
		} catch (error) {
			// Handle network error
		}
	};
	
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
			<HStack px={[4,8,12]} p={[4,8,12]} justify={'space-between'}>
				<Heading fontFamily={'Major Mono Display'} color={'gray.400'}>
					Valmor
				</Heading>
				{
					// isConnected && (<Text color={'gray.400'} fontFamily={'mono'}>
					// 	{address?.slice(0, 6)}...{address?.slice(-6)}
					// </Text>)
				}
				{
					isConnected && (<ConnectKitButton />)
				}
			</HStack>
			{
				!isConnected ? 
				(
					<VStack fontFamily={'monospace'}>
						<Text fontSize={'3xl'} color={'gray.300'} fontFamily={'Major Mono Display'}>{heroText}</Text>
						{/* <Button
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
						</Button> */}

						<Stack mt={4}>
							<ConnectKitButton />
						</Stack>
					</VStack>
				) :
				(
					<VStack fontFamily={'monospace'}>
						<Input 
							value={command} 
							onChange={(e) => setCommand(e.target.value)}
							w={'50%'}
							variant={'filled'}
							bgColor={'gray.800'}
							rounded={'none'}
							color={'gray.300'}
						/>
						<Button
							mt={4}
							style={{
								borderRadius: 0,
								backgroundColor: 'rgba(255, 255, 255, 0.1)',
								fontFamily: 'monospace'
							}}
							color={'gray.300'}
							// fontSize={'xl'}
							fontWeight={'regular'}
							onClick={() => executeIntents()}
						>
							Get Started
						</Button>
						{
							txObjectArray.length > 0 && (
								<Stack
									bg="gray.100"
									p={4}
									borderRadius="md"
									// color="red"
									w={'50%'}
									bgColor={'gray.800'}
									color={'gray.300'}
									mt={8}
									spacing={8}
								>
									<Text fontWeight="bold" fontSize={'2xl'} fontFamily={'Major Mono Display'}>Transaction Details:</Text>
									{
										txObjectArray.map((obj) => {
											return (
												<div>
													<Text>To: {obj.to}</Text>
													<Text>Data: {obj.data}</Text>
													<Text>Value: {obj.value}</Text>
												</div>										
											)
										})
									}
									{/* ... add other transaction details you want to display */}
								</Stack>	 
							)
						}
					</VStack>
				)
			}
		</Stack>
	)
}

export default Home