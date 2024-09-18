import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DarkModeContextProvider from './store/DarkModeContext.jsx'
import InputFieldContextProvider from './store/InputFieldContext.jsx'
import RootLayout from './pages/Root.jsx'
import CountryPage from './pages/CountryPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const HomePage = lazy(() => import('./pages/Home.jsx'))

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<p className='w-screen text-center text-[1.6rem] text-[--text]'>Loading...</p>}>
						<HomePage />
					</Suspense>
				),
				loader: () => import('./pages/Home.jsx').then(module => module.default()),
			},
			{
				path: '/:countryName',
				element: <CountryPage />,
			},
		],
	},
])

function App() {
	return (
		<DarkModeContextProvider>
			<InputFieldContextProvider>
				<RouterProvider router={router}></RouterProvider>
			</InputFieldContextProvider>
		</DarkModeContextProvider>
	)
}

export default App
