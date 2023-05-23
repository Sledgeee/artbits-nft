import AppFooter from '@/Components/app/AppFooter'
import AppHeader from '@/Components/app/AppHeader'
import { User } from '@/interfaces/user.interface'
import {
	createTheme,
	getDocumentTheme,
	NextUIProvider
} from '@nextui-org/react'
import { FC, useEffect, useState } from 'react'

const lightTheme = createTheme({
	type: 'light'
})

const darkTheme = createTheme({
	type: 'dark'
})

type LayoutProps = {
	children: JSX.Element | JSX.Element[]
	auth: { user: User }
}

export const Layout: FC<LayoutProps> = ({
	children,
	auth
}) => {
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		const theme = window.localStorage.getItem('data-theme')
		setIsDark(theme === 'dark')
		const observer = new MutationObserver(() => {
			const newTheme = getDocumentTheme(
				document?.documentElement
			)
			setIsDark(newTheme === 'dark')
		})
		observer.observe(document?.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme', 'style']
		})
		return () => observer.disconnect()
	}, [])

	return (
		<NextUIProvider theme={isDark ? darkTheme : lightTheme}>
			<div className='flex flex-col h-screen'>
				<AppHeader user={auth.user} />
				<main className='w-full flex-grow'>
					<div className='max-w-7xl mx-auto'>
						{children}
					</div>
				</main>
				<AppFooter />
			</div>
		</NextUIProvider>
	)
}
export default Layout
