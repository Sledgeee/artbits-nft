import React, { FC } from 'react'
import {
	Button,
	Card,
	Input,
	Spacer,
	Text
} from '@nextui-org/react'
import { useForm } from '@inertiajs/react'
import { useUser } from '@/hooks/useUser'

const ConnectWalletForm: FC = () => {
	const user = useUser()

	const { data, setData, patch, errors } = useForm({
		email: user.email,
		metamask_address: user.metamask_address
	})

	const saveWallet = () => patch(route('profile.update'))

	return (
		<Card css={{ borderWidth: '0px' }}>
			<Card.Body>
				<Text h4>Metamask wallet</Text>
				<Input
					value={data.metamask_address}
					onChange={e =>
						setData('metamask_address', e.target.value)
					}
					helperColor='error'
					helperText={errors.metamask_address}
					placeholder={'Enter your metamask address'}
					clearable
					bordered
					fullWidth
				/>
				<Spacer y={1} />
				<Button onPress={saveWallet}>Save wallet</Button>
			</Card.Body>
		</Card>
	)
}

export default ConnectWalletForm
