'use client'

import { useInView } from '@/components/reveal'
import { FlowerMark } from '@/components/flower'

const categories = [
    'Indo Western',
    'Farshi Sets',
    'Lehengas',
    'Fusion Wear',
    'Coords',
    'Dresses',
    'Custom Orders',
    'Tyohaar Collection',
]

const Tagline: React.FC = () => {
    const { ref, inView } = useInView<HTMLDivElement>(0.3)
    const lineOne = 'Dressing you for every hour'.split(' ')
    const lineTwo = 'TIMELESS OUTFITS THAT YOU WILL HAPPILY REPEAT'.split(' ')

    return (
        <section className="relative overflow-hidden bg-white">
            {/* Marquee band */}
            <div className="bg-primary-800 py-3.5">
                <div className="marquee-mask flex overflow-hidden">
                    <div className="flex w-max animate-marquee items-center">
                        {[...categories, ...categories, ...categories].map((item, i) => (
                            <span
                                key={i}
                                className="flex items-center gap-8 pr-8 text-[11px] font-medium uppercase tracking-[0.35em] text-white/90"
                            >
                                {item}
                                <span className="h-1 w-1 rounded-full bg-white/50" />
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative overflow-hidden bg-primary-50/50 py-20 md:py-28">
                <FlowerMark className="left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2" opacity={0.14} />

                <div ref={ref} className="relative mx-auto max-w-5xl px-4 text-center">
                    <p
                        className={`mb-8 text-[11px] font-medium uppercase tracking-[0.4em] text-primary-400 transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                    >
                        The Etheerrn Philosophy
                    </p>

                    <h2 className="text-3xl leading-tight text-primary-800 sm:text-5xl md:text-6xl">
                        {lineOne.map((word, i) => (
                            <span key={`a-${i}`} className="mr-3 inline-block overflow-hidden px-2 pb-3 pt-2 align-bottom font-script text-[1.3em] leading-[1.3] md:mr-4">
                                <span
                                    className={`inline-block transition-transform duration-1000 ease-[cubic-bezier(.2,.8,.2,1)] ${inView ? 'translate-y-0' : 'translate-y-full'
                                        }`}
                                    style={{ transitionDelay: `${i * 90}ms` }}
                                >
                                    {word}
                                </span>
                            </span>
                        ))}
                        <br />
                        <span className="inline-block whitespace-nowrap align-bottom">
                            <span
                                className={`inline-block text-[3.4vw] font-light leading-tight text-primary-800 lg:text-4xl transition-all duration-1000 ease-[cubic-bezier(.2,.8,.2,1)] ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${lineOne.length * 90}ms` }}
                            >
                                {lineTwo.join(' ')}
                            </span>
                        </span>
                    </h2>

                    <div
                        className={`mx-auto mt-10 h-px w-24 origin-center bg-primary-300 transition-transform delay-700 duration-1000 ${inView ? 'scale-x-100' : 'scale-x-0'
                            }`}
                    />
                </div>
            </div>
        </section>
    )
}

export default Tagline
