import React from 'react'
import { AppRouter } from './providers/router'
import { Navbar } from '../widgets/Navbar'
import { Footer } from '../widgets/Footer'

const App = () => {
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
