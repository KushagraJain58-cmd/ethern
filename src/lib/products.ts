export interface ProductMedia {
	kind: 'image' | 'video'
	/** Real asset path once available — placeholder is rendered while empty. */
	src?: string
	label: string
}

export interface CatalogProduct {
	slug: string
	name: string
	category: string
	/** Route of the listing page this product belongs to */
	collection: string
	price: string
	originalPrice?: string
	description: string
	fabric: string
	sizes: string[]
	media: ProductMedia[]
}

const media = (name: string): ProductMedia[] => [
	{ kind: 'image', label: `${name} — front` },
	{ kind: 'image', label: `${name} — detail` },
	{ kind: 'video', label: `${name} — on the move` },
	{ kind: 'image', label: `${name} — back` },
]

export const products: CatalogProduct[] = [
	{
		slug: 'parul-farshi-salwar',
		name: 'Parul Farshi Salwar',
		category: 'Farshi Sets',
		collection: '/indo-western/farshi-sets',
		price: '₹22,000',
		originalPrice: '₹26,000',
		description:
			'A hand-embroidered farshi salwar set with a fitted kurti and wide flared drape. Finished with mirror and thread work along the neckline.',
		fabric: 'Crinkle silk with hand mirror work',
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		media: media('Parul Farshi Salwar'),
	},
	{
		slug: 'leela-lehenga',
		name: 'Leela Lehenga',
		category: 'Lehengas',
		collection: '/indo-western/lehengas',
		price: '₹76,000',
		originalPrice: '₹82,000',
		description:
			'A heavily worked lehenga with a structured blouse and layered skirt, cut for movement on the dance floor.',
		fabric: 'Raw silk with zardozi and bead work',
		sizes: ['XS', 'S', 'M', 'L'],
		media: media('Leela Lehenga'),
	},
	{
		slug: 'morni-anarkali',
		name: 'Morni Anarkali',
		category: 'Anarkali',
		collection: '/indo-western/fusion-wear',
		price: '₹35,000',
		description:
			'Crinkle silk anarkali, beautifully hand crafted. A unique neckline with mirror work detailing makes it look elegant. Paired with a same-fabric pant and hand embroidered dupatta.',
		fabric: 'Crinkle silk, hand embroidered dupatta',
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		media: media('Morni Anarkali'),
	},
	{
		slug: 'chahak-coord-set',
		name: 'Chahak Co-ord Set',
		category: 'Coords',
		collection: '/western/coords',
		price: '₹12,000',
		originalPrice: '₹15,000',
		description:
			'A relaxed co-ord set in a soft drape fabric — an easy throw-on that still feels considered.',
		fabric: 'Poly crepe',
		sizes: ['XS', 'S', 'M', 'L'],
		media: media('Chahak Co-ord Set'),
	},
	{
		slug: 'saanjh-fusion-drape',
		name: 'Saanjh Fusion Drape',
		category: 'Fusion Wear',
		collection: '/indo-western/fusion-wear',
		price: '₹22,000',
		originalPrice: '₹27,000',
		description:
			'A pre-draped fusion silhouette that wears like a gown and drapes like a saree. Zero pinning required.',
		fabric: 'Georgette with sequin detailing',
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		media: media('Saanjh Fusion Drape'),
	},
	{
		slug: 'shyena-slip-dress',
		name: 'Shyena Slip Dress',
		category: 'Dresses',
		collection: '/western/dresses',
		price: '₹9,500',
		originalPrice: '₹11,500',
		description:
			'A bias-cut slip dress with adjustable straps and a soft cowl neck. Layer it or wear it on its own.',
		fabric: 'Satin crepe',
		sizes: ['XS', 'S', 'M', 'L'],
		media: media('Shyena Slip Dress'),
	},
	{
		slug: 'sudakshana-cotton-set',
		name: 'Sudakshana Cotton Set',
		category: 'Cotton Wear',
		collection: '/indo-western/cotton-wear',
		price: '₹8,200',
		originalPrice: '₹9,900',
		description:
			'A breathable cotton set with fine thread work — made for long summer days and easy travel.',
		fabric: 'Handloom cotton',
		sizes: ['S', 'M', 'L', 'XL'],
		media: media('Sudakshana Cotton Set'),
	},
	{
		slug: 'meherrang-trousers',
		name: 'Meherrang Trousers',
		category: 'Bottoms',
		collection: '/western/bottoms',
		price: '₹6,400',
		originalPrice: '₹7,800',
		description:
			'High-waisted wide-leg trousers with a clean front and deep pockets.',
		fabric: 'Textured suiting',
		sizes: ['XS', 'S', 'M', 'L', 'XL'],
		media: media('Meherrang Trousers'),
	},
]

export const getProduct = (slug: string) => products.find((p) => p.slug === slug)

export const getRelated = (slug: string, count = 4) =>
	products.filter((p) => p.slug !== slug).slice(0, count)

/** Short reels-style edits shown in the Hot Picks rail and on product pages. */
export interface HotPick {
	label: string
	caption: string
	href: string
	/** Real video path once available */
	src?: string
}

export const hotPicks: HotPick[] = [
	{ label: 'Farshi in motion', caption: 'Kurti so good even Parul had to dance', href: '/products/parul-farshi-salwar' },
	{ label: 'The bride era', caption: 'Shaadi ki tyaari, sorted', href: '/products/leela-lehenga' },
	{ label: 'Morni on green', caption: 'Crinkle silk, hand crafted', href: '/products/morni-anarkali' },
	{ label: 'Everyday co-ord', caption: 'One set, five ways', href: '/products/chahak-coord-set' },
	{ label: 'Drape without pins', caption: 'Pre-draped in 60 seconds', href: '/products/saanjh-fusion-drape' },
	{ label: 'Slip into it', caption: 'The dress you will re-wear', href: '/products/shyena-slip-dress' },
	{ label: 'Cotton days', caption: 'Made for the heat', href: '/products/sudakshana-cotton-set' },
	{ label: 'Wide leg, easy walk', caption: 'Trousers with real pockets', href: '/products/meherrang-trousers' },
]
