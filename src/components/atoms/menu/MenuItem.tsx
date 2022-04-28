import { ReactNode } from 'react'

export interface MenuItemProps {
	children: ReactNode
	link?: string
}

const MenuItem = ({ children, link }: MenuItemProps) => {
	return (
		<li>
			<a href={link} className="dropdown-item">
				{children}
			</a>
		</li>
	)
}

export default MenuItem
