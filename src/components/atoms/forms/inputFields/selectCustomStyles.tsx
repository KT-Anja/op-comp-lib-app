import { Theme, StylesConfig } from 'react-select'
import { OptionType } from './InputSelect'

function customStyles(errorMessage: string | undefined): StylesConfig<OptionType, false | true> {
	return {
		indicatorSeparator: () => ({
			backgroundColor: 'none'
		}),
		dropdownIndicator: (provided, state) => ({
			...provided,
			transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
			color: '#cfcfcf'
		}),
		control: (provided, state) => ({
			...provided,
			boxShadow: 'none',
			borderRadius: state.isFocused ? '4px 4px 0 0' : '4px',
			borderColor: errorMessage ? '#c4265c' : '#cfcfcf',
			':hover': {
				borderColor: errorMessage ? '#c4265c' : 'black'
			}
		}),
		valueContainer: (provided) => ({
			...provided,
			padding: '2px 10px'
		}),
		option: (provided) => ({
			...provided,
			color: '#000000',
			backgroundColor: 'transparent',
			':hover': {
				textDecoration: 'underline',
				backgroundColor: 'none'
			},
			':active': {
				backgroundColor: 'transparent'
			},
			position: 'relative',
			padding: '10px'
		}),
		menu: (provided) => ({
			...provided,
			marginTop: '0',
			borderRadius: '0 0 4px 4px',
			boxShadow: '0px 0px 10px #00000029'
		})
	}
}

const customTheme = function (theme: Theme) {
	return {
		...theme,
		colors: {
			...theme.colors,
			primary: '#ff9900', // focus
			neutral30: '#000000', // hover border
			neutral10: '#cfcfcf', // disabled border
			neutral15: '#f0f0f0', // disabled background
			neutral20: '#cfcfcf' // border
		}
	}
}

export const getCustomStyles = (errorMessage: string | undefined) => {
	return customStyles(errorMessage)
}

export const getCustomTheme = (theme: Theme) => {
	return customTheme(theme)
}
