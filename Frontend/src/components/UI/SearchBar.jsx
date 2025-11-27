import { ChevronDown, Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center w-auto h-auto  lato-regular mb-2">
      
      
      <button className="flex items-center gap-1 px-3 py-4 bg-[#D9D9D9] text-gray-700 
        rounded-l-md border border-gray-300">
        All <ChevronDown size={16} />
      </button>

    
      <input
        type="text"
        placeholder="Search Amazon.in"
        className="flex-1 px-4 py-4 border-t border-b border-gray-300 
          outline-none bg-white"
      />

   
      <button className="px-2 py-4 bg-[#FFCC00] border border-[#FFCC00] 
        rounded-r-md flex items-center justify-center">
        <Search size={24} className="text-black" />
      </button>
    </div>
  );
}
