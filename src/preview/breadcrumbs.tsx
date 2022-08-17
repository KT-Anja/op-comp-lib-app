import Breadcrumb from '../components/atoms/breadcrumb/Breadcrumb'
import BreadcrumbItem from '../components/atoms/breadcrumb/BreadcrumbItem'

const Breadcrumbs = () => {
	return (
		<Breadcrumb>
			<BreadcrumbItem title="Link" url="#"></BreadcrumbItem>
			<BreadcrumbItem title="Link 2" url="#"></BreadcrumbItem>
			<BreadcrumbItem title="Link 3" url="#"></BreadcrumbItem>
			<BreadcrumbItem title="Link active" url="#" active></BreadcrumbItem>
		</Breadcrumb>
	)
}

export default Breadcrumbs
