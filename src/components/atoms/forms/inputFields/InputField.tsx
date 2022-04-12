import { ChangeEvent, FocusEvent, useState } from 'react'
import classNames from 'classnames'

interface InputFieldProps {
	type: 'text' | 'email' | 'password'
	id: string
	label: string
	helperText?: string
	disabled?: boolean
	required?: boolean
	value?: string
	errorMessage?: string
	onChange?: (event: React.ChangeEvent) => void
	onFocus?: (event: React.FocusEvent) => void
	onBlur?: (event: React.FocusEvent) => void
}

const InputField = ({
	type,
	id,
	label,
	helperText,
	disabled,
	required,
	errorMessage,
	onChange,
	onFocus,
	onBlur
}: InputFieldProps) => {
	const [value, setValue] = useState<string>('')
	const [isFocus, setIsFocus] = useState<boolean>(false)

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)

		if (onChange) {
			onChange(event)
		}
	}

	const handleOnFocus = (event: FocusEvent<HTMLInputElement>) => {
		setIsFocus(true)

		if (onFocus) {
			onFocus(event)
		}
	}

	const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
		setIsFocus(false)

		if (onBlur) {
			onBlur(event)
		}
	}

	return (
		<>
			<div className="form-field-wrapper mb-3">
				<input
					type={type}
					className={classNames('form-control', {
						'is-invalid': errorMessage
					})}
					id={id}
					disabled={disabled}
					required={required}
					onChange={handleOnChange}
					onFocus={handleOnFocus}
					onBlur={handleOnBlur}
				/>
				<label
					htmlFor={id}
					className={classNames({
						'form-label': true,
						hasValue: value && value !== '',
						hasFocus: isFocus
					})}
				>
					{label}
				</label>
				{helperText && <div className="form-text">{helperText}</div>}
				{errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
			</div>
		</>
	)
}

export default InputField
