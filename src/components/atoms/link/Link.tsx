import classNames from 'classnames'
import { AnchorHTMLAttributes, ReactText } from 'react'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children: ReactText
	iconName?: string
}

const Link = ({ children, iconName, ...rest }: LinkProps) => {
	return (
		<a
			className={classNames({
				'link-with-icon': iconName && iconName.length
			})}
			{...rest}
		>
			<i className={`fa-solid ${iconName}`} />
			{children}
		</a>
	)
}

export default Link
