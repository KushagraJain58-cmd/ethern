'use client'

import { useEffect } from 'react'
import { X, Heart, ShoppingBag } from 'lucide-react'
import { Product } from '@/app/page'
import ImagePlaceholder from '@/components/image-placeholder'

interface WishlistModalProps {
    isOpen: boolean
    onClose: () => void
    likedProducts: Product[]
    onRemoveFromWishlist: (productId: number) => void
}

const WishlistModal: React.FC<WishlistModalProps> = ({
    isOpen,
    onClose,
    likedProducts,
    onRemoveFromWishlist
}) => {
    // Close drawer on escape key press
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose])

    return (
        <div className={`fixed inset-0 z-[60] ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-primary-900/50 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                onClick={onClose}
            />

            {/* Drawer */}
            <aside
                className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                role="dialog"
                aria-label="Wishlist"
            >
                {/* Header */}
                <div className="relative overflow-hidden bg-primary-800 px-6 py-6 text-white">
                                        <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Heart className="h-6 w-6 fill-current" />
                            <h2 className="text-lg font-light uppercase tracking-[0.2em]">
                                My Wishlist ({likedProducts.length})
                            </h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 transition-all duration-300 hover:rotate-90 hover:bg-white/15"
                            aria-label="Close wishlist"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div key={String(isOpen)} className="flex-1 overflow-y-auto p-6">
                    {likedProducts.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center text-center animate-fadeUp">
                            <div className="mb-6 flex h-20 w-20 items-center justify-center bg-primary-50">
                                <Heart className="h-10 w-10 text-primary-300" />
                            </div>
                            <h3 className="mb-2 text-sm uppercase tracking-[0.2em] text-primary-800">Your wishlist is empty</h3>
                            <p className="mb-8 text-sm text-primary-900/55">Start adding pieces you love to see them here</p>
                            <button onClick={onClose} className="btn-primary">
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <ul className="space-y-4">
                            {likedProducts.map((product, index) => (
                                <li
                                    key={product.id}
                                    className="group flex animate-fadeUp gap-4 border border-primary-100 p-3 transition-colors duration-300 hover:border-primary-300"
                                    style={{ animationDelay: `${index * 80 + 150}ms` }}
                                >
                                    <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden">
                                        {/* IMAGE PLACEHOLDER — replace with the product photo */}
                                        <ImagePlaceholder
                                            label={product.name}
                                            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {product.isSale && (
                                            <span className="absolute bottom-0 left-0 bg-primary-800 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.15em] text-white">
                                                Sale
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex min-w-0 flex-1 flex-col">
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="min-w-0">
                                                <p className="text-[10px] uppercase tracking-[0.25em] text-primary-400">{product.category}</p>
                                                <h3 className="truncate text-sm uppercase tracking-[0.1em] text-primary-900">{product.name}</h3>
                                            </div>
                                            <button
                                                onClick={() => onRemoveFromWishlist(product.id)}
                                                className="p-1.5 text-primary-300 transition-all duration-300 hover:rotate-90 hover:text-primary-800"
                                                aria-label={`Remove ${product.name} from wishlist`}
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                        <div className="mt-1 flex items-baseline gap-2">
                                            <span className="text-sm text-primary-800">{product.price}</span>
                                            <span className="text-xs text-primary-900/40 line-through">{product.originalPrice}</span>
                                        </div>
                                        <button className="mt-auto flex items-center justify-center gap-2 bg-primary-800 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-primary-900">
                                            <ShoppingBag className="h-4 w-4" />
                                            Add to Cart
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Footer */}
                {likedProducts.length > 0 && (
                    <div className="flex items-center justify-between border-t border-primary-100 bg-primary-50/60 p-6">
                        <p className="text-sm text-primary-900/60">
                            {likedProducts.length} item{likedProducts.length !== 1 ? 's' : ''} saved
                        </p>
                        <button onClick={onClose} className="btn-primary !py-2">
                            Continue Shopping
                        </button>
                    </div>
                )}
            </aside>
        </div>
    )
}

export default WishlistModal
