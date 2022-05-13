import classNames from 'classnames'
import { ReactNode, useEffect, useState } from 'react'

interface AlertContainerProps {
	children: Array<ReactNode> | ReactNode
	cols?: number
	center?: boolean
	showAsOverlay?: boolean
	overlayPosition?: 'top' | 'bottom'
	duration?: number
	autoClose?: boolean
}

const AlertContainer = ({
	children,
	cols = 8,
	center = false,
	showAsOverlay = false,
	overlayPosition,
	duration = 5000,
	autoClose = true
}: AlertContainerProps) => {
	const [isShow, setIsShow] = useState(true)

	useEffect(() => {
		if (autoClose) {
			setTimeout(() => {
				setIsShow(false)
			}, duration)
		}
	})

	const offsetCols = (12 - cols) / 2
	return (
		<>
			{isShow && (
				<div
					className={classNames('alert-container', {
						'container position-fixed start-50 translate-middle-x': showAsOverlay,
						'top-5rem': !overlayPosition,
						'align-top': overlayPosition === 'top',
						'align-bottom': overlayPosition === 'bottom'
					})}
				>
					<div className="row">
						<div
							className={classNames('col-12', {
								[`col-lg-${cols}`]: cols,
								[`offset-lg-${offsetCols}`]: center
							})}
						>
							{children}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default AlertContainer
