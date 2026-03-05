import React from "react";

const QuickLinks = () => {
  const links = [
    "BEST SELLERS →",
    "TOP RATED →",
    "SPRING BREAK →",
    "BDG JEANS →",
  ];

  return (
    <div className="w-full p-8 hidden lg:block">
      <div className="grid grid-cols-4 gap-16">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="border border-gray-300 py-3 px-4 text-[11px] md:text-[13px] tracking-widest text-center flex items-center justify-center gap-2 hover:underline transition-colors uppercase"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
