export function isOpen(item: HTMLElement) {
	return item.classList.contains('is-open')
}

export function closeSidebarSubmenuAll() {
	const allMenues = document.querySelectorAll('#sidebar .sb-menu')
	for (let menu of allMenues) {
		menu.classList.remove('is-open')
	}
}

export function openSidebarSubmenu(submenu: HTMLDivElement) {
	// close all other submenus
	closeSidebarSubmenuAll()
	// open side nav
	const sidebar = document.getElementById('sidebar')
	if (sidebar) openSidebar(sidebar)

	submenu.classList.add('is-open')
}

export function closeSidebarSubmenu(submenu: HTMLDivElement) {
	submenu.classList.remove('is-open')
}

export function openSidebar(sidebar: HTMLElement) {
	sidebar.classList.add('is-open')
}

export function closeSidebar(sidebar: HTMLElement) {
	// close all submenues
	closeSidebarSubmenuAll()
	sidebar.classList.remove('is-open')
}

export function toggleSidebar() {
	const sidebar = document.getElementById('sidebar')
	if (sidebar) {
		if (isOpen(sidebar)) {
			closeSidebar(sidebar)
		} else {
			openSidebar(sidebar)
		}
	}
}
