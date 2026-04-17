import React, { useEffect, useState } from "react";
import { Heart, Star, ChevronDown, Plus, Minus } from "lucide-react";
import ShippingContent from "../components/layout/ShippingContent";
import SizeAndFitContent from "../components/layout/SizeAndFitContent";
import ReviewsSection from "../components/layout/ReviewsSection";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { products } from "../data/products.js";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [openSection, setOpenSection] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { addToCart } = useCart();
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  const currentColor = product.colors.find((c) => c.name === selectedColor);

  const images = [currentColor?.main, currentColor?.hover];

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize, 1);
    toast.success(`${product.title} added to bag!`);
  };

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]?.name);
    }
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      title: "Details",
      content: <p className="text-gray-600">- Premium ribbed knit texture</p>,
    },
    {
      title: "Size + Fit",
      content: <SizeAndFitContent />,
    },
    {
      title: "Shipping + Returns",
      content: <ShippingContent />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
      <div className="flex justify-center text-xs uppercase tracking-widest text-gray-700 mb-4">
        <span>{product?.category}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3 grid grid-cols-2 gap-2">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/5] bg-gray-100 overflow-hidden"
            >
              {/* {idx === 0 && (
                <div className="absolute top-4 right-4 z-10 bg-white text-gray-500 px-2 py-1 rounded-full flex items-center gap-1 text-[12px] font-normal">
                  59 <Heart size={14} />
                </div>
              )} */}
              <img
                src={img}
                alt={product?.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="lg:w-1/3 space-y-3">
          <header>
            <h1 className="text-2xl font-normal text-gray-900">
              {product?.title}
            </h1>
            <button className="text-xs underline text-gray-600 mt-1 cursor-pointer">
              See all {product?.brand}
            </button>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-gray-300">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < (product?.rating || 0)
                        ? "fill-black text-black"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <button className="text-xs underline text-gray-500 cursor-pointer">
                Write a Review
              </button>
            </div>
          </header>

          <div className="space-y-1">
            <p className="text-2xl font-normal text-gray-900">
              ${product?.salePrice}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wide">
              Color:{" "}
              <span className="font-normal text-gray-500">{selectedColor}</span>
            </p>
            <div className="flex gap-3">
              {product?.colors.map((color) => (
                <button
                  key={color?.name}
                  onClick={() => setSelectedColor(color?.name)}
                  className={`w-8 h-8 rounded-full border-2 p-0.5 transition-all ${selectedColor === color?.name ? "border-gray-900" : "border-transparent"}`}
                >
                  <div
                    className="w-full h-full rounded-full border border-gray-200"
                    style={{ backgroundColor: color?.hex }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="">
              <p className="text-xs font-bold uppercase tracking-wide">Size*</p>
            </div>
            <div className="flex items-center gap-2">
              {product?.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`p-3 border text-xs transition-colors cursor-pointer ${selectedSize === size ? "border-gray-900 bg-gray-50" : "border-gray-200 text-gray-500"} hover:bg-gray-50`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="space-y-3 py-3">
              <p className="text-xs text-blue-500">
                We've updated our sizing. See Size Guide for more.
              </p>
              <button className="text-xs underline text-gray-500">
                Size Guide
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#1A1A1A] text-white py-4 font-bold text-sm uppercase tracking-widest hover:bg-[#1A1A1A]/80 transition-colors"
            >
              Get It Before It's Gone
            </button>

            <button className="text-xs underline text-gray-600 cursor-pointer hover:no-underline">
              Add to Wish List
            </button>
          </div>

          <div className="w-full max-w-md border-t border-gray-200 mt-8">
            {sections.map((section) => (
              <div key={section?.title} className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection(section?.title)}
                  className="w-full py-5 flex justify-between items-center text-left transition-colors hover:text-gray-600"
                >
                  <span className="text-xs font-normal uppercase tracking-widest text-gray-800">
                    {section?.title}
                  </span>
                  {openSection === section?.title ? (
                    <Minus size={16} className="text-gray-400" />
                  ) : (
                    <Plus size={16} className="text-gray-400" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openSection === section?.title ? "pb-6" : "max-h-0"
                  }`}
                >
                  <div className="text-xs leading-relaxed text-gray-600">
                    {section?.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ReviewsSection />
    </div>
  );
};

export default ProductDetail;
