import { Tooltip as TooltipBS } from 'bootstrap'
import { ReactNode, useEffect } from 'react'
interface TooltipProps {
	title: string
	direction?: 'top' | 'right' | 'bottom' | 'left'
	children?: ReactNode
	targetRef: React.MutableRefObject<HTMLElement | null>
}

const Tooltip = ({ direction = 'top', children, title, targetRef }: TooltipProps) => {
	useEffect(() => {
		if (targetRef && targetRef.current) {
			const tooltip = new TooltipBS(targetRef.current, {
				title: title,
				placement: direction,
				trigger: 'click hover focus'
			})
		}
	})
	return <>{children}</>
}

export default Tooltip
