import Link from 'next/link'
import ImagePlaceholder from '@/components/image-placeholder'
import SiteLayout from '@/components/site-layout'
import { FlowerMark } from '@/components/flower'
import { products } from '@/lib/products'

interface CollectionPageProps {
	title: string
	description?: string
	/** Route of this page — used to pull matching pieces out of the catalog */
	path?: string
	/** Total tiles to show; catalog pieces first, placeholders after */
	count?: number
}

const CollectionPage: React.FC<CollectionPageProps> = ({
	title,
	description,
	path,
	count = 12,
}) => {
	const listed = path
		? products.filter((p) => p.collection === path || p.collection.startsWith(`${path}/`))
		: products
	const fillers = Math.max(0, count - listed.length)

	return (
		<SiteLayout>
			<main className="relative mx-auto max-w-7xl overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
				<FlowerMark className="-right-20 -top-10 h-72 w-72" opacity={0.05} />

				<header className="relative text-center">
					<h1 className="font-script text-4xl text-primary-800 sm:text-6xl">{title}</h1>
					<span className="mx-auto mt-5 block h-px w-20 bg-primary-300" />
					{description && (
						<p className="mx-auto mt-5 max-w-2xl text-xs uppercase leading-relaxed tracking-[0.15em] text-primary-900/55 sm:text-sm">
							{description}
						</p>
					)}
				</header>

				<div className="relative mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
					{listed.map((product) => (
						<Link key={product.slug} href={`/products/${product.slug}`} className="group">
							{/* IMAGE PLACEHOLDER — replace with the product photo */}
							<ImagePlaceholder
								label={product.name}
								ratio="3/4"
								className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
							/>
							<h2 className="mt-3 text-xs uppercase tracking-[0.15em] text-primary-900 transition-colors group-hover:text-primary-600 sm:text-sm">
								{product.name}
							</h2>
							<p className="mt-1 text-xs text-primary-800 sm:text-sm">{product.price}</p>
						</Link>
					))}

					{Array.from({ length: fillers }).map((_, i) => (
						<article key={`filler-${i}`} className="group">
							{/* IMAGE PLACEHOLDER — slot for an upcoming piece */}
							<ImagePlaceholder
								label={`${title} ${listed.length + i + 1}`}
								ratio="3/4"
								className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
							/>
							<h2 className="mt-3 text-xs uppercase tracking-[0.15em] text-primary-900 sm:text-sm">
								{title} Piece {listed.length + i + 1}
							</h2>
							<p className="mt-1 text-xs text-primary-900/55 sm:text-sm">₹ —</p>
						</article>
					))}
				</div>
			</main>
		</SiteLayout>
	)
}

export default CollectionPage
