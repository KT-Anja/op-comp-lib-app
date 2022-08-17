import { createRef } from 'react'
import { Button, Icon } from '../components'
import Tooltip from '../components/atoms/tooltip/Tooltip'

const Tooltips = () => {
	const refButtonTop = createRef<HTMLButtonElement>()
	const refButtonRight = createRef<HTMLButtonElement>()
	const refButtonBottom = createRef<HTMLButtonElement>()
	const refButtonLeft = createRef<HTMLButtonElement>()
	const refIcon = createRef<HTMLElement>()
	return (
		<div className="example">
			<Tooltip title="Lorem Ipsum" direction="top" targetRef={refButtonTop}>
				<Button variant="default" ref={refButtonTop}>
					Tooltip Button top
				</Button>
			</Tooltip>
			<Tooltip title="Lorem Ipsum" direction="right" targetRef={refButtonRight}>
				<Button variant="default" ref={refButtonRight}>
					Tooltip Button right
				</Button>
			</Tooltip>
			<Tooltip title="Lorem Ipsum" direction="bottom" targetRef={refButtonBottom}>
				<Button variant="default" ref={refButtonBottom}>
					Tooltip Button bottom
				</Button>
			</Tooltip>
			<Tooltip title="Lorem Ipsum" direction="left" targetRef={refButtonLeft}>
				<Button variant="default" ref={refButtonLeft}>
					Tooltip Button left
				</Button>
			</Tooltip>
			<Tooltip title="Lorem ipsum" direction="top" targetRef={refIcon}>
				<Icon keyName="fa-ban" ref={refIcon}></Icon>
			</Tooltip>
		</div>
	)
}
export default Tooltips
