import Menu from '../atoms/menu/Menu'
import MenuItem from '../atoms/menu/MenuItem'
import HeaderCTA from './headerCTA/HeaderCTA'

const LanguageMenu = () => (
	<Menu id="languageSelector">
		<MenuItem link="#">Deutsch | de</MenuItem>
		<MenuItem link="#">Englisch | en</MenuItem>
		<MenuItem link="#">Spanisch | es</MenuItem>
	</Menu>
)

const LanguageSelector = () => {
	return <HeaderCTA label="de" iconKeyName="fa-globe" menu={<LanguageMenu />}></HeaderCTA>
}

export default LanguageSelector
