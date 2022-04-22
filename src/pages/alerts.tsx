import { Alert } from '../components'

const Alerts = () => {
	return (
		<>
			<Alert status="success" message="Success! Das war erfolgreich" showIcon></Alert>
			<Alert status="info" message="Eine Information"></Alert>
			<Alert status="info" message="Eine Information mit Icon" showIcon></Alert>
			<Alert status="warning" message="Das hier ist eine Warnung!"></Alert>
			<Alert status="warning" message="Das hier ist eine Warnung mit Icon!" showIcon></Alert>
			<Alert
				status="danger"
				message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
			></Alert>
			<Alert
				status="danger"
				message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
				showIcon
			></Alert>
		</>
	)
}

export default Alerts
