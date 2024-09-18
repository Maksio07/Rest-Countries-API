import { createContext, useState } from 'react'
import useLocalStorage from 'use-local-storage'

export const DarkModeContext = createContext({
	theme: '',
	setMode: () => {},
})

export default function DarkModeContextProvider({ children }) {
	const defaultLight = window.matchMedia('(prefers-color-scheme: light)').matches;
	const [theme, setTheme] = useLocalStorage('theme', defaultLight ? 'light' : 'dark')

	function setMode() {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme)
	}

	const value = {
		theme,
		setMode,
	}

	return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>
}
