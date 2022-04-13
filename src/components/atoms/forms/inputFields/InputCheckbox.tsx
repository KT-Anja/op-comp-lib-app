import classNames from 'classnames'
import { ChangeEvent, InputHTMLAttributes } from 'react'

interface InputCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string
	label: string
	helperText?: string
	errorMessage?: string
	onChange?: (event: React.ChangeEvent) => void
}

const InputCheckbox = ({
	id,
	label,
	helperText,
	errorMessage,
	onChange,
	...rest
}: InputCheckboxProps) => {
	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(event)
		}
	}

	return (
		<div className="form-check mb-form-field">
			<input
				id={id}
				type="checkbox"
				className={classNames('form-check-input', {
					'is-invalid': errorMessage
				})}
				onChange={handleOnChange}
				{...rest}
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
