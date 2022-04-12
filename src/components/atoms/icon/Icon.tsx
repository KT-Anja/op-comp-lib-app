import classNames from 'classnames'

interface IconProps {
	keyName: string
	status?: 'success' | 'info' | 'warning' | 'danger'
}

const Icon = ({ keyName, status }: IconProps) => {
	return (
		<i
			className={classNames(`fa-solid ${keyName}`, {
				[`text-${status}`]: status !== undefined
			})}
		/>
	)
}

export default Icon
