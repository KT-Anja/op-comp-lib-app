import classNames from 'classnames'
import React from 'react'

interface IconProps {
	keyName: string
	fixedWidth?: boolean
	size?: 'fa-2xs' | 'fa-xs' | 'fa-sm' | 'fa-lg' | 'fa-xl' | 'fa-2xl'
	status?: 'success' | 'info' | 'warning' | 'danger'
}

const Icon = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
	const { keyName, status, size = '', fixedWidth = false } = props
	return (
		<i
			ref={ref}
			className={classNames(`fa-solid ${keyName} ${size} ${fixedWidth ? 'fa-fw' : ''}`, {
				[`text-${status}`]: status !== undefined
			})}
		/>
	)
})

Icon.displayName = 'Icon'

export default Icon
