interface InputCheckboxProps {
	id: string
	label: string
	helperText?: string
	value?: string
	message?: string
	checked?: boolean
	disabled?: boolean
	required?: boolean
	errorMessage?: string
}

const InputCheckbox = ({
	id,
	label,
	helperText,
	checked,
	disabled,
	errorMessage,
	required
}: InputCheckboxProps) => {
	return (
		<div className="form-check">
			<input
				type="checkbox"
				className="form-check-input"
				id={id}
				checked={checked}
				disabled={disabled}
				required={required}
			/>
			<label htmlFor={id} className="form-check-label">
				{label}
			</label>
			{helperText && <div className="form-text">{helperText}</div>}
			{errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
		</div>
	)
}

export default InputCheckbox
