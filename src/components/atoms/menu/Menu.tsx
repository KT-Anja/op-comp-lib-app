import React, { ReactNode } from 'react'

export interface MenuProps {
	id: string
	children?: Array<ReactNode>
}

const Menu = ({ id, children }: MenuProps) => {
	return (
		<ul id={id} className="dropdown-menu dropdown-menu-end" aria-labelledby={id}>
			{children}
		</ul>
	)
}

export default Menu
