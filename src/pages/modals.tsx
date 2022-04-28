import Modal from '../components/atoms/modal/Modal'

const Modals = () => {
	return (
		<>
			<button
				type="button"
				className="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
			>
				Launch demo modal
			</button>

			<Modal id="exampleModal" />
		</>
	)
}

export default Modals
