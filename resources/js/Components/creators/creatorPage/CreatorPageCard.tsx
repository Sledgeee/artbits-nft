import Box from '@/Components/Box'
import { User } from '@/types/user.type'
import {
	Avatar,
	Badge,
	Button,
	Grid,
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
import { Link } from '@inertiajs/react'

interface CreatorPageCardProps {
	user: User
}

const CreatorButtons: FC<CreatorPageCardProps> = ({
	user
}) => {
	const wallet = user?.metamask_address || ''
	const shortText =
		wallet.substring(0, 8) +
		'...' +
		wallet.substring(wallet.length - 5)
	const [buttonText, setButtonText] =
		useState<string>(shortText)
	const copyToClipboard = () => {
		navigator.clipboard.writeText(wallet)
		setButtonText('Copied to clipboard!')
		setTimeout(() => setButtonText(shortText), 3000)
	}
	return (
		<Box className='flex z-0 mx-auto md:mx-0'>
			<Button auto> + Follow </Button>
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
	user
}) => {
	const checkActiveRoute = (href: string) =>
		location.pathname == `/creator/${user.username}/${href}`

	const routes = [
		{
			href: 'created',
			name: 'Created',
			count: user.createdCount || 0
		},
		{
			href: 'owned',
			name: 'Owned',
			count: user.ownedCount || 0
		},
		{
			href: 'collections',
			name: 'Collections',
			count: user.collectionCount || 0
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
								src={user.avatar_image}
								alt={user.username + ' image'}
							/>
						</Box>
						<Text h1>{user.username}</Text>
						<Spacer y={1} />
						<Box className='flex justify-between mr-6'>
							<Box>
								<Text h4 b>
									{user.transactions_from_sum_value} +
								</Text>
								<Text h6>Volume</Text>
							</Box>
							<Box>
								<Text h4 b>
									{user.transactions_from_count} +
								</Text>
								<Text h6>Nfts Sold</Text>
							</Box>
							<Box>
								<Text h4 b>
									{user.followers_to_count || 0} +
								</Text>
								<Text h6>Followers</Text>
							</Box>
						</Box>
						<>
							<Text span color='#787f85'>
								Bio
							</Text>
							<Text size='$md' css={{ maxW: '400px' }}>
								{user.bio}
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
					<CreatorButtons user={user} />
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
									href={`/creator/${user.username}/${value.href}`}
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
