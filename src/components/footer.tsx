'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, ArrowRight, Check } from 'lucide-react'
import Reveal from '@/components/reveal'
import { FlowerMark } from '@/components/flower'

const shopLinks = [
    { name: 'Indo Western', href: '/indo-western' },
    { name: 'Western', href: '/western' },
    { name: 'Custom Orders', href: '/custom-orders' },
    { name: 'Look Book', href: '/look-book' },
    { name: 'Shop By Collections', href: '/collections' },
]

const serviceLinks = [
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'How To Measure Yourself', href: '/how-to-measure' },
    { name: 'Tyohaar Collection', href: '/collections/tyohaar' },
    { name: 'Shaadi Ki Tyaari Hogyi', href: '/collections/shaadi-ki-tyaari-hogyi' },
]

const Footer: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [subscribed, setSubscribed] = useState<boolean>(false)

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setEmail('')
        setSubscribed(true)
    }

    const linkClass =
        'group inline-flex items-center text-sm text-white/65 transition-colors duration-300 hover:text-white'

    return (
        <footer className="relative overflow-hidden bg-primary-800 text-white">
            <FlowerMark className="-right-24 top-0 h-96 w-96 invert" opacity={0.07} />

            {/* Newsletter */}
            <div className="relative border-b border-white/15 py-16">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                    <Reveal variant="left">
                        <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-white/55">
                            Newsletter
                        </p>
                        <h3 className="mt-3 font-script text-4xl md:text-5xl">Stay Updated</h3>
                        <p className="mt-4 max-w-md text-sm text-white/70">
                            New collections, restocks and private previews — straight to your inbox.
                        </p>
                    </Reveal>

                    <Reveal variant="right" delay={150}>
                        {subscribed ? (
                            <div className="flex animate-fadeUp items-center gap-4 border border-white/25 px-6 py-4">
                                <span className="flex h-8 w-8 animate-pop items-center justify-center bg-white text-primary-800">
                                    <Check className="h-4 w-4" />
                                </span>
                                <span className="text-sm text-white/85">Thank you for subscribing.</span>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubscribe}
                                className="flex items-center border border-white/25 p-1 transition-colors duration-300 focus-within:border-white"
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm placeholder-white/50 focus:outline-none"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="group/btn inline-flex items-center gap-2 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-800 transition-colors duration-300 hover:bg-primary-50"
                                >
                                    Subscribe
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                </button>
                            </form>
                        )}
                    </Reveal>
                </div>
            </div>

            {/* Main */}
            <div className="relative py-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                        <Reveal>
                            <Image
                                src="/logo-ethern-light.png"
                                alt="Etheerrn by Nikhita Jain"
                                width={839}
                                height={323}
                                className="h-16 w-auto"
                            />
                            <p className="mt-6 text-sm leading-relaxed text-white/70">
                                Handcrafted indo-western and western clothing, cut and finished in our
                                own studio.
                            </p>
                            <div className="mt-6 flex gap-3">
                                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center border border-white/25 text-white/75 transition-colors duration-300 hover:bg-white hover:text-primary-800"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={100}>
                            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/90">
                                Shop
                            </h4>
                            <ul className="mt-6 space-y-3">
                                {shopLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className={linkClass}>
                                            <span className="mr-0 h-px w-0 bg-white transition-all duration-300 group-hover:mr-3 group-hover:w-5" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        <Reveal delay={200}>
                            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/90">
                                Customer Service
                            </h4>
                            <ul className="mt-6 space-y-3">
                                {serviceLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className={linkClass}>
                                            <span className="mr-0 h-px w-0 bg-white transition-all duration-300 group-hover:mr-3 group-hover:w-5" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        <Reveal delay={300}>
                            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/90">
                                Contact Info
                            </h4>
                            <div className="mt-6 space-y-4 text-sm text-white/70">
                                <div className="flex items-center">
                                    <Mail className="mr-3 h-4 w-4 text-white/50" />
                                    <span>hello@ethern.com</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="mr-3 h-4 w-4 text-white/50" />
                                    <span>+91 00000 00000</span>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="mr-3 mt-0.5 h-4 w-4 text-white/50" />
                                    <span>
                                        Add your studio address here,
                                        <br />
                                        India
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/15 py-6">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 sm:px-6 md:flex-row lg:px-8">
                    <p className="text-xs text-white/60">
                        © {new Date().getFullYear()} Etheerrn. All rights reserved.
                    </p>
                    <div className="mt-4 flex space-x-6 md:mt-0">
                        <Link href="/privacy" className="text-xs text-white/60 transition-colors hover:text-white">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-xs text-white/60 transition-colors hover:text-white">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
