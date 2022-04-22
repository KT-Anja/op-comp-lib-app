import Icon from '../../atoms/icon/Icon'
import Label from '../../atoms/label/Label'
import './headerCTA.scss'

export interface HeaderCTAProps {
	label: string
	iconKeyName: string
	// TODO: Event handling (direct link vs dropdown menu)
}

const HeaderCTA = ({ label, iconKeyName }: HeaderCTAProps) => {
	return (
		// anchor instead of div?
		<div className="header-cta ms-4 d-flex flex-column text-white text-center">
			<Icon keyName={iconKeyName} />
			<Label>{label}</Label>
		</div>
	)
}

export default HeaderCTA
