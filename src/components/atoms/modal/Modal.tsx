import { useRef } from 'react'
import FormBox from '../../molecules/FormBox'
import Button from '../button/Button'
import InputField from '../forms/inputFields/InputField'

interface ModalProps {
	id: string
}
const ExampleForm = () => {
	return (
		<FormBox headline="Kundendaten" inModal>
			<form noValidate>
				<div className="row g-1">
					<div className="col-6">
						<InputField type="text" id="firma" label="Firma"></InputField>
					</div>
					<div className="col-6">
						<InputField type="text" id="anrede" label="Anrede"></InputField>
					</div>
				</div>
				<div className="row g-1">
					<div className="col-6">
						<InputField type="text" id="vorname" label="Vorname"></InputField>
					</div>
					<div className="col-6">
						<InputField type="text" id="nachname" label="Nachname"></InputField>
					</div>
				</div>
				<div className="row g-1">
					<div className="col-6">
						<InputField type="text" id="zusatz1" label="Zusatz 1"></InputField>
					</div>
					<div className="col-6">
						<InputField type="text" id="zusatz2" label="Zusatz 2"></InputField>
					</div>
				</div>
				<div className="row g-1">
					<div className="col-12">
						<InputField type="text" id="straße" label="Straße und Hausnummer"></InputField>
					</div>
				</div>
				<div className="row g-1">
					<div className="col-6">
						<InputField type="text" id="plz" label="PLZ"></InputField>
					</div>
					<div className="col-6">
						<InputField type="text" id="ort" label="Ort"></InputField>
					</div>
				</div>
				<div className="row g-1">
					<div className="col-6">
						<InputField type="text" id="telefon" label="Telefon" noMarginBottom></InputField>
					</div>
					<div className="col-6">
						<InputField type="text" id="email" label="E-Mail" noMarginBottom></InputField>
					</div>
				</div>
			</form>
		</FormBox>
	)
}

const Modal = ({ id }: ModalProps) => {
	const modalRef = useRef<HTMLDivElement>(null)
	// useEffect(() => {
	// 	// const modalEl = modalRef.current
	// 	const bsModal = new ModalBS(document.getElementById('op-modal') as HTMLElement)
	// bsModal.show()
	// })
	return (
		<div id={id} className="modal" tabIndex={-1} ref={modalRef}>
			<div className="modal-dialog modal-xl">
				<div className="modal-content">
					<div className="modal-header">
						<h2 className="modal-title">Versanddaten bearbeiten</h2>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<div className="row g-3">
							<div className="col-6">
								<ExampleForm></ExampleForm>
							</div>
							<div className="col-6">
								<ExampleForm></ExampleForm>
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<Button variant="default" data-bs-dismiss="modal">
							Abbrechen
						</Button>
						<Button variant="primary">Angaben speichern</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
