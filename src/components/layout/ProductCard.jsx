import { Heart } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, showSwatches = true, showSale = true }) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || null,
  );
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="flex flex-col min-w-[250px] group">
      <div
        onClick={handleClick}
        className="relative overflow-hidden aspect-[3/4] bg-gray-100"
      >
        <img
          src={selectedColor?.main}
          alt={product.title}
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />

        <img
          src={selectedColor?.hover}
          alt={`${product.title} hover`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <button className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 hover:text-gray-400 transition-all duration-300 z-10">
          <Heart size={18} strokeWidth={1.2} />
        </button>

        <button className="absolute bottom-0 left-0 w-full bg-white py-3 text-[11px] font-normal tracking-[0.15em] uppercase opacity-0 translate-y-full group-hover:opacity-80 group-hover:translate-y-0 transition-all duration-300 z-10 text-gray-400 hover:text-gray-700">
          Quick Shop
        </button>
      </div>

      <div className="pt-3 pb-6">
        <h3 className="text-[13px] font-normal text-gray-900 leading-tight mb-1 hover:underline cursor-pointer">
          {product.title}
        </h3>

        <div className="flex gap-2 items-center mb-3">
          {showSale && product.salePrice ? (
            <>
              <span className="text-[13px] font-bold text-red-600">
                ${product.salePrice.toFixed(2)}
              </span>
              <span className="text-[13px] text-gray-400 line-through">
                ${product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <p className="text-[13px] text-gray-900">
              ${product.price.toFixed(2)}
            </p>
          )}
        </div>

        <div className="flex gap-2 flex-wrap">
          {showSwatches &&
            product.colors?.map((color, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedColor(color)}
                className={`w-5 h-5 rounded-full border border-gray-200 p-[2px] transition-all ${
                  selectedColor?.name === color.name
                    ? "ring-1 ring-black ring-offset-1"
                    : "hover:scale-110"
                }`}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ backgroundColor: color.hex }}
                />
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
