import { ReactNode } from 'react'

interface BreadcrumbProps {
	children: Array<ReactNode> | ReactNode
}

const Breadcrumb = ({ children }: BreadcrumbProps) => {
	return (
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb">{children}</ol>
		</nav>
	)
}

export default Breadcrumb
