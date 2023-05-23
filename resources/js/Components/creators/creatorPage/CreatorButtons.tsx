import {FC, useEffect, useState} from 'react'
import axios from 'axios'
import {Button, Spacer} from '@nextui-org/react'
import {BsClipboard} from 'react-icons/bs'
import {User} from '@/interfaces/user.interface'
import {Follower} from '@/interfaces/follower.interface'
import {useUser} from '@/hooks/useUser'
import {navigate} from "@/Components/app/AppHeader";

export interface CreatorSectionProps {
    creator: User
    followers?: Follower[]
}

const CreatorButtons: FC<CreatorSectionProps> = ({
                                                     creator,
                                                     followers
                                                 }) => {
    const user = useUser()
    const wallet = creator?.metamask_address || ''
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
		followers?.some(x => x.to_user_id === creator.id)
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
					}
				})
				.catch(() => {
					setFollowBtnIsDisabled(false)
					setColor('error')
				})
		}
        followBtnIsDisabled ?
            navigate(
                route('login')
                + '?returnTo='
                + window.location.pathname
            ) :
            !followed
                ? handle('follow', true)
                : handle('unfollow', false)
	}

	useEffect(() => {
		if (!user) setFollowBtnIsDisabled(true)
	}, [])

	return (
		<div className='flex z-0 mx-auto md:ml-auto'>
            <Button
                onPress={submit}
                color={color}
                auto
            >
                {followed ? (
                    'Unfollow'
                ) : (
                    'Follow'
                )}
            </Button>
            <Spacer y={0.5}/>
			<Button
				bordered
				onPress={copyToClipboard}
				color='gradient'
			>
				<BsClipboard className='mr-2' />
				{buttonText}
			</Button>
		</div>
	)
}

export default CreatorButtons
