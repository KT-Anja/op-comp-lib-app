import { Alert } from '../components'
import AlertContainer from '../components/atoms/alert/AlertContainer'

const Alerts = () => {
	return (
		<>
			<Alert status="success" message="Success! Das war erfolgreich" icon></Alert>
			<Alert status="info" message="Eine Information"></Alert>
			<Alert status="info" message="Eine Information mit Icon" icon></Alert>
			<Alert status="warning" message="Das hier ist eine Warnung!"></Alert>
			<Alert status="warning" message="Das hier ist eine Warnung mit Icon!" icon></Alert>
			<Alert
				status="danger"
				message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
			></Alert>
			<Alert
				status="danger"
				message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
				icon
			></Alert>

			{/*  Overlay bottom */}
			<AlertContainer showAsOverlay center cols={6} overlayPosition="bottom" autoClose>
				<Alert status="success" message="Success! Das war erfolgreich" icon></Alert>
				<Alert
					status="danger"
					message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
				></Alert>
			</AlertContainer>

			{/*  Overlay top */}
			<AlertContainer showAsOverlay center overlayPosition="top">
				<Alert
					status="info"
					message="Eine Information als Overlay, zentriert, 8 Spalten breit"
					icon
				></Alert>
			</AlertContainer>
			<AlertContainer cols={4} center autoClose={false}>
				<Alert status="success" message="Success! Das war erfolgreich" icon></Alert>
				<Alert
					status="danger"
					message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
					icon
				></Alert>
			</AlertContainer>
			<AlertContainer cols={6} autoClose={false}>
				<Alert status="success" message="Success! Das war erfolgreich" icon></Alert>
			</AlertContainer>
		</>
	)
}

export default Alerts
