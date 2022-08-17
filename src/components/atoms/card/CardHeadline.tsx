import { HTMLAttributes, ReactText } from 'react'

interface CardHealdineProps extends HTMLAttributes<HTMLElement> {
	children: ReactText
}

const CardHeadline = ({ children }: CardHealdineProps) => {
	return <h3 className="card-title">{children}</h3>
}

export default CardHeadline
