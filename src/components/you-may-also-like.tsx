import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ImagePlaceholder from '@/components/image-placeholder'
import { getRelated, hotPicks } from '@/lib/products'

/** Reels rail + product grid, both shown under the heading. */
const YouMayAlsoLike: React.FC<{ slug: string }> = ({ slug }) => {
	const related = getRelated(slug)
	const reels = hotPicks.filter((p) => !p.href.endsWith(slug)).slice(0, 6)

	return (
		<section className="mt-20 border-t border-primary-100 pt-14">
			<h2 className="font-script text-4xl text-primary-800 sm:text-5xl">
				You may also like
			</h2>

			{/* Video rail */}
			<div className="hide-scrollbar mt-8 flex gap-4 overflow-x-auto pb-2">
				{reels.map((reel) => (
					<Link
						key={reel.label}
						href={reel.href}
						className="group relative w-[190px] flex-shrink-0 overflow-hidden"
					>
						{/* VIDEO PLACEHOLDER */}
						<ImagePlaceholder
							kind="video"
							src={reel.src}
							label={reel.label}
							ratio="9/16"
							className="w-full transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-primary-900/75 to-transparent" />
						<span className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 bg-primary-800 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
							Shop now
							<ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
						</span>
					</Link>
				))}
			</div>

			{/* Product grid */}
			<div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
				{related.map((product) => (
					<Link key={product.slug} href={`/products/${product.slug}`} className="group">
						{/* IMAGE PLACEHOLDER */}
						<ImagePlaceholder
							label={product.name}
							ratio="3/4"
							className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
						/>
						<h3 className="mt-3 text-xs uppercase tracking-[0.12em] text-primary-900 sm:text-sm">
							{product.name}
						</h3>
						<p className="mt-1 text-sm text-primary-800">{product.price}</p>
					</Link>
				))}
			</div>
		</section>
	)
}

export default YouMayAlsoLike
