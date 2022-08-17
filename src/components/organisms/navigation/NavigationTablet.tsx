import { useState } from 'react'
import { NavigationItem } from './types'

function DirectionArrow({ left }: { left?: boolean }) {
	return (
		<div>
			<i className={`fa-solid ${left ? 'fa-angle-left' : 'fa-angle-right'}`}></i>
		</div>
	)
}

interface MenuProps {
	items: NavigationItem[]
	subtitle?: string
	isOpen?: boolean
	close?: () => void
}

function Menu({ items, subtitle, isOpen, close }: MenuProps) {
	const [openSubmenu, setOpenSubmenu] = useState<null | number>(null)

	return (
		<ul
			className="nav-tablet-list list-unstyled position-absolute top-0 bg-white w-100"
			style={{
				left: `${subtitle && !isOpen ? '100' : '0'}%`,
				zIndex: subtitle ? 1 : 0
			}}
		>
			{subtitle && (
				<li
					onClick={() => close && close()}
					className="nav-tablet-subtitle px-3 d-flex align-items-center bg-light"
				>
					<DirectionArrow left />
					<span>{subtitle}</span>
				</li>
			)}
			{items.map(({ title, url, submenu }, index) => {
				if (url)
					return (
						<li key={index} className="px-3 d-flex align-items-center">
							<a href={url}>{title}</a>
						</li>
					)

				if (submenu)
					return (
						<>
							<li onClick={() => setOpenSubmenu(index)} className="ps-3 pe-4 d-flex">
								<span className="w-100 justify-content-between d-flex align-items-center my-auto">
									{title}
									<DirectionArrow />
								</span>
							</li>
							<Menu
								items={submenu}
								key={index}
								subtitle={title}
								isOpen={openSubmenu === index}
								close={() => setOpenSubmenu(null)}
							/>
						</>
					)
			})}
		</ul>
	)
}

interface NavigationTablet {
	items: NavigationItem[]
	isOpen: boolean
	closeNavigation?: () => void
}

function NavigationTablet({ items, isOpen, closeNavigation }: NavigationTablet) {
	const toggleClose = () => {
		if (isOpen && typeof closeNavigation === 'function') {
			closeNavigation()
		}
	}
	return (
		<>
			<nav
				className="nav-tablet bg-white overflow-hidden"
				style={{ transform: `translateX(${isOpen ? 0 : -100}%)` }}
			>
				<Menu items={items} />
			</nav>
			<div
				className="nav-tablet-backdrop"
				style={{
					pointerEvents: isOpen ? 'all' : 'none',
					opacity: isOpen ? 0.5 : 0
				}}
				onClick={toggleClose}
			/>
		</>
	)
}

export default NavigationTablet
