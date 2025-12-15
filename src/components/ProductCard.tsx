import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

interface ProductCardProps {
  image: string;
  title: string;
  price?: string;
  badge?: string;
  badgeType?: "new" | "sale";
  info?: string;
  category?: "running" | "training" | "casual" | "football";
}

export function ProductCard({
  image,
  title,
  price,
  badge,
  badgeType,
  info,
  category,
}: ProductCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md min-h-[250px]">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-t-2xl bg-gray-50 p-2 lg:p-6">
        {badge && (
          <div
            className={cn(
              "absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase text-white",
              badgeType === "new" && "bg-[#1F7A4D]",
              badgeType === "sale" && "bg-red-600",
              !badgeType && "bg-gray-800"
            )}
          >
            {badge}
          </div>
        )}
        <Link to={"/product"}>
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-contain"
          />
        </Link>
      </div>

      {/* Content Container */}
      <div className="flex flex-col lg:gap-4 p-2 lg:p-6">
        
        {/* Product Title */}
        <h3 className="text-xs md:text-[18px] text-start font-bold uppercase leading-tight text-gray-900">
          {title}
        </h3>
        {info && <p className="text-xs text-start text-gray-600">{info}</p>}

        {/* View Product Button */}
        <div className="flex justify-between">

          <span className="text-start text-[#1F7A4D] font-bold">${price}</span>

          {category && (
            <span className="px-2 py-1 text-[10px] md:text-xs font-semibold   text-gray-800 uppercase">
              {category}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
