import React, {useCallback, useEffect} from 'react'
import { AppRouter } from './providers/router'
import { Navbar } from '../widgets/Navbar'
import { Footer } from '../widgets/Footer'
import {useAppDispatch} from "../shared/hooks/useAppDispatch/useAppDispatch";
import {fetchInitAuthData} from "../entitise/User/model/Services/fetchInitAuthData";
import {useSelector} from "react-redux";
import {getCategories} from "../features/Categories";
import {fetchCategories} from "../features/Categories/model/services/fetchCategories";

const App = () => {
	const dispatch = useAppDispatch()
	const categories = useSelector(getCategories)

	useEffect(() => {
		dispatch(fetchInitAuthData({}))
	}, [dispatch])


	const initCategories = useCallback( async () => {
		await dispatch(fetchCategories())
	},[dispatch])

	useEffect(() =>{
		if(!categories){
			initCategories()
		}
	}, [])

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
