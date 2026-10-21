'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WishlistModal from '@/components/wishlistModel'
import type { Product } from '@/app/page'

/** Shared chrome (navbar + footer + wishlist) for every inner page. */
const SiteLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [likedProducts, setLikedProducts] = useState<Product[]>([])
	const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false)

	return (
		<div className="min-h-screen bg-white overflow-x-hidden">
			<Navbar
				likedItems={likedProducts.length}
				onWishlistClick={() => setIsWishlistOpen(!isWishlistOpen)}
			/>
			{children}
			<Footer />
			<WishlistModal
				isOpen={isWishlistOpen}
				onClose={() => setIsWishlistOpen(false)}
				likedProducts={likedProducts}
				onRemoveFromWishlist={(id) =>
					setLikedProducts((prev) => prev.filter((p) => p.id !== id))
				}
			/>
		</div>
	)
}

export default SiteLayout
