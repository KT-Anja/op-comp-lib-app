interface FormBoxProps {
	headline: string
	children: React.ReactNode
}

const FormBox = ({ headline, children }: FormBoxProps) => (
	<div className="form-box">
		<h3 className="form-box-headline">{headline}</h3>
		{children}
	</div>
)

export default FormBox
