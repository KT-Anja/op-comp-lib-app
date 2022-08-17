import { ReactNode } from 'react'
import Icon from '../../atoms/icon/Icon'
import { toggleSidebar } from './sidebar.helper'

interface SidebarProps {
	children: ReactNode
}

const Sidebar = ({ children }: SidebarProps) => {
	return (
		<div id="sidebar" className="bg-gray-bg position-fixed top-0 left-0">
			{/* open/close button */}
			<div className="toggle" role="button" onClick={toggleSidebar}>
				{/* arrow icon here */}
				<Icon keyName="fa-arrow-right-to-bracket" size="fa-lg" fixedWidth />
				<span className="ms-3">schließen</span>
			</div>
			{/* trenner hier */}
			<div className="trenner bg-light" style={{ height: 1, width: '100%' }}></div>
			{/* nav list with icons */}
			<div className="sb-content">{children}</div>
		</div>
	)
}

export default Sidebar
