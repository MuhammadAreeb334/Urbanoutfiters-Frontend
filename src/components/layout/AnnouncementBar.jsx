import { ChevronLeft, ChevronRight } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-[#82ABBC] py-2 px-4 relative flex items-center justify-center">
      <button className="absolute left-2 hover:opacity-60">
        <ChevronLeft size={24} strokeWidth={1} />
      </button>

      <div className="flex flex-col md:flex-row items-center px-6 gap-2 md:gap-8 font-medium tracking-tight">
        <span className="text-gray-900 text-[14px]">
          Yes, these are worth the hype. Shop our best-selling styles and see
          for yourself...
        </span>

        <div className="flex gap-3 text-[12px] font-normal">
          <a
            href="#"
            className="underline decoration-1 underline-offset-2 hover:no-underline"
          >
            SHOP WOMEN'S
          </a>
          <a
            href="#"
            className="underline decoration-1 underline-offset-2 hover:no-underline"
          >
            SHOP MEN'S
          </a>
          <a
            href="#"
            className="underline decoration-1 underline-offset-2 hover:no-underline"
          >
            SHOP HOME
          </a>
        </div>
      </div>

      <button className="absolute right-2 hover:opacity-60">
        <ChevronRight size={24} strokeWidth={1} />
      </button>
    </div>
  );
};
export default AnnouncementBar;
