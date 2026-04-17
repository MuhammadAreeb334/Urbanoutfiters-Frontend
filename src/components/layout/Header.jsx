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
  Menu,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { categoryNames } from "../../data/categoryNames";

const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {isSearchFocused && (
        <div
          className="fixed inset-0 bg-white/60 z-20 transition-all duration-300"
          onClick={() => setIsSearchFocused(false)}
        />
      )}

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header className="w-full lg:bg-white lg:sticky lg:top-0 z-30">
        <div className=" hidden lg:flex justify-between items-center px-14 py-2 bg-[#F5F5F5]">
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
            <Link to="/login" className="flex items-center gap-1">
              <User size={18} />{" "}
              <span className="hover:text-gray-400">Sign In / Sign Up</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 py-2 lg:px-16">
          <Link
            to="/"
            className="text-3xl font-bold tracking-tighter uppercase leading-none mb-3"
          >
            Urban Outfitters
          </Link>
          <div className="flex items-center gap-3 md:gap-6 flex-1 w-full justify-end">
            <div
              className={`relative flex transition-all duration-500 ease-in-out z-50 flex-1 lg:max-w-sm`}
            >
              <input
                type="text"
                placeholder="What are you looking for?"
                onFocus={() => setIsSearchFocused(true)}
                className={`w-full border py-2 px-4 text-sm transition-all duration-200 focus:outline-none 
                  ${isSearchFocused ? "border-black border-r-0" : "border-gray-500 pr-10"}`}
              />
              {!isSearchFocused ? (
                <Search
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                  strokeWidth={1}
                />
              ) : (
                <button className="bg-[#222] text-white px-4 flex items-center justify-center border border-black shrink-0">
                  <Search size={20} strokeWidth={1} />
                </button>
              )}

              {isSearchFocused && (
                <div className="absolute top-[100%] left-0 w-full bg-white border border-t-0 border-gray-400 p-6 z-50 shadow-xl">
                  <div className="flex justify-between mb-2">
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

            <div className="flex items-center gap-4 shrink-0">
              <Link to="/wishlist">
                <Heart size={20} strokeWidth={1.5} />
              </Link>
              <Link to="/cart">
                <ShoppingBag size={20} strokeWidth={1.5} />
              </Link>
              <button
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        <nav className="hidden lg:block px-8 py-5 border-y border-gray-200">
          <ul className="flex items-center gap-8 text-[13px] text-gray-900 font-normal no-scrollbar whitespace-nowrap">
            {categoryNames.map((cat) => (
              <li key={cat.slug}>
                <NavLink
                  to={`/categories/${cat.slug}`}
                  className={({ isActive }) =>
                    `hover:border-b hover:border-gray-800 hover:text-gray-600 pb-5 transition-all ${isActive ? "border-b border-gray-800" : ""}`
                  }
                >
                  {cat.name}
                </NavLink>
              </li>
            ))}

            {/*  */}
          </ul>
        </nav>

        <div
          className={`fixed top-0 right-0 h-full w-[85%] max-w-[340px] z-[60] transition-transform duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className={`absolute top-4 -left-12 text-white transition-opacity duration-300 border rounded-full ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <X size={34} strokeWidth={1} />
          </button>

          <div className="h-full w-full bg-white shadow-xl flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center justify-between p-4 bg-[#F7F7F7] border-b border-gray-200">
              <div className="flex items-center gap-2 text-[14px] font-normal">
                <User size={18} strokeWidth={1} /> Sign In / Sign Up
              </div>
            </div>

            <div className="flex-1 pb-20">
              <ul className="divide-y divide-gray-100">
                {categoryNames.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      to={`/categories/${cat.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex justify-between items-center px-6 py-4 text-[15px] font-normal text-gray-900"
                    >
                      {cat.name}
                      <ChevronRight size={18} className="text-gray-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
