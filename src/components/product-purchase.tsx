'use client'

import { useState } from 'react'
import { Minus, Plus, ShoppingBag } from 'lucide-react'

const ProductPurchase: React.FC<{ sizes: string[] }> = ({ sizes }) => {
    const [size, setSize] = useState(sizes[0])
    const [qty, setQty] = useState(1)

    return (
        <div className="mt-8 space-y-6">
            <div>
                <label className="block text-[11px] uppercase tracking-[0.25em] text-primary-400">
                    Size
                </label>
                <div className="mt-3 flex flex-wrap gap-2">
                    {sizes.map((s) => (
                        <button
                            key={s}
                            onClick={() => setSize(s)}
                            className={`min-w-[52px] border px-4 py-2.5 text-xs uppercase tracking-[0.15em] transition-colors ${size === s
                                ? 'border-primary-800 bg-primary-800 text-white'
                                : 'border-primary-200 text-primary-800 hover:border-primary-800'
                                }`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-[11px] uppercase tracking-[0.25em] text-primary-400">
                    Quantity
                </label>
                <div className="mt-3 inline-flex items-center border border-primary-200">
                    <button
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        className="p-3 text-primary-800 transition-colors hover:bg-primary-50"
                        aria-label="Decrease quantity"
                    >
                        <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-12 text-center text-sm text-primary-900">{qty}</span>
                    <button
                        onClick={() => setQty((q) => q + 1)}
                        className="p-3 text-primary-800 transition-colors hover:bg-primary-50"
                        aria-label="Increase quantity"
                    >
                        <Plus className="h-3.5 w-3.5" />
                    </button>
                </div>
            </div>

            {/* Add to cart only — no express checkout */}
            <button className="flex w-full items-center justify-center gap-3 bg-primary-800 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:bg-primary-900">
                <ShoppingBag className="h-4 w-4" />
                Add to cart
            </button>
        </div>
    )
}

export default ProductPurchase
