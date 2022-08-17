import Icon from '../../atoms/icon/Icon'

interface LinkProps {
	children: string
	href: string
	iconKey?: string
}
const SidebarLink = ({ children, href, iconKey }: LinkProps) => {
	return (
		<a href={href} className="sb-link">
			<div className="tile">
				<Icon keyName={iconKey ?? 'fa-circle-question'} size="fa-lg" />
				<span>{children}</span>
			</div>
		</a>
	)
}

export default SidebarLink
