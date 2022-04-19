import { BreadcrumbItemProps } from '../components/atoms/breadcrumb/BreadcrumbItem'
import Breadcrumb from '../components/molecules/Breadcrumb'

const Breadcrumbs = () => {
	const breadcrumbItems: Array<BreadcrumbItemProps> = [
		{
			url: '#',
			title: 'Link'
		},
		{
			url: '#',
			title: 'Link 2'
		},
		{
			url: '#',
			title: 'Link 3 Active'
		}
	]
	return (
		<>
			<h2>Breadcrumb</h2>
			<Breadcrumb items={breadcrumbItems}></Breadcrumb>
		</>
	)
}

export default Breadcrumbs
