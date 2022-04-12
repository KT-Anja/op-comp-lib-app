import { Button, InputField } from '../components'
import InputCheckbox from '../components/atoms/forms/inputFields/InputCheckbox'

const Forms = () => {
	return (
		<>
			<div className="row mb-3">
				<div className="col-6">
					<div className="form-wrapper">
						<h3 className="mb-3">Kundendaten</h3>
						<form className="needs-validation" noValidate>
							<InputField type="text" id="defaultInput" label="Default"></InputField>
							<InputField
								type="text"
								id="defaultHelperText"
								label="With helper text"
								helperText="Some important text"
							></InputField>
							<InputField type="email" id="emailInput" label="Email"></InputField>
							<InputField type="password" id="passwordInput" label="Password"></InputField>
							<InputField type="text" id="defaultDisabled" label="disabled" disabled></InputField>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</form>
					</div>
				</div>
				<div className="col-6">
					<div className="form-wrapper">
						<h3 className="mb-3">Kundendaten</h3>
						<form className="needs-validation" noValidate>
							<InputCheckbox id="checkbox_A" label="Checkbox"></InputCheckbox>
							<InputCheckbox id="checkbox_B" label="Checkbox checked" checked></InputCheckbox>
							<InputCheckbox id="checkbox_C" label="Checkbox disabled" disabled></InputCheckbox>
							<InputCheckbox id="checkbox_D" label="Checkbox required" required></InputCheckbox>
							<InputCheckbox
								id="checkbox_D"
								label="Checkbox disabled checked"
								disabled
								checked
							></InputCheckbox>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</form>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<div className="form-wrapper">
						<h3 className="mb-3">Kundendaten</h3>
						<form className="needs-validation was-validated" noValidate>
							<InputCheckbox
								id="checkbox_E"
								label="Checkbox 2"
								required
								errorMessage="Required"
							></InputCheckbox>
							<InputField
								type="text"
								id="defaultInvalid"
								label="invalid"
								errorMessage="Sample Error Message"
								required
							></InputField>

							<Button variant="primary" type="submit">
								Submit
							</Button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Forms
