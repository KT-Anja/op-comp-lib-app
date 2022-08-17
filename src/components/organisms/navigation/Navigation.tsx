import { NavigationItem } from './types'
import NavigationTablet from './NavigationTablet'
import './navigation.scss'
import NavigationDesktop from './NavigationDesktop'

interface NavigationProps {
	items: NavigationItem[]
	isOpenTabletNav: boolean
	closeTabletNav?: () => void
}

const Navigation = ({ items, isOpenTabletNav, closeTabletNav }: NavigationProps) => {
	const tablet = window.innerWidth < 992

	return tablet ? (
		<NavigationTablet items={items} isOpen={isOpenTabletNav} closeNavigation={closeTabletNav} />
	) : (
		<NavigationDesktop items={items} />
	)
}

export default Navigation
