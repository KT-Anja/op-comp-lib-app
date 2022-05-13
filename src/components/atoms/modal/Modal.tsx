import { Modal as ModalBS } from 'bootstrap'
import { useEffect } from 'react'
interface ModalProps {
	id: string
	children: React.ReactNode
	open: boolean
	onClose: () => void
	closeOnBackdrop?: boolean
}

const Modal = ({ id, children, open, onClose, closeOnBackdrop, ...rest }: ModalProps) => {
	useEffect(() => {
		const backdropConfig = closeOnBackdrop ? true : 'static'
		const modalEl = document.getElementById(id) as Element
		const modal = new ModalBS(modalEl, { backdrop: backdropConfig })
		if (open) {
			modal.show()
		}
		modalEl.addEventListener('hidden.bs.modal', () => {
			onClose()
		})
	})
	return (
		<div id={id} className="modal" tabIndex={-1} {...rest}>
			<div className="modal-dialog modal-xl modal-dialog-centered">
				<div className="modal-content">{children}</div>
			</div>
		</div>
	)
}

export default Modal
