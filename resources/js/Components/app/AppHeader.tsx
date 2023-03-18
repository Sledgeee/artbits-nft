import { User } from '@/types/user.type'
import { Link, router } from '@inertiajs/react'
import {
	Avatar,
	Button,
	changeTheme,
	Dropdown,
	Navbar,
	Spacer,
	Switch,
	Text,
	useTheme
} from '@nextui-org/react'
import { FC } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { SiCoinmarketcap } from 'react-icons/si'

interface IAppHeaderProps {
	user: User
}

export const routes = [
	{
		name: 'Marketplace',
		href: '/nft'
	},
	{
		name: 'Rankings',
		href: '/rankings'
	},
	{
		name: 'Collections',
		href: '/collections'
	}
]

const navigate = (href: string) => router.replace(href)

const AppHeader: FC<IAppHeaderProps> = ({ user }) => {
	const { isDark } = useTheme()
	const handleChange = () => {
		const nextTheme = isDark ? 'light' : 'dark'
		window.localStorage.setItem('data-theme', nextTheme)
		changeTheme(nextTheme)
	}
	const checkActive = (href: string) =>
		location.pathname === href

	return (
		<Navbar isBordered variant='sticky'>
			<Navbar.Brand
				className='cursor-pointer'
				onClick={() => navigate('/')}
			>
				<Navbar.Toggle showIn='xs' className='mr-2' />
				<SiCoinmarketcap className='mr-2 text-3xl sm:text-md' />
				<Text b hideIn='xs'>
					ArtBits
				</Text>
			</Navbar.Brand>
			<Navbar.Content
				enableCursorHighlight
				activeColor='primary'
				hideIn='xs'
				variant='highlight'
			>
				{routes.map(value => (
					<Navbar.Link
						key={value.href}
						isActive={checkActive(value.href)}
						onClick={() => navigate(value.href)}
					>
						{value.name}
					</Navbar.Link>
				))}
			</Navbar.Content>
			<Navbar.Content>
				<Navbar.Item>
					<Switch
						checked={isDark}
						onChange={handleChange}
						iconOn={<BsSunFill />}
						iconOff={<BsMoonFill />}
					/>
				</Navbar.Item>
				<Navbar.Item>
					{!user ? (
						<>
							<Spacer x={-0.5} />
							<Button
								auto
								bordered
								shadow
								color='gradient'
								onPress={() => navigate(route('login'))}
							>
								Login
							</Button>
						</>
					) : (
						<>
							<Spacer x={-0.5} />
							<Dropdown placement='bottom-right'>
								<Navbar.Item>
									<Dropdown.Trigger>
										<Avatar
											bordered
											as='button'
											color='primary'
											size='md'
											src={user.avatar_image}
										/>
									</Dropdown.Trigger>
								</Navbar.Item>
								<Dropdown.Menu
									aria-label='User menu actions'
									color='primary'
								>
									<Dropdown.Item
										key='profile'
										css={{ height: '$18' }}
									>
										<Text
											b
											color='inherit'
											css={{ d: 'flex' }}
										>
											Signed in as
										</Text>
										<Text
											b
											color='inherit'
											css={{ d: 'flex' }}
										>
											{user.email}
										</Text>
									</Dropdown.Item>
									<Dropdown.Item key='settings' withDivider>
										<Link href={route('dashboard')}>
											Dashboard
										</Link>
									</Dropdown.Item>
									<Dropdown.Item withDivider color='error'>
										<Link
											href={route('logout')}
											method='post'
										>
											Log Out
										</Link>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</>
					)}
				</Navbar.Item>
			</Navbar.Content>
			<Navbar.Collapse>
				{routes.map((item, index) => (
					<Navbar.CollapseItem
						key={index}
						activeColor='warning'
						isActive={checkActive(item.href)}
					>
						<Link color='inherit' href={item.href}>
							{item.name}
						</Link>
					</Navbar.CollapseItem>
				))}
			</Navbar.Collapse>
		</Navbar>
	)
}

export default AppHeader
