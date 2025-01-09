"use client";
import { navbarData, copyRightIcon } from "@/assets/index";

const Navbar = ({ id }) => {
  // Filter out Pricing and FAQ items
  const filteredNavData = navbarData.filter(
    item => item.id !== 'pricing' && item.id !== 'questions'
  );

  return (
    <div className="w-[70px] md:w-[80px] fixed left-0 top-0 h-full flex flex-col justify-between border-r border-gray-200 px-2 sm:px-4 py-6 sm:py-10 z-50 bg-white dark:bg-zinc-900">
      
      {/* Logo */}
      <a href="#home" className="text-center hidden sm:block">
        <span className="text-2xl sm:text-3xl font-semibold text-red-600">ED</span>
        <span className="block w-min rotate-90 origin-bottom text-[10px] sm:text-[12px] font-semibold dark:text-white">Bonilla</span>
      </a>
      
      {/* Mobile Logo */}
      <a href="#home" className="text-center sm:hidden">
        <span className="text-xl font-semibold text-red-600">ED</span>
      </a>
      
      {/* Navigation Links */}
      <div className="flex flex-col gap-y-2 sm:gap-y-3">
        {filteredNavData.map((item, index) => (
          <a 
            href={`#${item.id}`} 
            key={index} 
            className="group flex flex-col items-center gap-y-1 sm:gap-y-2"
          >
            <span 
              className={`text-xl sm:text-2xl group-hover:scale-115 transition-all ${
                item.id === id 
                  ? "text-red-500 scale-105" 
                  : "text-yellow-600 scale-100"
              }`}
            >
              {item.icon}
            </span>
            <span className={`text-[8px] sm:text-[10px] tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 text-center dark:text-white`}>
              {item.name}
            </span>
          </a>
        ))}
      </div>
      
      {/* Footer */}
      <p className="hidden sm:flex items-center justify-center text-[11px] sm:text-[13px] text-gray-500">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider dark:text-gray-200">
          {copyRightIcon} 2019 - {new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
};

export default Navbar;