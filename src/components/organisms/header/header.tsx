import { useState } from 'react'
import sampleNavItems from '../../../data/navigation_items'
import HeaderCTA from '../../molecules/headerCTA/HeaderCTA'
import LanguageSelector from '../../molecules/LanguageSelector'
import SearchInput from '../../molecules/SearchInput'
import Navigation from '../navigation/Navigation'

interface HeaderProps {
	logo?: string
	logoAlt?: string
	logoWidth?: number
	showLanguageSelector?: boolean
	showSearch?: boolean
}

// TODO: dynamic order classes depending on showSearch
const Header = ({
	logo,
	logoAlt,
	logoWidth = 169,
	showLanguageSelector,
	showSearch
}: HeaderProps) => {
	const [openTabletNav, setOpenTabletNav] = useState(false)

	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-dark bg-black position-fixed top-0 start-0 end-0">
				<div className="container-fluid">
					<button
						className="navbar-toggler order-1"
						type="button"
						aria-label="toggle tablet navigation"
						onClick={() => setOpenTabletNav((s) => !s)}
						onTouchStart={() => setOpenTabletNav((s) => !s)}
					>
						<i className={`fa-solid fa-lg ${openTabletNav ? 'fa-xmark' : 'fa-bars'}`}></i>
					</button>
					<a className="navbar-brand flex-grow-1 flex-lg-grow-0 order-2" href="#">
						{logo ? (
							<img src={logo} alt={logoAlt} width={logoWidth} />
						) : (
							<img src="op_logo.png" alt="Onlineprinters" width={logoWidth} />
						)}
					</a>
					<Navigation
						items={sampleNavItems}
						isOpenTabletNav={openTabletNav}
						closeTabletNav={() => setOpenTabletNav(false)}
					/>
					{showSearch && (
						<div className="order-3 order-lg-4">
							<SearchInput
								onSubmit={(event) => {
									console.log(event)
								}}
							/>
						</div>
					)}
					<div className="cta-wrapper d-flex flex-row order-4 order-lg-5">
						{showLanguageSelector && <LanguageSelector />}
						<HeaderCTA label="Abmelden" iconKeyName="fa-arrow-right-from-bracket"></HeaderCTA>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
