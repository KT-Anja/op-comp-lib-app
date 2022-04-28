import { Header } from '../components'
import Alerts from './alerts'
import Breadcrumbs from './breadcrumbs'
import Buttons from './buttons'
import Forms from './forms'
import Icons from './icons'
import Links from './links'
import Modals from './modals'

const Start = () => {
	return (
		<>
			<Header showLanguageSelector showSearch></Header>
			<div className="main">
				<div className="container">
					<section className="section mt-4">
						<div className="row">
							<div className="col-lg-12">
								<h1 className="mb-5">Patterns</h1>
								<h2 className="mt-5 mb-4 text-primary">Buttons</h2>
								<Buttons />
								<h2 className="mt-5 mb-4 text-primary">Alerts</h2>
								<Alerts />
								<h2 className="mt-5 mb-4 text-primary">Forms</h2>
								<Forms />
								<h2 className="mt-5 mb-4 text-primary">Links</h2>
								<Links />
								<h2 className="mt-5 mb-4 text-primary">Icons</h2>
								<Icons />
								<h2 className="mt-5 mb-4 text-primary">Breadcrumbs</h2>
								<Breadcrumbs />
								<h2 className="mt-5 mb-4 text-primary">Modal</h2>
								<Modals />
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}

export default Start
