'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import ImagePlaceholder from '@/components/image-placeholder'
import { FlowerMark } from '@/components/flower'
import { hotPicks } from '@/lib/products'

const HotPicks: React.FC = () => {
    const railRef = useRef<HTMLDivElement>(null)

    const scrollBy = (direction: 1 | -1) => {
        const rail = railRef.current
        if (!rail) return
        rail.scrollBy({ left: direction * rail.clientWidth * 0.8, behavior: 'smooth' })
    }

    return (
        <section className="relative overflow-hidden bg-primary-800 py-16 md:py-20">
            <FlowerMark className="-left-16 top-10 h-72 w-72 invert" opacity={0.08} />
            <FlowerMark className="-right-20 bottom-0 h-80 w-80 invert" opacity={0.06} />

            <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
                <h2 className="text-center font-script text-5xl text-white sm:text-6xl">
                    Hot Picks
                </h2>
                <p className="mt-3 text-center text-[11px] uppercase tracking-[0.35em] text-white/60">
                    Straight off our feed
                </p>

                <div className="relative mt-10">
                    <button
                        onClick={() => scrollBy(-1)}
                        className="absolute -left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-800 shadow-lg transition-transform hover:scale-110 md:flex"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    <div
                        ref={railRef}
                        className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
                    >
                        {hotPicks.map((pick) => (
                            <Link
                                key={pick.label}
                                href={pick.href}
                                className="group relative w-[200px] flex-shrink-0 snap-start overflow-hidden sm:w-[230px]"
                            >
                                {/* VIDEO PLACEHOLDER — drop the reel in as `src` */}
                                <ImagePlaceholder
                                    kind="video"
                                    src={pick.src}
                                    label={pick.label}
                                    ratio="9/16"
                                    className="w-full bg-white/95 transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent" />

                                <div className="absolute inset-x-0 bottom-0 p-4">
                                    <p className="mb-3 text-xs leading-snug text-white/90">
                                        {pick.caption}
                                    </p>
                                    <span className="inline-flex items-center gap-2 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-800 transition-colors group-hover:bg-primary-50">
                                        Shop now
                                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <button
                        onClick={() => scrollBy(1)}
                        className="absolute -right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-800 shadow-lg transition-transform hover:scale-110 md:flex"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HotPicks
