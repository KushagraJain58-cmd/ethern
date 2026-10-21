'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import ImagePlaceholder from '@/components/image-placeholder'

interface Slide {
    title: string
    subtitle: string
    href: string
    /** Replace with a real image path when assets land */
    image?: string
}

const SLIDE_DURATION = 6000

const slides: Slide[] = [
    {
        title: 'Shop Your Favourite',
        subtitle: 'Hand-picked pieces, loved by everyone',
        href: '/collections',
    },
    {
        title: 'Tyohaar',
        subtitle: 'Celebrating the art of being you',
        href: '/indo-western',
        image: '/images/indoWester_cover.png',
    },
    {
        title: 'Western Wear',
        subtitle: 'Everyday elegance, effortlessly styled',
        href: '/western',
    },
    {
        title: 'Shaadi Ki Tyaari Hogyi',
        subtitle: 'Your whole wedding wardrobe, sorted',
        href: '/collections/shaadi-ki-tyaari-hogyi',
    },
    {
        title: 'Why Should Girls Have All The Fun',
        subtitle: 'Our menswear edit has arrived',
        href: '/collections/tyohaar',
    },
]

const HeroSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [isPlaying, setIsPlaying] = useState<boolean>(true)

    const nextSlide = useCallback(
        () => setCurrentSlide((prev) => (prev + 1) % slides.length),
        []
    )
    const prevSlide = () =>
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

    useEffect(() => {
        if (!isPlaying) return
        const timer = setTimeout(nextSlide, SLIDE_DURATION)
        return () => clearTimeout(timer)
    }, [currentSlide, isPlaying, nextSlide])

    return (
        <section className="relative h-[72vh] min-h-[480px] w-full overflow-hidden bg-primary-900 text-white sm:h-[82vh]">
            {slides.map((slide, i) => (
                <div
                    key={slide.title}
                    className={`absolute inset-0 transition-opacity duration-[1200ms] ${i === currentSlide ? 'opacity-100' : 'pointer-events-none opacity-0'
                        }`}
                >
                    {slide.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="h-full w-full object-cover object-top"
                        />
                    ) : (
                        <ImagePlaceholder
                        label={`${slide.title} — hero banner`}
                        align="top"
                        className="h-full w-full"
                    />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/85 via-primary-900/40 to-primary-900/25" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                        {i === currentSlide && (
                            <>
                                {/* <span className="animate-fadeUp text-[11px] font-medium uppercase tracking-[0.4em] text-white/70">
                                    Etheerrn Presents
                                </span> */}
                                <h1 className="animate-fadeUp [animation-delay:150ms] mt-4 max-w-4xl font-script text-5xl leading-[1.15] [text-shadow:0_2px_12px_rgba(0,0,0,0.25)] sm:text-7xl lg:text-8xl">
                                    {slide.title}
                                </h1>
                                <p className="animate-fadeUp [animation-delay:300ms] mt-5 max-w-xl text-[11px] font-medium uppercase tracking-[0.3em] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] sm:text-sm">
                                    {slide.subtitle}
                                </p>
                                <Link
                                    href={slide.href}
                                    className="animate-fadeUp [animation-delay:450ms] group mt-9 inline-flex items-center gap-3 border border-white/70 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 hover:bg-white hover:text-primary-800"
                                >
                                    Explore
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            ))}

            {/* Controls */}
            <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-5">
                <button
                    onClick={prevSlide}
                    className="text-white/70 transition-colors hover:text-white"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex items-center gap-3">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.title}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`h-2.5 w-2.5 rounded-full border border-white transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-transparent hover:bg-white/50'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="text-white/70 transition-colors hover:text-white"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-5 w-5" />
                </button>

                <span className="h-4 w-px bg-white/30" />

                <button
                    onClick={() => setIsPlaying((p) => !p)}
                    className="text-white/70 transition-colors hover:text-white"
                    aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
            </div>
        </section>
    )
}

export default HeroSlider
