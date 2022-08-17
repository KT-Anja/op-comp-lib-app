import { Button } from '../components'
import Card from '../components/atoms/card/Card'
import CardBody from '../components/atoms/card/CardBody'
import CardHeadline from '../components/atoms/card/CardHeadline'
import CardImg from '../components/atoms/card/CardImg'
import CardRow from '../components/atoms/card/CardsRow'
import CardText from '../components/atoms/card/CardText'

const Cards = () => {
	return (
		<>
			<CardRow cols={2} colsLg={4}>
				<Card>
					<CardImg src="naturfotografie.jpg" alt="Naturfotografie" />
					<CardBody>
						<CardHeadline>Card title</CardHeadline>
						<CardText>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</CardText>
						<Button variant="default">Go somewhere</Button>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<CardHeadline>Card title</CardHeadline>
						<CardText>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</CardText>
						<Button variant="default">Go somewhere</Button>
					</CardBody>
				</Card>
				<Card bgWhite>
					<CardImg src="naturfotografie-naturfotograf-tipps-2.jpg" alt="Naturfotografie" />
					<CardBody>
						<CardHeadline>Card title</CardHeadline>
						<CardText>
							Some quick example text to build on the card title and make up the bulk of the card's
							content. Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</CardText>
						<Button variant="default">Go somewhere</Button>
					</CardBody>
				</Card>
				<Card bgWhite>
					{/* <CardImg src="naturfotografie-naturfotograf-tipps-2.jpg" alt="Naturfotografie" /> */}
					<CardBody>
						<CardHeadline>Very very very very very very very long card title</CardHeadline>
						<CardText>
							Some quick example text to build on the card title and make up the bulk of the card's
							content. Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</CardText>
						<Button variant="default">Go somewhere</Button>
					</CardBody>
				</Card>
			</CardRow>

			<CardRow cols={2} colsLg={3} alignItems="end">
				<Card>
					<CardImg src="naturfotografie.jpg" alt="Naturfotografie" />
					<CardBody>
						<CardHeadline>Card title</CardHeadline>
						<CardText>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</CardText>
						<Button variant="default">Go somewhere</Button>
					</CardBody>
				</Card>
				<Card>
					<CardImg src="naturfotografie-naturfotograf-tipps-2.jpg" alt="Naturfotografie" />
					<CardBody>
						<CardHeadline>Very very very very very very very long card title</CardHeadline>
						<CardText>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</CardText>
						<Button variant="default">Go somewhere</Button>
					</CardBody>
				</Card>
				<Card bgWhite>
					<CardBody>
						<CardHeadline>Very very very very very very very long card title</CardHeadline>
						<CardText>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</CardText>
						<Button variant="default">Go somewhere</Button>
					</CardBody>
				</Card>
			</CardRow>

			<CardRow cols={1} colsLg={2} marginBottom>
				<Card>
					<CardImg src="landschaftsfotografie-1.jpg" alt="Naturfotografie" />
					<CardBody>
						<CardHeadline>Very very very very very very very long card title</CardHeadline>
						<CardText>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</CardText>
						<Button variant="default">Go somewhere</Button>
					</CardBody>
				</Card>
				<Card>
					<CardImg src="Naturfotografie-in-der-Saechsischen-Schweiz.jpg" alt="Naturfotografie" />
					<CardBody>
						<CardHeadline>Very very very very very very very long card title</CardHeadline>
						<CardText>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</CardText>
						<Button variant="default">Go somewhere</Button>
					</CardBody>
				</Card>
			</CardRow>
		</>
	)
}

export default Cards
