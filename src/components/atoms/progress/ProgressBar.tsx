import classNames from 'classnames'

export interface ProgressBarProps {
	now?: number
	min?: number
	max?: number
	striped?: boolean
	animated?: boolean
	noMarginBottom?: boolean
}

function getPercentage(now = 0, min = 0, max = 100) {
	const percentage = ((now - min) / (max - min)) * 100
	return Math.round(percentage * 1000) / 1000
}

const ProgressBar = ({
	now,
	min,
	max,
	striped = true,
	animated = false,
	noMarginBottom,
	...props
}: ProgressBarProps) => {
	return (
		<div
			className={classNames('progress', {
				'mb-3': !noMarginBottom
			})}
		>
			<div
				className={classNames('progress-bar bg-primary', {
					'progress-bar-striped': striped,
					'progress-bar-animated': animated
				})}
				role="progressbar"
				style={{ width: `${getPercentage(now, min, max)}%` }}
				aria-valuenow={now}
				aria-valuemin={min}
				aria-valuemax={max}
				{...props}
			></div>
		</div>
	)
}

export default ProgressBar
