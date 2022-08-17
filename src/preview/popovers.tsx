import { useRef } from 'react'
import { Button } from '../components'
import Popover from '../components/atoms/popover/Popover'

const Popovers = () => {
	const refButton = useRef(null)
	const refHTML = useRef(null)
	const refIcon = useRef(null)
	const refTextLink = useRef(null)
	return (
		<div className="example">
			<Popover content="Einfacher Text" targetRef={refButton}>
				<Button variant="primary" ref={refButton}>
					Einfacher Text
				</Button>
			</Popover>
			<Popover
				content="<ul>
						<li>List 1</li>
						<li>List 2</li>
						<li>List 3</li>
					</ul>"
				targetRef={refHTML}
			>
				<Button variant="primary" ref={refHTML}>
					HTML
				</Button>
			</Popover>
			<Popover content="<i class='fa-solid fa-globe'></i>" targetRef={refIcon}>
				<Button variant="primary" ref={refIcon}>
					Ein Icon
				</Button>
			</Popover>
			<Popover
				content="<p>Ein Text mit einem Link: <a href='#'>Ein Link</a></p>"
				targetRef={refTextLink}
			>
				<Button variant="primary" ref={refTextLink}>
					Text + Link
				</Button>
			</Popover>
		</div>
	)
}

export default Popovers
