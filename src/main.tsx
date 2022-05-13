import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Start from './preview/start'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Start />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)
