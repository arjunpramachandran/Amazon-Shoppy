import React, { useState } from 'react'
import { IoIosStar, IoIosStarOutline, IoIosArrowDown } from 'react-icons/io'
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCardMain = ({ product }) => {


    const rate = product.rating || 1
    const fullStars = Math.floor(rate);
    const outlineStars = 5 - fullStars;


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (e) => {
        e.stopPropagation();
        console.log("ADD TO CART CLICKED"); 
        dispatch(addToCart({ ...product, id: product._id, qty: 1 }));
    };
    const openProduct = () => {
        navigate(`/product-view/${product._id}`);
    };
    return (
        <div  className='w-[276.65px] bg-white border border-[#D9D9D9] px-2 py-4 '>
            <div onClick={openProduct} className="cursor-pointer">
                <img className=' w-[255.08px] h-[195px] object-contain' src={product.image} alt="" />
                <div className='p-1'>
                    <div className='text-[16.18px] inter-500 py-1 text-black'>
                        {product.title.slice(0, 100) + "..."}
                    </div>
                </div>
            </div>


            <div className='px-1'>
                
                <div className='flex items-center gap-1 text-[#777777]'>
                    <span className="text-[#FFCC00] flex -mt-1">
                        {[...Array(fullStars)].map((_, i) => (
                            <IoIosStar key={i} />
                        ))}
                        {[...Array(outlineStars)].map((_, i) => (
                            <IoIosStarOutline key={i} />
                        ))}
                    </span >
                    <span className='text-black'><IoIosArrowDown /></span>
                    <span className='text-[#1F8394] text-[16.65px] inter-400'>{product.ratingCount} </span>
                </div>
                <div className='text-[#777777]'>{product.view ? (`${product.view}+ viewed in past month`) : ""}</div>
                <div className="flex-col items-end gap-1 text-black mt-1 py-1">
                    <div>
                        <span className="text-[21.57px] inter-400">₹{(product.price)}</span>
                        <span className='text-[#717171] inter-400  px-1'>({product.discount}%off)</span>
                    </div>
                    <div className='text-[#7F7F7F] inter-300 text-[12.94px]'>Save extra with No Cost EMI</div>
                </div>
                <div>
                    <div className='inter-300 text-[12.94px] py-2'>
                        FREE delivery by <span className='inter-600'>{product.delivery}7:00 am - 9:00 pm</span>
                    </div>
                    <div className='py-2'>
                        <button className='inter-300 text-[11.29px] bg-[#FFCC00] px-[18px] py-[7px] rounded-full cursor-pointer' type="button" onClick={handleAddToCart} >Add to cart</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductCardMain