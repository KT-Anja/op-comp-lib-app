import classNames from 'classnames'
import Icon from '../icon/Icon'

interface ButtonProps {
	variant: 'primary' | 'secondary' | 'default'
	children?: React.ReactNode
	type?: 'button' | 'submit' | 'reset'
	disabled?: boolean
	status?: 'success' | 'info' | 'warning' | 'danger'
	iconOnly?: boolean
	iconKeyName?: string
}

const Button = ({ children, variant, iconKeyName, iconOnly, status, ...props }: ButtonProps) => {
	return (
		<button
			className={classNames(`btn btn-${variant}`, {
				'btn-icon-only': iconKeyName !== undefined && iconOnly,
				'btn-with-icon': iconKeyName !== undefined && !iconOnly
			})}
			{...props}
		>
			{iconKeyName && <Icon keyName={iconKeyName} status={status} />}
			{children}
			{}
		</button>
	)
}

export default Button
