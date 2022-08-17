import React from 'react'
import { createRoot } from 'react-dom/client'
import Start from './preview/start'

const rootElement = document.getElementById('root')

if (!rootElement) throw new Error('Das Root Element wurde nicht gefunden!')

const root = createRoot(rootElement)

root.render(
	<React.StrictMode>
		<Start />
	</React.StrictMode>
)
