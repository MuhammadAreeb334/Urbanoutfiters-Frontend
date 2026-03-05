import { ChevronLeft, ChevronRight } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-[#A7DEFA] py-2 px-8 md:px-12 relative flex items-center justify-center min-h-[50px]">
      <button className="absolute left-1 md:left-4 hover:opacity-60 transition-opacity">
        <ChevronLeft size={20} md:size={24} strokeWidth={1.5} />
      </button>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-6 text-center">
        <span className="text-gray-900 text-[13px] font-semibold leading-tight md:max-w-none">
          Yes, these are worth the hype. Shop our best-selling styles and see
          for yourself...
        </span>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] md:text-[11px] font-normal">
          <a
            href="#"
            className="underline decoration-1 underline-offset-4 hover:no-underline whitespace-nowrap"
          >
            SHOP WOMEN'S
          </a>
          <a
            href="#"
            className="underline decoration-1 underline-offset-4 hover:no-underline whitespace-nowrap"
          >
            SHOP MEN'S
          </a>
          <a
            href="#"
            className="underline decoration-1 underline-offset-4 hover:no-underline whitespace-nowrap"
          >
            SHOP HOME
          </a>
        </div>
      </div>

      <button className="absolute right-1 md:right-4 hover:opacity-60 transition-opacity">
        <ChevronRight size={20} md:size={24} strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default AnnouncementBar;
