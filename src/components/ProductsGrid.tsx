// import { Product } from "./Product";
// import { ProductCard } from "../components/ProductCard";

// interface ProductsGridProps {
//   selectedCategory: "all" | "running" | "training" | "casual" | "football";
// }

// export function ProductsGrid({ selectedCategory }: ProductsGridProps) {
//   const filteredProducts = selectedCategory === "all"
//     ? Product
//     : Product.filter(p => p.category === selectedCategory);

//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//       {filteredProducts.map(products => (
//         <ProductCard key={products.title} {...products} />
//       ))}
//     </div>
//   );
// }
