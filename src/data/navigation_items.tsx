import { NavigationItem } from '../components/organisms/navigation/types'

const sampleNavItems: NavigationItem[] = [
	{
		title: 'Patterns',
		url: '/'
	},
	{
		title: 'DataGrid',
		url: '/dataGrid'
	},

	{
		title: 'Verwaltung',
		url: '#'
	},
	{
		title: 'Druckvorstufe',
		submenu: [
			{
				title: 'Druckvorstufe 1',
				submenu: [
					{
						title: 'SUBLEVEL 3 TEST',
						url: '#'
					}
				]
			},
			{
				title: 'Druckvorstufe 2',
				url: '#'
			},
			{
				title: 'Druckvorstufe 3',
				url: '#'
			}
		]
	},
	{
		title: 'Druck',
		submenu: [
			{
				title: 'Druck 1',
				url: '#'
			},
			{
				title: 'Druck 2',
				url: '#'
			},
			{
				title: 'Druck 3',
				url: '#'
			}
		]
	},
	{
		title: 'Weiterverarbeitung',
		submenu: [
			{
				title: 'Weiterverarbeitung 1',
				url: '#'
			},
			{
				title: 'Weiterverarbeitung 2',
				url: '#'
			},
			{
				title: 'Weiterverarbeitung 3',
				url: '#'
			}
		]
	},
	{
		title: 'Tools',
		submenu: [
			{
				title: 'Tools 1',
				url: '#'
			},
			{
				title: 'Tools 2',
				url: '#'
			},
			{
				title: 'Tools 3',
				url: '#'
			}
		]
	},
	{
		title: 'VS4',
		submenu: [
			{
				title: 'VS4 1',
				url: '#'
			},
			{
				title: 'VS4 2',
				url: '#'
			},
			{
				title: 'VS4 3',
				url: '#'
			}
		]
	}
]
export default sampleNavItems
