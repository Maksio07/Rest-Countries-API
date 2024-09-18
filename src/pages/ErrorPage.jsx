import { useContext } from 'react'
import { DarkModeContext } from '../store/DarkModeContext'
import NavigationBar from '../components/NavigationBar.jsx'

export default function ErrorPage() {
    const modeCtx = useContext(DarkModeContext)

    let title = 'An error occured!'
    let message = 'Something was wrong, please try again.'

	return (
		<>
			<NavigationBar />
            <main className='flex flex-col items-center h-[94.15vh] w-screen bg-[--background]' data-theme={modeCtx.theme}>
                <h2 className='mt-[2rem] text-[2rem] text-[--text]'>{title}</h2>
                <p className='mt-[2rem] text-[1.4rem] text-[--text]'>{message}</p>
            </main>
		</>
	)
}
