import Box from '@/Components/Box'
import { User } from '@/types/user.type'
import {
	Avatar,
	Badge,
	Button,
	Grid,
	Loading,
	Row,
	Spacer,
	Text
} from '@nextui-org/react'
import { FC, useState } from 'react'
import {
	BsClipboard,
	BsDiscord,
	BsInstagram,
	BsTwitter,
	BsYoutube
} from 'react-icons/bs'
import { Link, useForm } from '@inertiajs/react'

interface CreatorPageCardProps {
	creator: User
	user?: User
}

const CreatorButtons: FC<CreatorPageCardProps> = ({
	user,
	creator
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

	const isFollowed = true

	const { post, processing, wasSuccessful } = useForm({
		from: user?.id || 1,
		to: creator.id
	})
	const [color, setColor] = useState<'primary' | 'error'>(
		'primary'
	)
	const submit = () => {
		if (user) post(route('user.follow'))
		else setColor('error')
	}

	return (
		<Box className='flex z-0 mx-auto md:mx-0'>
			<Button
				onPress={submit}
				disabled={processing}
				color={color}
				auto
			>
				{processing ? (
					<Loading
						type='points'
						color='currentColor'
						size='sm'
					/>
				) : wasSuccessful ? (
					isFollowed ? (
						'Followed'
					) : (
						'UnFollow'
					)
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

const CreatorPageCard: FC<CreatorPageCardProps> = ({
	user,
	creator
}) => {
	const checkActiveRoute = (href: string) =>
		location.pathname ==
		`/creator/${creator.username}/${href}`

	const routes = [
		{
			href: 'created',
			name: 'Created',
			count: creator.createdCount || 0
		},
		{
			href: 'owned',
			name: 'Owned',
			count: creator.ownedCount || 0
		},
		{
			href: 'collections',
			name: 'Collections',
			count: creator.collectionCount || 0
		}
	]

	return (
		<div className='container mx-auto'>
			<Grid.Container gap={2}>
				<Grid xs={12} sm={7}>
					<Box className='mx-auto md:mx-0'>
						<Box>
							<Spacer y={-2} />
							<Avatar
								size='xl'
								src={creator.avatar_image}
								alt={creator.username + ' image'}
							/>
						</Box>
						<Text h1>{creator.username}</Text>
						<Spacer y={1} />
						<Box className='flex justify-between mr-6'>
							<Box>
								<Text h4 b>
									{creator.transactions_from_sum_value} +
								</Text>
								<Text h6>Volume</Text>
							</Box>
							<Box>
								<Text h4 b>
									{creator.transactions_from_count} +
								</Text>
								<Text h6>Nfts Sold</Text>
							</Box>
							<Box>
								<Text h4 b>
									{creator.followers_to_count || 0} +
								</Text>
								<Text h6>Followers</Text>
							</Box>
						</Box>
						<>
							<Text span color='#787f85'>
								Bio
							</Text>
							<Text size='$md' css={{ maxW: '400px' }}>
								{creator.bio}
							</Text>
						</>
						<Spacer y={0.5} />
						<>
							<Text small>Join our community</Text>
							<Row className='gap-x-2 text-gray-500'>
								<BsDiscord />
								<BsYoutube />
								<BsInstagram />
								<BsTwitter />
							</Row>
						</>
						<Spacer y={0.7} />
					</Box>
				</Grid>
				<Grid xs={12} sm={5} className='flex-end'>
					<CreatorButtons creator={creator} user={user} />
				</Grid>
			</Grid.Container>
			<Box>
				<Row className='flex mx-auto border-b-[1px] gap-x-8 border-gray-700 px-4 '>
					{routes.map((value, index) => (
						<Box
							key={index}
							className={`pb-1 ${
								checkActiveRoute(value.href)
									? ' border-b-2 border-blue-400'
									: ''
							}`}
						>
							{value.count !== 0 ? (
								<Link
									href={`/creator/${creator.username}/${value.href}`}
								>
									<Text
										h5
										color={
											checkActiveRoute(value.href)
												? 'primary'
												: 'gray'
										}
									>
										{value.name}
										<Badge
											children={value.count}
											size='xs'
											className='ml-3'
										/>
									</Text>
								</Link>
							) : (
								<Text h5 color='gray'>
									{value.name}
									<Badge
										children={value.count}
										size='xs'
										className='ml-3'
									/>
								</Text>
							)}
						</Box>
					))}
				</Row>
			</Box>
		</div>
	)
}

export default CreatorPageCard
