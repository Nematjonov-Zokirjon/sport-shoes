import { ProductCard } from "./ProductCard"
import { products } from "./Product"
import { useState } from "react"

const HomepageHero = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "running" | "training" | "casual" | "football">("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(product => product.category === selectedCategory);

  return (
    <main className="min-h-screen py-0 px-0 lg:px-4 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold uppercase tracking-tight text-gray-900">
            Premium Sports Shoes
          </h1>
          <p className="text-gray-600">Discover our collection of high-performance footwear</p>
        </div>

      {/* Category Filter Buttons */}
<div className="flex justify-center gap-4 mb-6 flex-wrap sm:flex-nowrap overflow-x-auto px-2">
  {["all", "running", "training", "casual", "football"].map(cat => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat as any)}
      className={`shrink-0 px-4 py-2 rounded-full font-semibold whitespace-nowrap ${
        selectedCategory === cat ? "bg-[#1F7A4D] text-white" : "bg-gray-200 text-gray-800"
      }`}
    >
      {cat.toUpperCase()}
    </button>
  ))}
</div>


        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default HomepageHero
