import classNames from 'classnames'
import { ChangeEvent, FocusEvent, InputHTMLAttributes, useState } from 'react'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string
	label: string
	helperText?: string
	errorMessage?: string
	onChange?: (event: React.ChangeEvent) => void
	onFocus?: (event: React.FocusEvent) => void
	onBlur?: (event: React.FocusEvent) => void
}

const InputField = ({
	id,
	label,
	helperText,
	errorMessage,
	onChange,
	onFocus,
	onBlur,
	...rest
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
			<div className="form-field-wrapper mb-form-field">
				<input
					className={classNames('form-control', {
						'is-invalid': errorMessage
					})}
					id={id}
					onChange={handleOnChange}
					onFocus={handleOnFocus}
					onBlur={handleOnBlur}
					{...rest}
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
