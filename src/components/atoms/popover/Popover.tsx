import { Popover as PopoverBS } from 'bootstrap'
import { ReactNode, useEffect, useState } from 'react'
interface PopoverProps {
	content: string
	placement?: 'top' | 'right' | 'bottom' | 'left'
	children: ReactNode
	classNames?: string
	targetRef: React.MutableRefObject<HTMLElement | null>
	popperConfig?: null | object
}

const Popover = ({
	placement = 'top',
	children,
	content,
	classNames = '',
	targetRef,
	popperConfig
}: PopoverProps) => {
	const [open, setOpen] = useState(false)

	const togglePopover = () => {
		setOpen(!!open)
	}

	useEffect(() => {
		if (targetRef && targetRef.current) {
			const config = popperConfig
				? popperConfig
				: {
						content: content,
						customClass: classNames,
						placement: placement,
						html: true,
						offset: '0, 20',
						trigger: 'focus hover',
						toggle: togglePopover
				  }
			const popover = new PopoverBS(targetRef.current, config)
		}
	})
	return <>{children}</>
}

export default Popover
