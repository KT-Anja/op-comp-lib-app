import { useState } from 'react'
import { Button, FormBox, InputField } from '../components'
import Modal from '../components/atoms/modal/Modal'
import ModalBody from '../components/atoms/modal/ModalBody'
import ModalFooter from '../components/atoms/modal/ModalFooter'
import ModalHeader from '../components/atoms/modal/ModalHeader'

const Modals = () => {
	const [isOpen, setIsOpen] = useState(false)
	const showModal = () => {
		setIsOpen(true)
	}

	const hideModal = () => {
		setIsOpen(false)
	}
	return (
		<div id="modal2">
			<button type="button" className="btn btn-primary" onClick={showModal}>
				Modal öffnen
			</button>

			<Modal
				id="exampleModal2"
				open={isOpen}
				onClose={hideModal}
				// closeOnBackdrop={false}
				aria-labelledby="exampleModal2"
			>
				{/* this should be the place to define a layout, as Component or as prop of modal ?*/}
				<div className="box">
					<ModalHeader title="Versanddaten bearbeiten" closeButton />
					<ModalBody>
						<div className="row g-3">
							<div className="col-6">
								<ExampleForm></ExampleForm>
							</div>
							<div className="col-6">
								<ExampleForm></ExampleForm>
							</div>
						</div>
					</ModalBody>
					<ModalFooter>
						<Button variant="default" data-bs-dismiss="modal">
							Abbrechen
						</Button>
						<Button variant="primary">Angaben speichern</Button>
					</ModalFooter>
				</div>
			</Modal>
		</div>
	)
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

export default Modals
