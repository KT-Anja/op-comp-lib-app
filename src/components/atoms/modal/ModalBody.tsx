interface ModalBodyProps {
	children: React.ReactNode
	// type layout
}
const ModalBody = ({ children }: ModalBodyProps) => <div className="modal-body">{children}</div>

export default ModalBody
