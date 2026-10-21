'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import ImagePlaceholder from '@/components/image-placeholder'
import Reveal from '@/components/reveal'
import SectionHeading from '@/components/section-heading'
import { FlowerMark } from '@/components/flower'

interface Review {
    id: number
    name: string
    rating: number
    review: string
}

const REVIEW_DURATION = 5000

const reviews: Review[] = [
    {
        id: 1,
        name: 'Natasha Goswami',
        rating: 5,
        review: 'The fit is perfect. The fabric is light and soft — you barely feel you are wearing it, and the look is wonderful.',
    },
    {
        id: 2,
        name: 'Bhumika Tiwari',
        rating: 5,
        review: 'One of my best decisions. Just go for it, absolutely worth buying.',
    },
    {
        id: 3,
        name: 'Bhargavi',
        rating: 5,
        review: 'This lehenga is perfect for a wedding or a pooja — the handwork is beautiful up close.',
    },
    {
        id: 4,
        name: 'Adrija Saha',
        rating: 5,
        review: 'Super comfortable, lovely colour and the fabric breathes so well. Do not think twice.',
    },
    {
        id: 5,
        name: 'Nikki Kala',
        rating: 5,
        review: 'Material quality was excellent and the colour is even better in person.',
    },
]

const CustomerReviews: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [isPaused, setIsPaused] = useState<boolean>(false)

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % reviews.length)
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)

    useEffect(() => {
        if (isPaused) return
        const timer = setTimeout(nextSlide, REVIEW_DURATION)
        return () => clearTimeout(timer)
    }, [currentIndex, isPaused])

    const review = reviews[currentIndex]

    return (
        <section className="relative overflow-hidden bg-primary-50/60 py-20 md:py-24">
            <FlowerMark className="-left-20 bottom-4 h-72 w-72" opacity={0.06} />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Testimonials" title="Customer Reviews" />

                <Reveal delay={150}>
                    <div
                        className="relative mx-auto mt-14 max-w-4xl border border-primary-100 bg-white p-8 md:p-14"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <span className="absolute -top-6 left-10 flex h-12 w-12 items-center justify-center bg-primary-800">
                            <Quote className="h-5 w-5 fill-white text-white" />
                        </span>

                        <div className="grid items-center gap-10 md:grid-cols-[auto,1fr]">
                            {/* IMAGE PLACEHOLDER — customer photo */}
                            <ImagePlaceholder
                                key={`img-${currentIndex}`}
                                label={review.name}
                                className="mx-auto h-32 w-32 animate-fadeUp md:h-40 md:w-40"
                            />

                            <div>
                                <div key={`stars-${currentIndex}`} className="mb-5 flex gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 animate-fadeUp fill-primary-600 text-primary-600"
                                            style={{ animationDelay: `${i * 80}ms` }}
                                        />
                                    ))}
                                </div>
                                <p
                                    key={`text-${currentIndex}`}
                                    className="min-h-[6rem] animate-fadeUp text-lg font-light leading-relaxed text-primary-900/80 [animation-delay:150ms] md:text-2xl"
                                >
                                    &ldquo;{review.review}&rdquo;
                                </p>
                                <p
                                    key={`name-${currentIndex}`}
                                    className="mt-6 animate-fadeUp text-xs uppercase tracking-[0.25em] text-primary-800 [animation-delay:300ms]"
                                >
                                    {review.name}
                                    <span className="ml-3 text-[11px] normal-case tracking-normal text-primary-900/45">
                                        Verified buyer
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="mt-10 flex items-center justify-between gap-6 border-t border-primary-100 pt-8">
                            <div className="flex gap-2">
                                {reviews.map((r, index) => (
                                    <button
                                        key={r.id}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`h-2 w-2 rounded-full border border-primary-800 transition-all duration-300 ${index === currentIndex
                                            ? 'bg-primary-800'
                                            : 'bg-transparent hover:bg-primary-200'
                                            }`}
                                        aria-label={`Show review from ${r.name}`}
                                    />
                                ))}
                            </div>

                            <div className="hidden flex-1 sm:block">
                                <div className="h-px overflow-hidden bg-primary-100">
                                    <div
                                        key={currentIndex}
                                        className="h-full origin-left animate-progress bg-primary-800"
                                        style={{
                                            animationDuration: `${REVIEW_DURATION}ms`,
                                            animationPlayState: isPaused ? 'paused' : 'running',
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={prevSlide}
                                    className="border border-primary-200 p-3 text-primary-800 transition-colors duration-300 hover:bg-primary-800 hover:text-white"
                                    aria-label="Previous review"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="border border-primary-200 p-3 text-primary-800 transition-colors duration-300 hover:bg-primary-800 hover:text-white"
                                    aria-label="Next review"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default CustomerReviews
