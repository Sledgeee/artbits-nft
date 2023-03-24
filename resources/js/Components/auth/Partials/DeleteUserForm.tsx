import { useForm } from '@inertiajs/react'
import {
	Button,
	Card,
	Input,
	Modal,
	Spacer,
	Text
} from '@nextui-org/react'
import { BsLock } from 'react-icons/bs'
import React, { useState } from 'react'

export default function DeleteUserForm() {
	const [visible, setVisible] = useState<boolean>()

	const handler = () => setVisible(true)

	const {
		data,
		setData,
		delete: destroy,
		processing,
		reset,
		errors
	} = useForm({
		password: ''
	})

	const deleteUser = () =>
		destroy(route('profile.destroy'), {
			preserveScroll: true,
			onSuccess: () => closeModal(),
			onFinish: () => reset()
		})

	const closeModal = () => reset()

	return (
		<Card css={{ borderWidth: '0px' }}>
			<Card.Body>
				<Text h4>Delete Account</Text>

				<Text color='gray' size='$sm'>
					Once your account is deleted, all of its resources
					and data will be permanently deleted. Before
					deleting your account, please download any data or
					information that you wish to retain.
				</Text>

				<Spacer y={1} />

				<Button auto color='error' shadow onPress={handler}>
					Delete Account
				</Button>
			</Card.Body>

			<Modal
				closeButton
				aria-labelledby='modal-title'
				open={visible}
				onClose={closeModal}
			>
				<Modal.Header>
					<Text h3 className='text-center'>
						Delete user
					</Text>
				</Modal.Header>

				<Modal.Body>
					<Input.Password
						value={data.password}
						onChange={e =>
							setData('password', e.target.value)
						}
						helperColor='error'
						helperText={errors.password}
						clearable
						bordered
						fullWidth
						color='primary'
						size='lg'
						placeholder='Enter your password'
						contentLeft={<BsLock />}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button
						disabled={processing}
						css={{ width: '100%' }}
						color='error'
						onPress={deleteUser}
					>
						User delete
					</Button>
				</Modal.Footer>
			</Modal>
		</Card>
	)
}
