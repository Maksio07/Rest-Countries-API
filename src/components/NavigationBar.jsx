import { useContext } from 'react'
import { DarkModeContext } from '../store/DarkModeContext'
import moonIcon from '../assets/moonIcon.svg'
import sunIcon from '../assets/sunIcon.svg'

export default function NavigationBar() {
	const ctx = useContext(DarkModeContext)

	return (
		<nav className='navigation flex justify-between items-center h-[5rem] bg-[--elements] shadow-md' data-theme={ctx.theme}>
			<h1 className='navigation-title ml-[5rem] text-[1.6rem] font-[800] text-[--text]'>Where is the world?</h1>
			<button
				type='button'
				className='navigation-button flex mr-[5rem] p-[.4rem] text-[1.2rem] text-[--text] hover:scale-[1.1] hover:text-[#dd644f] transition [transform: .3s color: .3s]'
				onClick={ctx.setMode}>
				<span className='mr-[.4rem]'>
					<img src={ctx.theme === 'light' ? moonIcon : sunIcon} alt='Moon icon' className='mr-1'/>
				</span>
				{ctx.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
			</button>
		</nav>
	)
}
