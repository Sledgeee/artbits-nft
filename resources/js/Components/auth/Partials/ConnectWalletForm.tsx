import React, { FC } from 'react'
import {
	Button,
	Card,
	Spacer,
	Text
} from '@nextui-org/react'
import { usePage } from '@inertiajs/react'
import { InertiaPage } from '@/Components/auth/Partials/UpdateProfileInformationForm'
import { useMetaMask } from 'metamask-react'

const ConnectWalletForm: FC = () => {
	const user = usePage<
		InertiaPage & { [key: string]: any }
	>().props.auth.user

	const { status, connect, account } = useMetaMask()

	return (
		<Card css={{ borderWidth: '0px' }}>
			<Card.Body>
				<Text h4>Connect wallet</Text>

				<Text color='gray' size='$sm'>
					Connect your metamask account
				</Text>

				{user?.metamask_address && (
					<Text size='$md' color='gray'>
						Current metamask address:
						<Text span color='default'>
							{' ' + user.metamask_address}
						</Text>
					</Text>
				)}

				<Spacer y={1} />
				{status === 'connecting' && (
					<div>Connecting...</div>
				)}
				{status === 'notConnected' &&
					user.metamask_address === '' && (
						<Button
							onClick={connect}
							css={{ width: '100%' }}
							color='primary'
						>
							Connect wallet
						</Button>
					)}
				{status === 'connected' && (
					<div>Metamask connected</div>
				)}
			</Card.Body>
		</Card>
	)
}

export default ConnectWalletForm
