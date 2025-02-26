import React,{ useState } from "react";
import { Search, BarChart2, Sun, User } from "lucide-react";
import logo from '../../utility/logo.svg';
const Header = () => {
    return (
        // <nav className="flex items-center justify-between p-4 bg-gray-100">
        //     <div className="flex items-center">
        //         <img
        //             src={logo}
        //             alt="Logo"
        //             className="h-8"
        //         />
        //     </div>
        //     <div className="flex items-center space-x-4">
        //         <div className="relative">
        //             <input
        //                 type="text"
        //                 placeholder="Search..."
        //                 className="pl-10 pr-4 py-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
        //             />
        //             <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        //         </div>
        //         <button className="p-2 rounded-full bg-white border border-gray-300">
        //             <i className="fas fa-chart-bar text-gray-400"></i>
        //         </button>
        //         <button className="p-2 rounded-full bg-white border border-gray-300">
        //             <i className="fas fa-sun text-gray-400"></i>
        //         </button>
        //         <button className="p-2 rounded-full bg-white border border-gray-300">
        //             <i className="fas fa-user text-gray-400"></i>
        //         </button>
        //         <div className="relative">
        //             <button className="p-2 rounded-full bg-white border border-gray-300">
        //                 <i className="fas fa-ellipsis-v text-gray-400"></i>
        //             </button>
        //             <span className="absolute top-0 right-0 block h-2 w-2 bg-green-500 rounded-full"></span>
        //         </div>
        //     </div>
        // </nav>

        <header className={`flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800`}> 
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 dark:text-white"> 
          <span className="border-l-4 border-gray-900 dark:border-white pl-2">M</span>
        </div>
  
        {/* Search Bar */}
        <div className="relative w-1/3 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none border border-gray-300 dark:border-gray-600"
          />
        </div>
        
        {/* Icons */}
        <div className="flex items-center gap-4">
          <BarChart2 className="text-gray-700 dark:text-white cursor-pointer" size={20} />
          <Sun 
            className="text-gray-700 dark:text-white cursor-pointer" 
            size={20} 
            onClick={() => setDarkMode(!darkMode)}
          />
          <User className="text-gray-700 dark:text-white cursor-pointer" size={20} />
        </div>
      </header>
    );
}
export default Header;