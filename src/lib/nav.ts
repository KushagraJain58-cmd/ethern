export interface NavChild {
	name: string
	href: string
}

export interface NavItem {
	name: string
	href: string
	children?: NavChild[]
}

export const navItems: NavItem[] = [
	{
		name: 'IndoWestern',
		href: '/indo-western',
		children: [
			{ name: 'Farshi Sets', href: '/indo-western/farshi-sets' },
			{ name: 'Lehengas', href: '/indo-western/lehengas' },
			{ name: 'Fusion Wear', href: '/indo-western/fusion-wear' },
			{ name: 'Individuals', href: '/indo-western/individuals' },
			{ name: 'Cotton Wear', href: '/indo-western/cotton-wear' },
		],
	},
	{
		name: 'Western',
		href: '/western',
		children: [
			{ name: 'Coords', href: '/western/coords' },
			{ name: 'Dresses', href: '/western/dresses' },
			{ name: 'Summer Vibes', href: '/western/summer-vibes' },
			{ name: 'Tops', href: '/western/tops' },
			{ name: 'Bottoms', href: '/western/bottoms' },
			{ name: 'Winter Wear', href: '/western/winter-wear' },
		],
	},
	{ name: 'Custom Orders', href: '/custom-orders' },
	{ name: 'Look Book', href: '/look-book' },
	{ name: 'About', href: '/about' },
	{ name: 'Contact Us', href: '/contact' },
	{ name: 'How To Measure Yourself', href: '/how-to-measure' },
	{
		name: 'Shop By Collections',
		href: '/collections',
		children: [
			{ name: 'Tyohaar Collection', href: '/collections/tyohaar' },
			{ name: 'Shaadi Ki Tyaari Hogyi', href: '/collections/shaadi-ki-tyaari-hogyi' },
		],
	},
]
