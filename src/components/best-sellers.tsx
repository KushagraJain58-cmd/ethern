'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Heart } from 'lucide-react'
import { Product } from '@/app/page'
import { products as catalog } from '@/lib/products'
import ImagePlaceholder from '@/components/image-placeholder'
import Reveal, { useInView } from '@/components/reveal'
import SectionHeading from '@/components/section-heading'

interface BestSellerProps {
    onLike: (product: Product) => void
    likedProducts: Product[]
}

/** Built from the catalog so every card links through to its detail page. */
const bestSellers: Product[] = catalog.map((item, i) => ({
    id: i + 1,
    slug: item.slug,
    name: item.name,
    category: item.collection.startsWith('/western') ? 'Western' : 'Indo Western',
    price: item.price,
    originalPrice: item.originalPrice ?? item.price,
    image: '',
    isLiked: false,
    isSale: Boolean(item.originalPrice),
}))

const filters = ['All', 'Indo Western', 'Western', 'Sale']

const BestSellers: React.FC<BestSellerProps> = ({ onLike, likedProducts }) => {
    const [activeFilter, setActiveFilter] = useState<string>('All')
    const [indicator, setIndicator] = useState<{ left: number; width: number }>({ left: 0, width: 0 })
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
    const { ref: gridRef, inView } = useInView<HTMLDivElement>(0.1)

    useEffect(() => {
        const update = () => {
            const el = tabRefs.current[filters.indexOf(activeFilter)]
            if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth })
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [activeFilter])

    const visibleProducts =
        activeFilter === 'All'
            ? bestSellers
            : activeFilter === 'Sale'
                ? bestSellers.filter((p) => p.isSale)
                : bestSellers.filter((p) => p.category === activeFilter)

    const isProductLiked = (productId: number) =>
        likedProducts.some((product) => product.id === productId)

    return (
        <section id="collection" className="bg-white py-20 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="The Collection"
                    title="Best Sellers"
                    description="The pieces our customers keep coming back for."
                />

                {/* Filter tabs */}
                <Reveal delay={200} className="mt-10 flex justify-center">
                    <div className="relative flex max-w-full gap-1 overflow-x-auto border border-primary-200 p-1">
                        <span
                            className="absolute top-1 bottom-1 bg-primary-800 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)]"
                            style={{ left: indicator.left, width: indicator.width }}
                        />
                        {filters.map((filter, i) => (
                            <button
                                key={filter}
                                ref={(el) => { tabRefs.current[i] = el }}
                                onClick={() => setActiveFilter(filter)}
                                className={`relative z-10 whitespace-nowrap px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${activeFilter === filter ? 'text-white' : 'text-primary-800 hover:text-primary-600'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* Product grid */}
                <div
                    ref={gridRef}
                    key={activeFilter}
                    className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
                >
                    {visibleProducts.map((product, index) => {
                        const liked = isProductLiked(product.id)
                        return (
                            <article
                                key={product.id}
                                className={`group ${inView ? 'animate-fadeUp' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 80}ms` }}
                            >
                                <div className="relative overflow-hidden">
                                    <Link href={`/products/${product.slug}`} className="block">
                                        {/* IMAGE PLACEHOLDER — replace with the product photo */}
                                        <ImagePlaceholder
                                            label={product.name}
                                            ratio="3/4"
                                            className="w-full transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.04]"
                                        />
                                    </Link>

                                    {product.isSale && (
                                        <span className="absolute left-0 top-4 bg-primary-800 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white">
                                            Sale
                                        </span>
                                    )}

                                    <button
                                        onClick={() => onLike(product)}
                                        className={`absolute right-3 top-3 p-2.5 transition-all duration-300 ${liked
                                            ? 'bg-primary-800 text-white'
                                            : 'bg-white/90 text-primary-800 hover:bg-white'
                                            }`}
                                        aria-label={`${liked ? 'Remove from' : 'Add to'} wishlist`}
                                    >
                                        <Heart
                                            key={String(liked)}
                                            className={`h-4 w-4 ${liked ? 'animate-pop fill-current' : ''}`}
                                        />
                                    </button>
                                </div>

                                <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-primary-400">
                                    {product.category}
                                </p>
                                <h3 className="mt-1.5 text-xs uppercase tracking-[0.12em] text-primary-900 sm:text-sm">
                                    <Link href={`/products/${product.slug}`} className="transition-colors hover:text-primary-600">
                                        {product.name}
                                    </Link>
                                </h3>
                                <div className="mt-1 flex items-baseline gap-2">
                                    <span className="text-sm text-primary-800">{product.price}</span>
                                    <span className="text-xs text-primary-900/40 line-through">
                                        {product.originalPrice}
                                    </span>
                                </div>
                            </article>
                        )
                    })}
                </div>

                <Reveal className="mt-14 text-center">
                    <Link
                        href="/collections"
                        className="group inline-flex items-center gap-3 border border-primary-800 px-10 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-800 transition-colors duration-300 hover:bg-primary-800 hover:text-white"
                    >
                        Explore More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}

export default BestSellers
