import classNames from 'classnames'
import React, { ReactNode } from 'react'

export interface MenuProps {
	id: string
	children?: ReactNode
	alignEnd?: boolean
}

const Menu = ({ id, children, alignEnd }: MenuProps) => {
	return (
		<ul
			id={id}
			className={classNames('dropdown-menu', {
				'dropdown-menu-end': alignEnd
			})}
			aria-labelledby={id}
		>
			{children}
		</ul>
	)
}

export default Menu
