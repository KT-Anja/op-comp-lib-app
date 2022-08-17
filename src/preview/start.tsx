import { Header, Sidebar } from '../components'
import SidebarLink from '../components/organisms/sidebar/SidebarLink'
import SidebarMenu from '../components/organisms/sidebar/SidebarMenu'
import Patterns from './patterns'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DataGridPreview from './datagrid'

const Start = () => {
	return (
		<>
			<Header showLanguageSelector showSearch></Header>
			<Sidebar>
				<SidebarMenu label="Stern" iconKey="fa-bahai">
					<SidebarLink href="#stern1">Stern 1</SidebarLink>
					<SidebarLink href="#stern2">Stern 2</SidebarLink>
					<SidebarLink href="#stern3">Stern 3</SidebarLink>
				</SidebarMenu>
				<SidebarMenu label="Fisch" iconKey="fa-fish">
					<SidebarLink href="#fisch1">Fisch 1</SidebarLink>
					<SidebarLink href="#fisch2">Fisch 2</SidebarLink>
					<SidebarLink href="#fisch3">Fisch 3</SidebarLink>
				</SidebarMenu>
				<SidebarLink href="#cookie" iconKey="fa-cookie-bite">
					Cookies
				</SidebarLink>
				<SidebarLink href="#hund" iconKey="fa-dog">
					Hund
				</SidebarLink>
				<SidebarLink href="#kontakt" iconKey="fa-at">
					Kontakt
				</SidebarLink>
			</Sidebar>
			<div className="main">
				<div className="container">
					<section className="section mt-4 mb-4 ms-4 ms-lg-0">
						<Router>
							<Routes>
								<Route path="/" element={<Patterns />} />
								<Route path="/datagrid" element={<DataGridPreview />} />
							</Routes>
						</Router>
					</section>
				</div>
			</div>
		</>
	)
}

export default Start
