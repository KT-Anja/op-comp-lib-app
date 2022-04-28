import classNames from 'classnames'
import { ButtonHTMLAttributes, ReactText } from 'react'
import Icon from '../icon/Icon'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
	variant: 'primary' | 'secondary' | 'default'
	children?: ReactText
	status?: 'success' | 'info' | 'warning' | 'danger'
	iconOnly?: boolean
	iconKeyName?: string
	borderless?: boolean
	badgeValue?: number
}

const Button = ({
	children,
	variant,
	iconKeyName,
	iconOnly,
	status,
	borderless,
	badgeValue,
	...rest
}: ButtonProps) => {
	return (
		<button
			className={classNames(`btn btn-${variant}`, {
				'btn-icon-only': iconKeyName !== undefined && iconOnly,
				'btn-with-icon': iconKeyName !== undefined && !iconOnly,
				'btn-icon-borderless': borderless && iconKeyName !== undefined && iconOnly
			})}
			{...rest}
		>
			{iconKeyName && <Icon keyName={iconKeyName} status={status} />}
			{children}
			{badgeValue && (
				<>
					<span className="badge bg-primary text-black ms-2">{badgeValue}</span>
				</>
			)}
		</button>
	)
}

export default Button
