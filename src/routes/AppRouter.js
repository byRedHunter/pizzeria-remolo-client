import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loader from '../components/Loader'

const HomePage = lazy(() => import('../pages/HomePage/index'))
const Menu = lazy(() => import('../pages/Menu/index'))
const NotFound = lazy(() => import('../pages/NotFound/index'))

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
