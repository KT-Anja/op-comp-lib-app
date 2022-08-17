export type NavigationItem = ItemWithSubmenu | ItemWithURL

type ItemWithSubmenu = {
	title: string
	url?: never
	submenu: NavigationItem[]
}

type ItemWithURL = {
	title: string
	url: string
	submenu?: never
}
