import classNames from 'classnames'
import { Children, HTMLAttributes, ReactNode } from 'react'

interface CardRowProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode
	cols: number
	colsLg: number
	alignItems?: 'start' | 'end'
	marginBottom?: boolean
	className?: string
}

const CardRow = ({
	cols = 2,
	colsLg = 4,
	alignItems = 'start',
	marginBottom,
	className,
	children,
	...rest
}: CardRowProps) => {
	const arrayChildren = Children.toArray(children)
	return (
		<div
			className={classNames(
				'row cards',
				{
					[`row-cols-${cols}`]: cols,
					[`row-cols-lg-${colsLg}`]: colsLg,
					[`align-${alignItems}`]: alignItems,
					'mb-4': marginBottom
				},
				className
			)}
			{...rest}
		>
			{Children.map(arrayChildren, (child) => {
				return <div className="col">{child}</div>
			})}
		</div>
	)
}

export default CardRow
