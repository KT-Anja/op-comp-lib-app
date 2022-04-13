import classNames from 'classnames'
import { ButtonHTMLAttributes, ReactText } from 'react'
import Icon from '../icon/Icon'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
	variant: 'primary' | 'secondary' | 'default'
	children?: ReactText
	status?: 'success' | 'info' | 'warning' | 'danger'
	iconOnly?: boolean
	iconKeyName?: string
}

const Button = ({ children, variant, iconKeyName, iconOnly, status, ...rest }: ButtonProps) => {
	return (
		<button
			className={classNames(`btn btn-${variant}`, {
				'btn-icon-only': iconKeyName !== undefined && iconOnly,
				'btn-with-icon': iconKeyName !== undefined && !iconOnly
			})}
			{...rest}
		>
			{iconKeyName && <Icon keyName={iconKeyName} status={status} />}
			{children}
		</button>
	)
}

export default Button
