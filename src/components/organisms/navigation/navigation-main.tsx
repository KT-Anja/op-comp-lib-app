// DRAFT ---------------

interface NavigationMenuProps {
	label: string
	link: string
}

interface NavigationItemProps {
	label: string
	link: string
	menuItems?: Array<NavigationMenuProps>
}

interface NavigationMainProps {
	items: Array<NavigationItemProps>
}
const NavigationMain = ({ items }: NavigationMainProps) => {
	return (
		<ul className="navbar-nav">
			{items.map((item, index) =>
				item.menuItems ? (
					<li className="nav-item dropdown" key={index}>
						<a
							id="todo"
							className="nav-link dropdown-toggle"
							role="button"
							href="#"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<span>{item.label}</span>
						</a>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
							{item.menuItems.map((item, index) => (
								<li key={index}>
									<a className="dropdown-item" href={item.link}>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</li>
				) : (
					<li className="nav-item" key={index}>
						{/* TODO: active class */}
						<a className="nav-link" aria-current="page" href={item.link}>
							<span>{item.label}</span>
						</a>
					</li>
				)
			)}
		</ul>
	)
}

export default NavigationMain
