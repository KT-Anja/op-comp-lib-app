import { Link } from '../components'

const Links = () => {
	return (
		<>
			<Link href="#">Ich bin ein Link</Link>
			<br />
			<br />
			<Link href="#" iconName="fa-circle-check">
				Ich bin ein Link mit Icon
			</Link>
		</>
	)
}

export default Links
