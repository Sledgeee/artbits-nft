import React, { FC } from 'react'
import { Button, Checkbox, Input, Modal, Row, Text } from '@nextui-org/react'
import { BsAt, BsLock } from 'react-icons/bs'

const LoginModal: FC = () => {
	const [visible, setVisible] = React.useState(false)
    
	const handler = () => setVisible(true)
	const closeHandler = () => setVisible(false)

	return (
		<div>
			<Button auto bordered shadow color='gradient' onPress={handler}>
				Login
			</Button>
			<Modal
				className='mx-2'
				closeButton
				preventClose
				aria-labelledby='modal-title'
				open={visible}
				onClose={closeHandler}
			>
				<Modal.Header>
					<Text id='modal-title' size={18}>
						Login
					</Text>
				</Modal.Header>
				<Modal.Body>
					<Input
						clearable
						bordered
						fullWidth
						color='primary'
						size='lg'
						type='email'
						placeholder='Email'
						contentLeft={<BsAt />}
					/>
					<Input
						clearable
						bordered
						fullWidth
						color='primary'
						type='password'
						size='lg'
						placeholder='Password'
						contentLeft={<BsLock />}
					/>
					<Row justify='space-between'>
						<Checkbox>
							<Text size={14}>Remember me</Text>
						</Checkbox>
						<Text size={14}>Forgot password?</Text>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button onPress={closeHandler}>Sign in</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}

export default LoginModal
