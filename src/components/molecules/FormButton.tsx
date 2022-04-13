import classNames from 'classnames'
import Button, { ButtonProps } from '../atoms/button/Button'

interface FormButtonProps extends ButtonProps {
	right?: boolean
}

const FormButton = ({ right, ...rest }: FormButtonProps) => {
	return (
		<div
			className={classNames(`form-btn col-12`, {
				'btn-flex-end': right
			})}
		>
			<Button {...rest}></Button>
		</div>
	)
}

export default FormButton
