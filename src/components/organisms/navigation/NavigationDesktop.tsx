import Menu from '../../atoms/menu/Menu'
import MenuItem from '../../atoms/menu/MenuItem'
import { NavigationItem } from './types'

interface NavigationItemCompProps {
	item: NavigationItem
}

const NavigationItemComp = ({ item }: NavigationItemCompProps) => {
	return (
		<>
			{item.submenu ? (
				<li className="nav-item dropdown">
					{/* Use div, as MenuItem with submenu is not a link */}
					<div
						id={item.title}
						className="nav-link dropdown-toggle"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<span>{item.title}</span>
					</div>
					<Menu id={`${item.title}-menu`}>
						{item.submenu.map((menuItem, index) => (
							<MenuItem key={index} link={menuItem.url}>
								{menuItem.title}
							</MenuItem>
						))}
					</Menu>
				</li>
			) : (
				<li className="nav-item">
					<a className="nav-link" aria-current="page" href={item.url}>
						<span>{item.title}</span>
					</a>
				</li>
			)}
		</>
	)
}

interface NavigationDesktopProps {
	items: NavigationItem[]
}

function NavigationDesktop({ items }: NavigationDesktopProps) {
	return (
		<div id="mainNavigation" className="collapse navbar-collapse order-5 order-lg-3">
			<ul className="navbar-nav">
				{items.map((item, index) => {
					return <NavigationItemComp key={index} item={item} />
				})}
			</ul>
		</div>
	)
}

export default NavigationDesktop
