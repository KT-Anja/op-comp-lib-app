const Progress = () => {
	return (
		<>
			<div className="progress mb-3">
				<div
					className="progress-bar progress-bar-striped bg-primary"
					role="progressbar"
					style={{ width: '25%' }}
					aria-valuenow="25"
					aria-valuemin="0"
					aria-valuemax="100"
				></div>
			</div>
			<div className="progress mb-3">
				<div
					className="progress-bar progress-bar-striped bg-primary"
					role="progressbar"
					style={{ width: '50%' }}
					aria-valuenow="50"
					aria-valuemin="0"
					aria-valuemax="100"
				></div>
			</div>
			<div className="progress mb-3">
				<div
					className="progress-bar progress-bar-striped bg-primary"
					role="progressbar"
					style={{ width: '75%' }}
					aria-valuenow="75"
					aria-valuemin="0"
					aria-valuemax="100"
				></div>
			</div>
			<div className="progress mb-3">
				<div
					className="progress-bar progress-bar-striped bg-primary"
					role="progressbar"
					style={{ width: '100%' }}
					aria-valuenow="100"
					aria-valuemin="0"
					aria-valuemax="100"
				></div>
			</div>
		</>
	)
}
export default Progress
