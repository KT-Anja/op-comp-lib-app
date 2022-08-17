import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode
	bgWhite?: boolean
}

const Card = ({ children, bgWhite, ...rest }: CardProps) => {
	return (
		<div
			className={classNames('card mb-4', {
				'bg-white': bgWhite
			})}
			{...rest}
		>
			{children}
		</div>
	)
}

export default Card
