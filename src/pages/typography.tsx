import { Headline } from '../components'

const Typography = () => {
	return (
		<>
			<Headline level="h1">H1 Headline</Headline>
			<Headline level="h2">H2 Headline</Headline>
			<Headline level="h3">H3 Headline</Headline>
			<Headline level="h4">H4 Headline</Headline>
			<Headline level="h1" paragraph>
				p Headline
			</Headline>
			<Headline level="h2" paragraph>
				p Headline
			</Headline>
		</>
	)
}

export default Typography
