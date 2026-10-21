import { notFound } from 'next/navigation'
import Link from 'next/link'
import SiteLayout from '@/components/site-layout'
import ProductGallery from '@/components/product-gallery'
import ProductPurchase from '@/components/product-purchase'
import YouMayAlsoLike from '@/components/you-may-also-like'
import { FlowerMark } from '@/components/flower'
import { getProduct, products } from '@/lib/products'

export function generateStaticParams() {
    return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const product = getProduct(slug)
    return { title: product ? `${product.name} | Etheerrn` : 'Product | Etheerrn' }
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const product = getProduct(slug)
    if (!product) notFound()

    return (
        <SiteLayout>
            <main className="relative mx-auto max-w-7xl overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                <FlowerMark className="-right-24 top-0 h-80 w-80" opacity={0.05} />

                {/* Breadcrumb */}
                <nav className="relative mb-8 text-[11px] uppercase tracking-[0.2em] text-primary-900/50">
                    <Link href="/" className="transition-colors hover:text-primary-800">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <Link href={product.collection} className="transition-colors hover:text-primary-800">
                        {product.category}
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-primary-800">{product.name}</span>
                </nav>

                <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <ProductGallery media={product.media} />

                    <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-primary-400">
                            Etheerrn
                        </p>
                        <h1 className="mt-3 text-3xl font-light uppercase tracking-[0.12em] text-primary-800 sm:text-4xl">
                            {product.name}
                        </h1>

                        <div className="mt-5 flex items-baseline gap-3">
                            <span className="text-xl text-primary-900">{product.price}</span>
                            {product.originalPrice && (
                                <span className="text-sm text-primary-900/40 line-through">
                                    {product.originalPrice}
                                </span>
                            )}
                        </div>
                        <p className="mt-2 text-xs text-primary-900/55">
                            Taxes included. Shipping calculated at checkout.
                        </p>

                        <ProductPurchase sizes={product.sizes} />

                        <Link
                            href="/how-to-measure"
                            className="mt-6 inline-block border-b border-primary-300 pb-0.5 text-xs uppercase tracking-[0.2em] text-primary-800 transition-colors hover:border-primary-800"
                        >
                            How to measure yourself
                        </Link>

                        <div className="mt-10 space-y-4 border-t border-primary-100 pt-8">
                            <p className="text-sm leading-relaxed text-primary-900/70">
                                {product.description}
                            </p>
                            <p className="text-sm text-primary-900/70">
                                <span className="uppercase tracking-[0.2em] text-primary-400">
                                    Fabric ·{' '}
                                </span>
                                {product.fabric}
                            </p>
                        </div>
                    </div>
                </div>

                <YouMayAlsoLike slug={product.slug} />
            </main>
        </SiteLayout>
    )
}
