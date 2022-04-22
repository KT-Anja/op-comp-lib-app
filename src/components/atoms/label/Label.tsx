import { LabelHTMLAttributes } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode
}

const Label = ({ children }: LabelProps) => {
	return <label>{children}</label>
}

export default Label
