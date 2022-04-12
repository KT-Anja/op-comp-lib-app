import classNames from 'classnames'

interface AlertProps {
	status: 'info' | 'success' | 'warning' | 'danger'
	message: string
	showIcon?: boolean
}

const Alert = ({ status, message, showIcon }: AlertProps) => {
	return (
		<div className={`alert alert-${status}`} role={status}>
			{showIcon && (
				<i
					className={classNames({
						'fa-solid': true,
						'fa-circle-info': status === 'info',
						'fa-circle-check': status === 'success',
						'fa-triangle-exclamation': status === 'warning',
						'fa-ban': status === 'danger'
					})}
				/>
			)}
			{message}
		</div>
	)
}

export default Alert
