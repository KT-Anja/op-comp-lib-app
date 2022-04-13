import classNames from 'classnames'
import { ChangeEvent, FocusEvent, SelectHTMLAttributes, useState } from 'react'

type OptionType = {
	value: number | string
	label: string
}

interface InputSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	id: string
	label: string
	options: OptionType[]
	helperText?: string
	errorMessage?: string
	onChange?: (event: React.ChangeEvent) => void
	onFocus?: (event: React.FocusEvent) => void
	onBlur?: (event: React.FocusEvent) => void
}

const InputSelect = ({
	id,
	label,
	options,
	helperText,
	errorMessage,
	onChange,
	onFocus,
	onBlur,
	...rest
}: InputSelectProps) => {
	const [value, setValue] = useState<string>('')
	const [isFocus, setIsFocus] = useState<boolean>(false)

	const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setValue(event.target.value)

		if (onChange) {
			onChange(event)
		}
	}

	const handleOnFocus = (event: FocusEvent<HTMLSelectElement>) => {
		setIsFocus(true)

		if (onFocus) {
			onFocus(event)
		}
	}

	const handleOnBlur = (event: FocusEvent<HTMLSelectElement>) => {
		setIsFocus(false)

		if (onBlur) {
			onBlur(event)
		}
	}

	return (
		<div className="form-field-wrapper mb-form-field">
			<div className="form-select-wrapper">
				<select
					className={classNames('form-select', {
						'is-invalid': errorMessage
					})}
					id={id}
					onChange={handleOnChange}
					onFocus={handleOnFocus}
					onBlur={handleOnBlur}
					value={value}
					{...rest}
				>
					<option className="d-none"></option>
					{options.map((option) => {
						return (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						)
					})}
				</select>
			</div>
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
	)
}

export default InputSelect
