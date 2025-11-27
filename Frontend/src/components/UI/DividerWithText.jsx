const DividerWithText = ({ text }) => {
  return (
    <div className="flex items-center gap-3 my-4 ">
      <div className="flex-1 h-px bg-[#D9D9D9]"></div>
      <span className="text-[#a5a5a5] text-xs whitespace-nowrap">{text}</span>
      <div className="flex-1 h-px bg-[#D9D9D9]"></div>
    </div>
  );
};

export default DividerWithText;
