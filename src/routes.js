import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Questions from './pages/questions'

export default () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Questions} />
			</Switch>
		</BrowserRouter>
	)
}