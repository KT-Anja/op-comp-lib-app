import { AnchorHTMLAttributes } from 'react'
import Icon from '../../atoms/icon/Icon'
import Label from '../../atoms/label/Label'
import './headerCTA.scss'

export interface HeaderCTAProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	label: string
	iconKeyName: string
	url?: string
	menu?: JSX.Element
}

const HeaderCTA = ({ label, iconKeyName, url, menu, ...rest }: HeaderCTAProps) => {
	const CTA = () => (
		<div className="header-cta ms-4 d-flex flex-column text-white text-center">
			<Icon keyName={iconKeyName} />
			<Label>{label}</Label>
		</div>
	)
	return (
		<>
			{menu ? (
				<div className="dropdown">
					<a href={url} role="button" data-bs-toggle="dropdown" aria-expanded="false" {...rest}>
						<CTA />
					</a>
					{menu}
				</div>
			) : (
				<a href={url} {...rest}>
					<CTA />
				</a>
			)}
		</>
	)
}

export default HeaderCTA
