import { HTMLAttributes, ReactNode } from 'react'

interface CardBodyProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode
}

const CardBody = ({ children }: CardBodyProps) => {
	return <div className="card-body">{children}</div>
}

export default CardBody
