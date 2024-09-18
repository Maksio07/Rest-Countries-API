import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { DarkModeContext } from '../store/DarkModeContext'
import NavigationBar from '../components/NavigationBar'

export default function RootLayout() {
	const themeCtx = useContext(DarkModeContext)

	return (
		<>
			<NavigationBar />
			<main className='min-h-[100vh] bg-[--background]' data-theme={themeCtx.theme}>
				<Outlet />
			</main>
		</>
	)
}
