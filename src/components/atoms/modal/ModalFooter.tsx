interface ModalFooterProps {
	children: React.ReactNode
}

const ModalFooter = ({ children }: ModalFooterProps) => (
	<div className="modal-footer">{children}</div>
)

export default ModalFooter
