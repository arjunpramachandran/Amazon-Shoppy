import React from 'react'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'


const Rating = (rating) => {
    console.log(rating);

    const rate = rating.rating.value || 1
    const fullStars = Math.floor(rate);
    const outlineStars = 5 - fullStars;
    return (
        <div className='flex flex-row items-center inter-regular'>
            <div>{rating.rating.value}</div>
            <div className='flex items-center gap-1 text-[#777777]'>
                <span className="text-[#FFCC00] flex -mt-1">
                    {[...Array(fullStars)].map((_, i) => (
                        <IoIosStar key={i} />
                    ))}
                    {[...Array(outlineStars)].map((_, i) => (
                        <IoIosStarOutline key={i} />
                    ))}
                </span>
            </div>
            <div className='flex flex-row ibm-plex-sans-condensed-regular justify-between items-center px-2 gap-2'>
                <div className='text-[#1F8394] text-[16.04px]'>{rating.rating.count}</div>
                <div class="w-0.5 h-4  bg-[#5C5C5C]"></div>
                <div className='text-[#1F8394] text-[16.04px] '>Search on this page</div>
            </div>


        </div>
    )
}

export default Rating