import { FormHTMLAttributes } from 'react'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	background?: boolean
}

const Form = ({ ...rest }: FormProps) => {
	return <form {...rest}></form>
}

export default Form
