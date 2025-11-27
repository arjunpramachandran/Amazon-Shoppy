import { IoIosStar, IoIosStarOutline } from "react-icons/io";



export const RadioButton = ({ selected, onClick, label }) => {
    return (
        <div className="flex gap-2 py-1 select-none" onClick={onClick}>
            <div

                className={`
                    w-4 h-4 rounded-full cursor-pointer px-1 
                    ${selected ? "border-[3px] border-[#0EA5A5]" : "border "}
                 `}
            >

            </div>
            <div className="inter-400 text-[12.45px] cursor-pointer ">{label}</div>
        </div>

    );
};

export const RatingRadioButton = ({ selected, onClick }) => {
    return (
        <div className="flex gap-2 py-1 select-none text-[#FF9900]" onClick={onClick}>
            {selected ? <IoIosStar/> : <IoIosStarOutline/>}
            
        </div>

    );
};