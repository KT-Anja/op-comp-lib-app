import Alerts from './alerts'
import Breadcrumbs from './breadcrumbs'
import Buttons from './buttons'
import Cards from './cards'
import Forms from './forms'
import Icons from './icons'
import Links from './links'
import Modals from './modals'
import Popovers from './popovers'
import Progress from './progress'
import Tooltips from './tooltips'

const Patterns = () => {
	return (
		<div className="row">
			<div className="col-lg-12">
				<h1>OnlinePrinters Patterns</h1>
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
				<h2 className="mt-5 mb-4 text-primary">Progress bar</h2>
				<Progress />
				<h2 className="mt-5 mb-4 text-primary">Tooltips</h2>
				<Tooltips />
				<h2 className="mt-5 mb-4 text-primary">Popovers</h2>
				<Popovers />
				<h2 className="mt-5 mb-4 text-primary">Cards</h2>
				<Cards />
			</div>
		</div>
	)
}

export default Patterns
