
import { Globe, ChevronsUpDown} from "lucide-react";

export default function LanguageSelector() {
  return (
    <button
      className="
        flex items-center gap-2 px-4 py-2 
        border border-gray-400 
        rounded-md 
        text-gray-300 
        
        hover:bg-gray-900
      "
    >
      <Globe size={18} />
      <span>English</span> 
        <ChevronsUpDown size={16} />
    </button>
  );
}
