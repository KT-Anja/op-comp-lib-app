import { Tooltip as TooltipBS } from 'bootstrap'
import { useEffect } from 'react'

const Tooltips = () => {
	useEffect(() => {
		const tooltipTriggerList = [].slice.call(
			document.querySelectorAll('[data-bs-toggle="tooltip"]')
		)
		const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new TooltipBS(tooltipTriggerEl)
		})
	})
	return (
		<div className="example">
			<button
				type="button"
				className="btn btn-default"
				data-bs-toggle="tooltip"
				data-bs-placement="top"
				title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum."
			>
				Tooltip on top
			</button>
			<button
				type="button"
				className="btn btn-default"
				data-bs-toggle="tooltip"
				data-bs-placement="right"
				title="Tooltip on right"
			>
				Tooltip on right
			</button>
			<button
				type="button"
				className="btn btn-default"
				data-bs-toggle="tooltip"
				data-bs-placement="bottom"
				title="Tooltip on bottom"
			>
				Tooltip on bottom
			</button>
			<button
				type="button"
				className="btn btn-default"
				data-bs-toggle="tooltip"
				data-bs-placement="left"
				title="Tooltip on left"
			>
				Tooltip on left
			</button>
		</div>
	)
}
export default Tooltips
