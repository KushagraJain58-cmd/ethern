'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Heart, Menu, Search, User, X } from 'lucide-react'
import { navItems } from '@/lib/nav'

interface NavbarProps {
    likedItems: number
    onWishlistClick: () => void
}

const Navbar: React.FC<NavbarProps> = ({ likedItems, onWishlistClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [openGroup, setOpenGroup] = useState<string | null>(null)

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    }, [isMenuOpen])

    return (
        <>
            {/* Announcement strip */}
            {/* <div className="bg-primary-800 text-center text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white py-2.5 px-4">
                Get 10% off on your first purchase | Use <span className="font-semibold">FIRST10</span>
            </div> */}

            <header className="sticky top-0 z-50 bg-white border-b border-primary-100 shadow-[0_2px_20px_rgba(90,38,98,0.06)]">
                {/* Top row: search · logo · actions */}
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <button
                        className="p-2 text-primary-800 transition-colors hover:text-primary-600"
                        aria-label="Search"
                    >
                        <Search className="h-5 w-5" />
                    </button>

                    <Link
                        href="/"
                        className="absolute left-1/2 -translate-x-1/2"
                        aria-label="Etheerrn — home"
                    >
                        <Image
                            src="/logo-ethern.png"
                            alt="Etheerrn by Nikhita Jain"
                            width={839}
                            height={323}
                            priority
                            className="h-12 w-auto sm:h-14"
                        />
                    </Link>

                    <div className="flex items-center gap-1">
                        <Link
                            href="/contact"
                            className="p-2 text-primary-800 transition-colors hover:text-primary-600"
                            aria-label="Account"
                        >
                            <User className="h-5 w-5" />
                        </Link>

                        <button
                            onClick={onWishlistClick}
                            className="relative p-2 text-primary-800 transition-colors hover:text-primary-600"
                            aria-label="Open wishlist"
                        >
                            <Heart className="h-5 w-5" />
                            {likedItems > 0 && (
                                <span
                                    key={likedItems}
                                    className="animate-pop absolute -top-0.5 -right-0.5 flex h-4.5 w-4.5 min-w-[18px] items-center justify-center rounded-full bg-primary-800 px-1 text-[10px] font-semibold text-white"
                                >
                                    {likedItems}
                                </span>
                            )}
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="p-2 text-primary-800 xl:hidden"
                            aria-label="Open menu"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Bottom row: nav links with hover dropdowns */}
                <nav className="hidden xl:block border-t border-primary-100/70">
                    <ul className="mx-auto flex max-w-7xl items-center justify-center gap-7 px-4 sm:px-6 lg:px-8">
                        {navItems.map((item) => (
                            <li
                                key={item.name}
                                className="group relative"
                                onMouseEnter={() => setOpenGroup(item.name)}
                                onMouseLeave={() => setOpenGroup(null)}
                            >
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-1 py-4 text-[12.5px] font-medium uppercase tracking-[0.08em] text-primary-900/80 transition-colors hover:text-primary-800"
                                >
                                    {item.name}
                                    {item.children && (
                                        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                                    )}
                                </Link>
                                <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-primary-800 transition-transform duration-300 group-hover:scale-x-100" />

                                {item.children && (
                                    <div
                                        className={`absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 border border-primary-100 bg-white p-2 shadow-[0_18px_40px_rgba(90,38,98,0.12)] transition-all duration-200 ${openGroup === item.name
                                            ? 'visible translate-y-0 opacity-100'
                                            : 'invisible -translate-y-2 opacity-0'
                                            }`}
                                    >
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="block px-4 py-2.5 text-sm text-primary-900/75 transition-colors hover:bg-primary-50 hover:text-primary-800"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {/* Mobile drawer */}
            <div
                className={`fixed inset-0 z-[60] xl:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                    }`}
            >
                <div className="absolute inset-0 bg-primary-900/50" onClick={() => setIsMenuOpen(false)} />
                <div
                    className={`absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto bg-white transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex items-center justify-between border-b border-primary-100 px-5 py-4">
                        <Image src="/logo-ethern.png" alt="Etheerrn" width={839} height={323} className="h-9 w-auto" />
                        <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                            <X className="h-6 w-6 text-primary-800" />
                        </button>
                    </div>

                    <ul className="px-2 py-3">
                        {navItems.map((item) => (
                            <li key={item.name} className="border-b border-primary-50">
                                <div className="flex items-center justify-between">
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex-1 px-3 py-3.5 text-sm uppercase tracking-wide text-primary-900"
                                    >
                                        {item.name}
                                    </Link>
                                    {item.children && (
                                        <button
                                            onClick={() =>
                                                setOpenGroup(openGroup === item.name ? null : item.name)
                                            }
                                            className="px-3 py-3.5 text-primary-800"
                                            aria-label={`Toggle ${item.name}`}
                                        >
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform ${openGroup === item.name ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                    )}
                                </div>
                                {item.children && openGroup === item.name && (
                                    <div className="pb-2">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block px-6 py-2.5 text-sm text-primary-900/70"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
