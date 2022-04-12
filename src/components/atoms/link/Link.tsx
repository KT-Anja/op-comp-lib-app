import classNames from 'classnames'

interface LinkProps {
	children: React.ReactNode
	href: string
	iconName?: string
}

const Link = ({ href, iconName, ...props }: LinkProps) => {
	return (
		<a
			href={href}
			className={classNames({
				'link-with-icon': iconName && iconName.length
			})}
		>
			<i className={`fa-solid ${iconName}`} />
			{props.children}
		</a>
	)
}

export default Link
