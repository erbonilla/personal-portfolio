"use client";
import { navbarData, copyRightIcon } from "@/assets/index";

const Navbar = ({ id }) => {
  const filteredNavData = navbarData.filter(
    item => item.id !== 'pricing' && item.id !== 'questions'
  );

  return (
    <div className="w-[70px] md:w-[80px] fixed left-0 top-0 h-screen flex flex-col justify-start border-r border-gray-200 px-2 sm:px-4 py-6 sm:py-10 z-50 bg-white dark:bg-zinc-900">
      
      {/* Logo Container */}
      <div className="relative mb-8">
        {/* Desktop Logo */}
        <a href="#home" className="text-center hidden sm:block">
          <span className="text-2xl sm:text-3xl font-semibold text-red-600">ED</span>
          <span className="absolute top-1/2 left-full transform -translate-y-1/2 -translate-x-1 text-[10px] sm:text-[12px] font-semibold whitespace-nowrap rotate-90 origin-left dark:text-white">
            Bonilla
          </span>
        </a>
        
        {/* Mobile Logo */}
        <a href="#home" className="text-center sm:hidden">
          <span className="text-xl font-semibold text-red-600">ED</span>
        </a>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex flex-col gap-y-4 sm:gap-y-6 mt-4">
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
      </nav>
      
      {/* Footer */}
      <div className="mt-auto">
        <p className="hidden sm:flex items-center justify-center text-[11px] sm:text-[13px] text-gray-500">
          <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider dark:text-gray-200">
            {copyRightIcon} 2019 - {new Date().getFullYear()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;