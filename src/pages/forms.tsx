import { FormBox, InputField, InputSelect } from '../components'
import InputCheckbox from '../components/atoms/forms/inputFields/InputCheckbox'
import { OptionType } from '../components/atoms/forms/inputFields/InputSelect'
import FormButton from '../components/molecules/FormButton'

const options: Array<OptionType> = [
	{
		value: 0,
		label: '0%'
	},
	{
		value: 50,
		label: '50%'
	},
	{
		value: 100,
		label: '100%'
	}
]

const optionsYesNo: Array<OptionType> = [
	{
		value: 0,
		label: 'Nein'
	},
	{
		value: 1,
		label: 'Ja'
	}
]

const Forms = () => {
	return (
		<>
			<div className="row mb-3">
				<div className="col-6">
					<div className="form-wrapper">
						<h3 className="mb-3">Input fields</h3>
						<form noValidate>
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
						</form>
					</div>
				</div>
				<div className="col-6">
					<div className="form-wrapper">
						<h3 className="mb-3">Checkboxes</h3>
						<form noValidate>
							<InputCheckbox id="checkbox_A" label="Checkbox"></InputCheckbox>
							<InputCheckbox id="checkbox_B" label="Checkbox checked" checked></InputCheckbox>
							<InputCheckbox id="checkbox_C" label="Checkbox disabled" disabled></InputCheckbox>
							<InputCheckbox id="checkbox_D" label="Checkbox required" required></InputCheckbox>
							<InputCheckbox
								id="checkbox_E"
								label="Checkbox disabled checked"
								disabled
								checked
							></InputCheckbox>
						</form>
					</div>
				</div>
			</div>
			<div className="row mb-3">
				<div className="col-6">
					<div className="form-wrapper">
						<h3 className="mb-3">Invalid states</h3>
						<form noValidate>
							<InputCheckbox
								id="checkbox_G"
								label="Invalid checkbox"
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
							<InputField type="text" id="defaultInvalid2" label="valid"></InputField>
							<InputCheckbox
								id="checkbox_H"
								label="Invalid checkbox"
								required
								errorMessage="Required"
							></InputCheckbox>
							<InputCheckbox id="checkbox_I" label="Valid checkbox"></InputCheckbox>
							<InputField
								type="text"
								id="defaultInvalid3"
								label="valid"
								helperText="allright"
							></InputField>
						</form>
					</div>
				</div>
				<div className="col-6">
					<div className="form-wrapper">
						<h3 className="mb-3">Select</h3>
						<form noValidate>
							<InputSelect
								id="select1"
								label="Select"
								options={[
									{ value: 'option1', label: 'Option 1' },
									{ value: 'option2', label: 'Option 2' },
									{ value: 'option3', label: 'Option 3' },
									{ value: 'option4', label: 'Option 4' }
								]}
							></InputSelect>
							<InputSelect
								id="select2"
								label="Select"
								options={[
									{ value: 'option1', label: 'Option 1' },
									{ value: 'option2', label: 'Option 2' },
									{ value: 'option3', label: 'Option 3' },
									{ value: 'option4', label: 'Option 4' }
								]}
								disabled
							></InputSelect>
							<InputSelect
								id="select3"
								label="Select"
								options={[
									{ value: 'option1', label: 'Option 1' },
									{ value: 'option2', label: 'Option 2' },
									{ value: 'option3', label: 'Option 3' },
									{ value: 'option4', label: 'Option 4' }
								]}
								required
								errorMessage="Bitte auswählen"
							></InputSelect>
						</form>
					</div>
				</div>
			</div>
			<div className="row mb-3">
				<h3 className="mb-3">Switch</h3>
				<div className="col-6">
					<div className="mb-3 form-check form-switch">
						<input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
						<label className="form-check-label" htmlFor="flexSwitchCheckDefault">
							Default switch checkbox input
						</label>
					</div>
					<div className="mb-3 form-check form-switch">
						<input
							className="form-check-input"
							type="checkbox"
							id="flexSwitchCheckChecked"
							checked
						/>
						<label className="form-check-label" htmlFor="flexSwitchCheckChecked">
							Checked switch checkbox input
						</label>
					</div>
					<div className="mb-3 form-check form-switch">
						<input
							className="form-check-input"
							type="checkbox"
							id="flexSwitchCheckDisabled"
							disabled
						/>
						<label className="form-check-label" htmlFor="flexSwitchCheckDisabled">
							Disabled switch checkbox input
						</label>
					</div>
					<div className="mb-3 form-check form-switch">
						<input
							className="form-check-input"
							type="checkbox"
							id="flexSwitchCheckCheckedDisabled"
							checked
							disabled
						/>
						<label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">
							Disabled checked switch checkbox input
						</label>
					</div>
				</div>
			</div>
			<div className="row mb-3">
				<h3 className="mb-3">In Formbox</h3>
				<div className="col-6">
					<FormBox headline="Kundendaten">
						<form noValidate>
							<InputField type="text" id="kundennummer" label="Kundennummer"></InputField>
							<InputField type="text" id="ansprechpartner" label="Ansprechpartner"></InputField>
							<InputSelect
								id="umsatzsteuer"
								label="Umsatzsteuer gültig"
								options={optionsYesNo}
							></InputSelect>
							<InputSelect
								id="umsatz"
								label="Umsatzsteuer berechnen"
								options={optionsYesNo}
								noMarginBottom
							></InputSelect>
						</form>
					</FormBox>
				</div>
				<div className="col-6">
					<FormBox headline="Auftragsdaten">
						<form noValidate>
							<div className="row">
								<div className="col-6">
									<InputField type="text" id="reachnungsart" label="Rechnungsart"></InputField>
								</div>
								<div className="col-6">
									<InputSelect id="rabatt" label="Rabatt" options={options}></InputSelect>
								</div>
							</div>
							<InputField type="text" id="referenztext" label="Referenztext"></InputField>
							<InputField type="text" id="produktions" label="Produktionsstätte"></InputField>
							<FormButton variant="default">Druckdateien hochladen</FormButton>
						</form>
					</FormBox>
				</div>
			</div>
		</>
	)
}

export default Forms
