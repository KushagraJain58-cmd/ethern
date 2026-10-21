'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import HeroSlider from '@/components/hero-slider'
import Tagline from '@/components/tagline'
import BestSellers from '@/components/best-sellers'
import HotPicks from '@/components/hot-picks'
import CustomerReviews from '@/components/customer-reviews'
import Services from '@/components/services'
import Footer from '@/components/footer'
import WishlistModal from '@/components/wishlistModel'

export interface Product {
  id: number
  slug: string
  name: string
  category: string
  price: string
  originalPrice: string
  image: string
  isLiked: boolean
  isSale: boolean
}

export default function Home() {
  const [likedProducts, setLikedProducts] = useState<Product[]>([])
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false)

  const handleLike = (product: Product) => {
    setLikedProducts(prev => {
      const isAlreadyLiked = prev.some(p => p.id === product.id)
      if (isAlreadyLiked) {
        return prev.filter(p => p.id !== product.id)
      } else {
        return [...prev, { ...product, isLiked: true }]
      }
    })
  }

  const handleRemoveFromWishlist = (productId: number) => {
    setLikedProducts(prev => prev.filter(p => p.id !== productId))
  }

  const handleWishlistToggle = () => {
    setIsWishlistOpen(!isWishlistOpen)
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar
        likedItems={likedProducts.length}
        onWishlistClick={handleWishlistToggle}
      />
      <HeroSlider />
      <Tagline />
      <HotPicks />
      <BestSellers
        onLike={handleLike}
        likedProducts={likedProducts}
      />
      <CustomerReviews />
      <Services />
      <Footer />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        likedProducts={likedProducts}
        onRemoveFromWishlist={handleRemoveFromWishlist}
      />
    </div>
  )
}
