import React, { useEffect} from 'react'
import { AppRouter } from './providers/router'
import { Navbar } from '../widgets/Navbar'
import { Footer } from '../widgets/Footer'
import {useAppDispatch} from "../shared/hooks/useAppDispatch/useAppDispatch";
import {fetchInitAuthData} from "../entitise/User/model/Services/fetchInitAuthData";

const App = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchInitAuthData({}))
	}, [dispatch])

	return (
		<div>
			<Navbar />
			<div className='content-page'>
				<AppRouter />
			</div>
			<Footer />
		</div>
	)
}

export default App
