import React from 'react'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

const ProductCard = ({product,key}) => {
   
    const rate = product.rating || 1
    const fullStars = Math.floor(rate);
    const outlineStars = 5 - fullStars;
    return (
        <div className='w-[191px] bg-white' key={key}>
            <img className='w-[191px] h-[191px] object-contain' src={product.image} alt="" />
           
            
            <div className='p-1'>
                <div className='text-[18px] lato-medium py-1 text-[#007185]'>{product.title.slice(0,100)+"..."}</div>
                <div className='flex items-center gap-1 text-[#777777]'><span className="text-[#FFCC00] flex -mt-1">
                    {[...Array(fullStars)].map((_, i) => (
                        <IoIosStar key={i} />
                    ))}
                    {[...Array(outlineStars)].map((_, i) => (
                        <IoIosStarOutline key={i} />
                    ))}
                </span>{product.ratingCount} </div>
                <div className='text-[#777777]'>{product.view ?(`${product.view}+ viewed in past month`):""}</div>
                <div className="flex items-start gap-1 text-black mt-1 py-1">
                    <span className="text-[12px] font-medium align-super">₹</span>
                    <span className="text-[16px] font-bold">{(product.price).toFixed(2)}</span>

                </div>
                <div className='text-[14px] py-1 text-[#212121] lato-medium'>{product.delivery}</div>
            </div>
            
        </div>
    )
}

export default ProductCard