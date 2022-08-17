import classNames from 'classnames'
import { FocusEvent, useRef, useState } from 'react'
import Select, {
	components,
	ControlProps,
	MultiValue,
	OptionProps,
	SingleValue
} from 'react-select'
import Icon from '../../icon/Icon'
import Popover from '../../popover/Popover'
// import './select.scss'
import { getCustomStyles, getCustomTheme } from './selectCustomStyles'

export type OptionType = {
	value: string | number
	label: string
}

type SelectChangeValue = SingleValue<OptionType> | MultiValue<OptionType>

// interface InputSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
interface InputSelectProps {
	id: string
	label: string
	options: OptionType[]
	helperText?: string
	errorMessage?: string
	errorTooltip?: string
	noMarginBottom?: boolean
	// onChange?: (event: React.ChangeEvent<Element>) => void
	onChange?: (value: SelectChangeValue) => void
	onFocus?: (event: React.FocusEvent<Element, Element>) => void
	onBlur?: (event: React.FocusEvent<Element, Element>) => void
}

export type ValueType<OptionType> = OptionType | null | undefined

const InputSelect = ({
	id,
	label,
	options,
	helperText,
	errorMessage,
	errorTooltip,
	noMarginBottom,
	onChange,
	onFocus,
	onBlur,
	...rest
}: InputSelectProps) => {
	const [value, setValue] = useState<SelectChangeValue>(null)
	const [isFocus, setIsFocus] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const errorTooltipRef = useRef(null)

	const handleOnChange = (value: SelectChangeValue) => {
		setValue(value)

		if (onChange) {
			onChange(value)
		}
	}

	const handleOnFocus = (event: FocusEvent<Element, Element>) => {
		event.preventDefault()
		setIsFocus(true)
		setIsMenuOpen(true)

		if (onFocus) {
			onFocus(event)
		}
	}

	const handleOnBlur = (event: FocusEvent<Element, Element>) => {
		setIsFocus(false)
		setIsMenuOpen(false)

		if (onBlur) {
			onBlur(event)
		}
	}

	// Extend option markup to show check mark on select item (-->select.css)
	const CustomOption = ({ children, ...props }: OptionProps<OptionType>) => {
		// console.log(props)
		return (
			<>
				<components.Option {...props}>
					{props.isSelected && <span className="selectedOptionIcon" />}
					{children}
				</components.Option>
			</>
		)
	}

	const CustomControl = ({ children, ...props }: ControlProps<OptionType>) => {
		return (
			components.Control && (
				<components.Control {...props}>
					{errorMessage && <span className="errorSelectIcon"></span>}
					{children}
				</components.Control>
			)
		)
	}

	return (
		<div
			className={classNames('form-field-wrapper', {
				'mb-0': noMarginBottom,
				'mb-form-field': !noMarginBottom
			})}
		>
			<div className="form-select-wrapper">
				<Select
					// id={id}
					inputId={id}
					className={classNames({
						'is-invalid': errorMessage || errorTooltip
					})}
					options={options}
					components={{ Option: CustomOption, Control: CustomControl }}
					placeholder={null}
					onFocus={handleOnFocus}
					onBlur={handleOnBlur}
					onChange={handleOnChange}
					value={value}
					styles={getCustomStyles(errorMessage)}
					theme={getCustomTheme}
					blurInputOnSelect
					menuIsOpen={isMenuOpen}
					{...rest}
				/>
			</div>
			<label
				htmlFor={id}
				className={classNames({
					'form-label': true,
					hasValue: value && value !== null,
					hasFocus: isFocus
				})}
			>
				{label}
			</label>
			{errorTooltip && (
				<span className="invalid-tooltip-indicator invalid-select">
					<Popover content={errorTooltip} classNames="invalid" targetRef={errorTooltipRef}>
						<Icon ref={errorTooltipRef} keyName="fa-circle-info" />
					</Popover>
				</span>
			)}
			{helperText && <div className="form-text">{helperText}</div>}
			{errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
		</div>
	)
}

export default InputSelect
