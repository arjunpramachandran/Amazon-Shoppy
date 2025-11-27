
export default function LanguageDropdown() {
  return (
    <div
      className="
        absolute right-0 mt-2 w-40 
        bg-white text-black shadow-lg rounded-md border
        opacity-0 invisible 
        group-hover:opacity-100 group-hover:visible
        transition-all duration-200
      "
    >
      <ul className="py-2 text-sm space-y-1">
        <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">English</li>
        <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">தமிழ்</li>
        <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">हिन्दी</li>
        <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">മലയാളം</li>
        <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">ಕನ್ನಡ</li>
      </ul>
    </div>
  );
}
