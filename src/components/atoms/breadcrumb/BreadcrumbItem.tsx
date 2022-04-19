import classNames from 'classnames'
import { ReactNode } from 'react'

export interface BreadcrumbItemProps {
	title: ReactNode
	url?: string
	active?: boolean
	onClick?: (event: React.MouseEvent) => void
}

const BreadcrumbItem = ({ url, title, active }: BreadcrumbItemProps) => {
	return (
		<li
			aria-current="page"
			className={classNames(`breadcrumb-item`, {
				active: active
			})}
		>
			{!active ? <a href={url}>{title}</a> : <span>{title}</span>}
		</li>
	)
}

export default BreadcrumbItem
