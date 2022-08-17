import classNames from 'classnames'
import React, { ButtonHTMLAttributes, ReactText } from 'react'
import Icon from '../icon/Icon'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
	variant?: 'primary' | 'secondary' | 'default'
	children?: ReactText
	status?: 'success' | 'info' | 'warning' | 'danger'
	iconOnly?: boolean
	iconKeyName?: string
	borderless?: boolean
	badgeValue?: number
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const {
		children,
		variant = 'default',
		iconKeyName,
		iconOnly,
		status,
		borderless,
		badgeValue,
		...rest
	} = props
	return (
		<button
			ref={ref}
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
})

Button.displayName = 'Button'

export default Button
