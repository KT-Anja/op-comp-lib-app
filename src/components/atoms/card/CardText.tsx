import { HTMLAttributes, ReactText } from 'react'

interface CardTextProps extends HTMLAttributes<HTMLElement> {
	children: ReactText
}

const CardText = ({ children }: CardTextProps) => {
	return <p className="card-text">{children}</p>
}

export default CardText
