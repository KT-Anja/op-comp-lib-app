interface ModalHeaderProps {
	title: string
	closeButton?: boolean
}

const ModalHeader = ({ title, closeButton }: ModalHeaderProps) => (
	<div className="modal-header">
		<h2 className="modal-title">{title}</h2>
		{closeButton && (
			<button
				type="button"
				className="btn-close"
				data-bs-dismiss="modal"
				aria-label="Close"
			></button>
		)}
	</div>
)

export default ModalHeader
