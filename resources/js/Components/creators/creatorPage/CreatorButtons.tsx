import { FC, useState } from 'react'
import axios from 'axios'
import Box from '@/Components/Box'
import { Button, Loading, Spacer } from '@nextui-org/react'
import { BsClipboard } from 'react-icons/bs'
import { User } from '@/types/user.type'
import { Follower } from '@/types/follower.type'

export interface CreatorSectionProps {
	creator: User
	followers?: Follower[]
}

const CreatorButtons: FC<CreatorSectionProps> = ({
	creator,
	followers
}) => {
	const wallet = creator.metamask_address
	const shortText =
		wallet.substring(0, 8) +
		'...' +
		wallet.substring(wallet.length - 5)
	const [buttonText, setButtonText] =
		useState<string>(shortText)

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(wallet)
		setButtonText('Copied to clipboard!')
		setTimeout(() => setButtonText(shortText), 3000)
	}

	const [color, setColor] = useState<'primary' | 'error'>(
		'primary'
	)
	const [followBtnIsDisabled, setFollowBtnIsDisabled] =
		useState(false)
	const [followed, setFollowed] = useState(
		followers?.some(x => x.to_user_id === creator.id) ||
			false
	)
	const submit = () => {
		setFollowBtnIsDisabled(true)
		const handle = (url: string, state: boolean) => {
			axios
				.get(`/${url}/${creator.id}`)
				.then(response => {
					if (response.status === 200) {
						setFollowed(state)
						setFollowBtnIsDisabled(false)
					} else setColor('error')
				})
				.catch(e => {
					console.log(e)
					setColor('error')
				})
		}

		!followed
			? handle('follow', true)
			: handle('unfollow', false)
	}

	return (
		<Box className='flex z-0 mx-auto md:ml-auto'>
			<Button
				onPress={submit}
				disabled={followBtnIsDisabled}
				color={color}
				auto
			>
				{followBtnIsDisabled ? (
					<Loading
						type='points'
						color='currentColor'
						size='sm'
					/>
				) : followed ? (
					'Unfollow'
				) : (
					'+ Follow'
				)}
			</Button>
			<Spacer y={0.5} />
			<Button
				bordered
				onPress={copyToClipboard}
				color='gradient'
			>
				<BsClipboard className='mr-2' />
				{buttonText}
			</Button>
		</Box>
	)
}

export default CreatorButtons
