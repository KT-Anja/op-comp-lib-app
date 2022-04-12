import { Button } from '../components'

const Buttons = () => {
	return (
		<>
			<h2>Buttons</h2>
			<div className="example">
				<h4>primary</h4>
				<Button variant="primary">Label</Button>
				<Button variant="primary" disabled>
					Label
				</Button>
				<h4>secondary</h4>
				<Button variant="secondary">Label</Button>
				<Button variant="secondary" disabled>
					Label
				</Button>
				<h4>default</h4>
				<Button variant="default">Label</Button>
				<Button variant="default" disabled>
					Label
				</Button>
				<h4>with icon</h4>
				<Button variant="default" iconKeyName="fa-circle-check" status="success">
					Success default
				</Button>
				<Button variant="default" iconKeyName="fa-circle-check" status="success" disabled>
					Success default
				</Button>
				<Button variant="secondary" iconKeyName="fa-circle-check" status="success">
					Success secondary
				</Button>
				<Button variant="secondary" iconKeyName="fa-circle-check" status="success" disabled>
					Success secondary
				</Button>
				<br />
				<Button variant="default" iconKeyName="fa-triangle-exclamation" status="warning">
					Warning default
				</Button>
				<Button variant="default" iconKeyName="fa-triangle-exclamation" status="warning" disabled>
					Warnign default
				</Button>
				<Button variant="secondary" iconKeyName="fa-triangle-exclamation" status="warning">
					Warning secondary
				</Button>
				<Button variant="secondary" iconKeyName="fa-triangle-exclamation" status="warning" disabled>
					Warning secondary
				</Button>
				<br />
				<Button variant="default" iconKeyName="fa-circle-info" status="info">
					Info default
				</Button>
				<Button variant="default" iconKeyName="fa-circle-info" status="info" disabled>
					Info secondary
				</Button>
				<Button variant="secondary" iconKeyName="fa-circle-info" status="info">
					Label und Icon
				</Button>
				<Button variant="secondary" iconKeyName="fa-circle-info" status="info" disabled>
					Info secondary
				</Button>
				<br />
				<Button variant="default" iconKeyName="fa-ban" status="danger">
					Danger default
				</Button>
				<Button variant="default" iconKeyName="fa-ban" status="danger" disabled>
					Danger default
				</Button>
				<Button variant="secondary" iconKeyName="fa-ban" status="danger">
					Danger secondary
				</Button>
				<Button variant="secondary" iconKeyName="fa-ban" status="danger" disabled>
					Danger secondary
				</Button>
				<h4>icon only</h4>
				<Button variant="default" iconOnly iconKeyName="fa-circle-arrow-right"></Button>
				<Button variant="default" iconOnly iconKeyName="fa-circle-arrow-right" disabled></Button>
			</div>
		</>
	)
}

export default Buttons
