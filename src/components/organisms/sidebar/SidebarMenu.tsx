import { ReactNode, useRef } from 'react'
import Icon from '../../atoms/icon/Icon'
import { closeSidebarSubmenu, isOpen, openSidebarSubmenu } from './sidebar.helper'

interface MenuProps {
	children: ReactNode
	iconKey?: string
	label: string
}
const SidebarMenu = ({ children, iconKey, label }: MenuProps) => {
	const menu = useRef<HTMLDivElement>(null)
	const handleLabelClick = () => {
		if (menu.current) {
			if (isOpen(menu.current)) {
				closeSidebarSubmenu(menu.current)
			} else {
				openSidebarSubmenu(menu.current)
			}
		}
	}
	return (
		<div className="sb-menu" ref={menu}>
			<div className="tile" onClick={handleLabelClick}>
				<Icon keyName={iconKey ?? 'fa-circle-question'} size="fa-lg" />
				<span>{label}</span>
				<Icon keyName="fa-angle-right" />
			</div>

			<div className="sb-menu-content bg-gray-bg">
				<div className="tile" onClick={handleLabelClick}>
					<span>{label}</span>
				</div>
				{children}
			</div>
		</div>
	)
}

export default SidebarMenu
