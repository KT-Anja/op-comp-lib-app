interface FormBoxProps {
	headline: string
	children: React.ReactNode
	inModal?: boolean
}

const FormBox = ({ headline, inModal, children }: FormBoxProps) => (
	<div className="form-box">
		{inModal ? (
			<h4 className="form-box-headline">{headline}</h4>
		) : (
			<h3 className="form-box-headline">{headline}</h3>
		)}
		{children}
	</div>
)

export default FormBox
