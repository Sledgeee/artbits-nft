import {FC, useEffect, useState} from 'react'
import {createTheme, getDocumentTheme, NextUIProvider} from "@nextui-org/react";
import AppHeader from "@/Components/app/AppHeader";
import AppFooter from "@/Components/app/AppFooter";
import Box from "@/Components/Box";

const lightTheme = createTheme({
    type: 'light'
})


const darkTheme = createTheme({
    type: 'dark'
})
type Props = {
    children: JSX.Element | JSX.Element[]
    auth: { user: any }

}

export const Layout: FC<Props> = ({children, auth}) => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const theme = window.localStorage.getItem('data-theme')
        setIsDark(theme === 'dark')
        const observer = new MutationObserver(() => {
            const newTheme = getDocumentTheme(document?.documentElement)
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
            <Box css={{maxW: '100%'}}>
                <AppHeader auth={auth}/>
                {children}
                <AppFooter/>
            </Box>
        </NextUIProvider>
    )
}
export default Layout
