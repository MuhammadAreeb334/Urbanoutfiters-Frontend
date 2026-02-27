import {
  Search,
  Heart,
  ShoppingBag,
  User,
  MapPin,
  Gift,
  Star,
  MessageCircleMore,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const categories = [
    "New",
    "Women's",
    "Men's",
    "Shoes",
    "Accessories",
    "Home",
    "Music",
    "Beauty + Wellness",
    "Gifts",
    "Vintage + ReMade",
    "Brands",
  ];

  return (
    <>
      {isSearchFocused && (
        <div
          className="fixed inset-0 bg-white/60  z-40 transition-all duration-300"
          onClick={() => setIsSearchFocused(false)}
        />
      )}
      <header className="w-full bg-white">
        <div className="flex justify-between items-center px-14 py-2 bg-[#F5F5F5]">
          <div className="flex items-center gap-1 text-[13px] text-gray-500">
            <span>Free Shipping On Orders $50+</span>
            <button className="underline ml-1 cursor-pointer hover:no-underline">
              Details
            </button>
          </div>

          <div className="flex items-center gap-6 text-[14px] text-gray-700 font-normal">
            <div className="flex items-center gap-1 cursor-pointer">
              <MessageCircleMore size={18} />{" "}
              <span className="hover:text-gray-400">Sign Up For SMS</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <Gift size={18} />{" "}
              <span className="hover:text-gray-400">Gift Cards</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <Star size={18} />{" "}
              <span className="hover:text-gray-400">UO Rewards</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <MapPin size={18} />{" "}
              <span className="hover:text-gray-400">Stores</span>
            </div>
            <Link to="/account/login" className="flex items-center gap-1">
              <User size={18} />{" "}
              <span className="hover:text-gray-400">Sign In / Sign Up</span>
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center px-16 py-2">
          <Link
            to="/"
            className="text-3xl font-bold tracking-tighter uppercase leading-none"
          >
            Urban Outfitters
          </Link>
          <div className="flex items-center gap-6 flex-grow max-w-2xl justify-end">
            <div className="relative flex w-full max-w-md transition-all duration-300 z-50">
              <input
                type="text"
                placeholder="What are you looking for?"
                onFocus={() => setIsSearchFocused(true)}
                className={`w-full border py-2.5 px-4 text-sm transition-all duration-200 focus:outline-none 
                  ${
                    isSearchFocused
                      ? "border-black border-r-0"
                      : "border-gray-300 pr-10"
                  }`}
              />
              {!isSearchFocused ? (
                <Search
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                  strokeWidth={1}
                />
              ) : (
                <button className="bg-[#222] text-white px-4 flex items-center justify-center border border-black transition-colors">
                  <Search size={20} strokeWidth={1} />
                </button>
              )}

              {isSearchFocused && (
                <div className="absolute top-[100%] left-0 w-full bg-white border border-t-0 border-gray-400 p-6 z-50">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Recent Searches
                    </h3>
                    <button onClick={() => setIsSearchFocused(false)}>
                      <X size={14} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 italic">
                    No recent searches
                  </p>
                </div>
              )}
            </div>

            <Link to="/wishlist">
              <Heart size={24} strokeWidth={1.5} />
            </Link>
            <Link to="/cart">
              <ShoppingBag size={24} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <nav className="px-8 py-5 border border-gray-200">
          <ul className="flex items-center gap-8 text-[13px] text-gray-900 font-normal no-scrollbar whitespace-nowrap">
            {categories.map((cat) => (
              <li key={cat}>
                <NavLink
                  to={`/categories/${cat.toLowerCase()}`}
                  className={({ isActive }) =>
                    `hover:border-b hover:border-gray-800 hover:text-gray-600 pb-5 transition-all ${isActive ? "border-b border-gray-800" : ""}`
                  }
                >
                  {cat}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
