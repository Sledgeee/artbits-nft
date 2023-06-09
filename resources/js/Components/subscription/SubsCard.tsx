import {
	Button,
	Card,
	Grid,
	Input,
	Text,
	useInput
} from '@nextui-org/react'
import { FC, useMemo } from 'react'
import { MdEmail } from 'react-icons/md'
import { textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'

interface IEmailInputProps {
	text: 'Correct email' | 'Enter a valid email' | ''
	color: 'success' | 'error' | ''
}

const SubsCard: FC = () => {
	const { value, reset, bindings } = useInput('')
	const validateEmail = (value: string) => {
		return value.match(
			/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i
		)
	}
	const helper: IEmailInputProps = useMemo(() => {
		if (!value)
			return {
				text: '',
				color: ''
			}
		const isValid = validateEmail(value)
		return {
			text: isValid
				? 'Correct email'
				: 'Enter a valid email',
			color: isValid ? 'success' : 'error'
		}
	}, [value])

	return (
		<div className='container mx-auto'>
			<Grid.Container gap={2} justify='center'>
				<Grid xs={12} sm={7}>
					<motion.div variants={textVariant(0)}>
						<Card
							css={{
								w: '100%',
								h: '300px',
								borderWidth: '0px'
							}}
						>
							<Card.Body css={{ p: 0 }}>
								<Card.Image
									src='https://i.ytimg.com/vi/KtKOZB6Mshc/maxresdefault.jpg'
									objectFit='cover'
									width='100%'
									height='100%'
									alt='Relaxing app background'
								/>
							</Card.Body>
						</Card>
					</motion.div>
				</Grid>
				<Grid xs={12} sm={5}>
					<motion.div
						variants={textVariant(0)}
						className='mx-auto'
					>
						<Text h1>Join our weekly digest</Text>
						<Text h4 className='mb-4 lg:mb-0'>
							Get exclusive promotions & updates straight to
							your inbox.
						</Text>
						<div className='mt-6'>
							<Input
								{...bindings}
								css={{ width: '100%' }}
								clearable
								shadow
								onClearClick={reset}
								status={helper.color || 'default'}
								color={helper.color || 'default'}
								helperColor={helper.color || 'default'}
								helperText={helper.text}
								type='email'
								placeholder='Enter Your Email Address'
							/>
							<Button
								shadow
								color='secondary'
								className='mt-4'
								css={{ width: '100%' }}
							>
								<MdEmail className='mr-1' />
								<Text span>Subscribe</Text>
							</Button>
						</div>
					</motion.div>
				</Grid>
			</Grid.Container>
		</div>
	)
}

export default SubsCard
