import { Alert as AlertBS } from 'bootstrap'
import classNames from 'classnames'
import { useEffect, useRef } from 'react'
interface AlertProps {
	status: 'info' | 'success' | 'warning' | 'danger'
	message: string
	icon?: boolean
	duration?: number
	autoClose?: boolean
	positionFixed?: boolean
}

const Alert = ({
	status,
	message,
	icon,
	duration = 5000,
	autoClose = false,
	positionFixed = false
}: AlertProps) => {
	const alertRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (autoClose) {
			const alertEle = alertRef.current
			if (alertEle) {
				const bsAlert = new AlertBS(alertEle)
				// To animate alerts when dismissing them, be sure to add the .fade and .show classes.
				alertEle.classList.add('show')
				alertEle.classList.add('fade')

				// hide alert after x seconds
				setTimeout(() => {
					bsAlert.close()
				}, duration)
			}
		}
	})

	const content = (
		<div className={`alert alert-${status}`} role="alert" ref={alertRef}>
			{icon && (
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

	return (
		<>
			{positionFixed ? (
				<div className="container position-fixed top-5rem start-50 translate-middle-x alert-container">
					<div className="row">
						<div className="col-12 col-lg-8 offset-lg-2">{content}</div>
					</div>
				</div>
			) : (
				content
			)}
		</>
	)
}

export default Alert
