import ImagePlaceholder from '@/components/image-placeholder'
import SiteLayout from '@/components/site-layout'

export const metadata = { title: 'About | Etheerrn' }

export default function AboutPage() {
    return (
        <SiteLayout>
            <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
                <header className="text-center">
                    <h1 className="text-3xl font-light uppercase tracking-[0.18em] text-primary-800 sm:text-5xl">
                        About
                    </h1>
                    <span className="mx-auto mt-5 block h-px w-20 bg-primary-300" />
                </header>

                <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* IMAGE PLACEHOLDER — founder / atelier photo */}
                    <ImagePlaceholder label="Atelier portrait" ratio="4/5" className="w-full" />

                    <div>
                        <h2 className="text-2xl font-light tracking-wide text-primary-800 sm:text-3xl">
                            Craft, carried forward.
                        </h2>
                        <p className="mt-5 text-sm leading-relaxed text-primary-900/70 sm:text-base">
                            At Etheerrn we celebrate Indian artistry through handcrafted clothing that
                            blends tradition with modern elegance. Every piece is cut, embroidered and
                            finished by hand in our studio.
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-primary-900/70 sm:text-base">
                            From indo-western fusion sets to everyday western staples, our collections
                            are built to be worn again and again — never only once.
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                    {['Our Studio', 'Handwork', 'Fabrics', 'The Team'].map((label) => (
                        <div key={label}>
                            {/* IMAGE PLACEHOLDER */}
                            <ImagePlaceholder label={label} ratio="3/4" className="w-full" />
                            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-primary-900">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
            </main>
        </SiteLayout>
    )
}
