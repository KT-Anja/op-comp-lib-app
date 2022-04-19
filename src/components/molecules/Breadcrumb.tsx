import BreadcrumbItem, { BreadcrumbItemProps } from '../atoms/breadcrumb/BreadcrumbItem'

interface BreadcrumbProps {
	items: Array<BreadcrumbItemProps>
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
	return (
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb">
				{items.slice(0, items.length - 1).map((item, index) => (
					<BreadcrumbItem {...item} key={index}></BreadcrumbItem>
				))}
				<BreadcrumbItem active {...items[items.length - 1]}></BreadcrumbItem>
			</ol>
		</nav>
	)
}

export default Breadcrumb
