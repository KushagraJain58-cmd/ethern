'use client'

import { useEffect, useRef, useState } from 'react'

export function useInView<T extends HTMLElement>(threshold = 0.15) {
    const ref = useRef<T>(null)
    const [inView, setInView] = useState<boolean>(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { threshold, rootMargin: '0px 0px -8% 0px' }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [threshold])

    return { ref, inView }
}

interface RevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    variant?: 'up' | 'left' | 'right' | 'zoom' | 'clip'
}

const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0, variant = 'up' }) => {
    const { ref, inView } = useInView<HTMLDivElement>()

    return (
        <div
            ref={ref}
            className={`reveal reveal-${variant} ${inView ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}

export default Reveal
