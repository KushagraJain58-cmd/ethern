'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ImagePlaceholder from '@/components/image-placeholder'
import type { ProductMedia } from '@/lib/products'

const ProductGallery: React.FC<{ media: ProductMedia[] }> = ({ media }) => {
    const [active, setActive] = useState(0)
    const step = (d: 1 | -1) =>
        setActive((prev) => (prev + d + media.length) % media.length)

    return (
        <div>
            <div className="relative">
                {/* IMAGE / VIDEO PLACEHOLDER — replace with the real asset */}
                <ImagePlaceholder
                    kind={media[active].kind}
                    src={media[active].src}
                    label={media[active].label}
                    ratio="3/4"
                    className="w-full"
                />
            </div>

            <div className="mt-3 flex items-center gap-3">
                <button
                    onClick={() => step(-1)}
                    className="shrink-0 p-1.5 text-primary-700 transition-colors hover:text-primary-900"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>

                <div className="hide-scrollbar flex flex-1 gap-3 overflow-x-auto">
                    {media.map((item, i) => (
                        <button
                            key={item.label}
                            onClick={() => setActive(i)}
                            className={`w-20 shrink-0 border-2 transition-colors ${i === active ? 'border-primary-800' : 'border-transparent'
                                }`}
                            aria-label={`Show ${item.label}`}
                        >
                            <ImagePlaceholder
                                kind={item.kind}
                                src={item.src}
                                label={item.kind === 'video' ? '' : String(i + 1)}
                                ratio="3/4"
                                className="w-full"
                            />
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => step(1)}
                    className="shrink-0 p-1.5 text-primary-700 transition-colors hover:text-primary-900"
                    aria-label="Next image"
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    )
}

export default ProductGallery
