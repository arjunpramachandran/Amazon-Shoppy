import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../API/api";
import { IoMdArrowDropdown } from "react-icons/io";
import ProductImageViewer from '../components/UI/ProductImageView';
import Rating from '../components/UI/Rating';
import { PiMapPinAreaBold } from "react-icons/pi";
import { productMenus } from "../Data/products";

import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

const ProductView = () => {

    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await api.get(`/api/products/${id}`);
                console.log(res.data);
                
                setProduct(res.data);
            } catch (err) {
                console.log("Error fetching product:", err);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <div className="p-10 text-xl">Loading...</div>;


    const menus = productMenus[product.type] || [];
    return (
        <div>
            <div className='text-[15.41px] text-[#5C5C5C] inika-regular flex items-center justify-between gap-2 px-2 border-b border-[#C0C0C0]'>
                <div className='w-[237px] p-1'><img src="/images/amazone-fashion.png" alt="" /></div>
                {menus.map((item, i) => (
                    <div key={i} className="cursor-pointer">
                        {item}
                        <IoMdArrowDropdown size={20} className='inline' />
                    </div>
                ))}
            </div>
            <div className='flex flex-row gap-3 mt-5'>
                <div>
                    <ProductImageViewer images={[product.image]} />
                </div>
                <div>
                    <div>
                        <div>Brand: {product.brand || "Unknown"}</div>
                        <div>{product.title}</div>
                        <div>
                            <Rating rating={{ value: product.rating, count: product.ratingCount }} />
                        </div>
                    </div>
                    <div>
                        <div className='ibm-plex-sans-condensed-regular text-[32px]'><span className="text-[15px] font-medium align-super">₹</span>{product.price}<span className="text-[15px] font-medium align-super">00</span></div>
                        <div className='ibm-plex-sans-condensed-light'>All price include VAT.</div>
                        <div className='flex flex-row gap-1 ibm-plex-sans-condensed-regular'>
                            <div className='text-[#5C5C5C] text-[14px]'>Sign in to redeem.</div>
                            <div className='text-[17.23px] bg-[#71ED58] px-2'>Extra {product.discount}%</div>
                            <div className='text-[17.23px]'>off  with meem credit cards.</div>
                        </div>
                        <div className='ibm-plex-sans-condensed-regular'>Enter code MEEM20 at checkout. Discount by Amazon.</div>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col items-center text-center'>
                                <img className='w-[38px] h-[38px]' src="/images/card-icon.png" alt="" />
                                <div className='ibm-plex-sans-condensed-regula text-[#1F8394] text-[]15.66px'>Electronic payment Only</div>
                            </div>
                            <div className='flex flex-col items-center text-center '>
                                <img className='w-[38px] h-[38px]' src="/images/card-icon.png" alt="" />
                                <div className='ibm-plex-sans-condensed-regula text-[#1F8394] text-[]15.66px'>Electronic payment Only</div>
                            </div>
                            <div className='flex flex-col items-center text-center'>
                                <img className='w-[38px] h-[38px]' src="/images/card-icon.png" alt="" />
                                <div className='ibm-plex-sans-condensed-regular text-[#1F8394] text-[]15.66px'>Electronic payment Only</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='border rounded-[5px] py-[13.44px] px-[17.91px] mr-5'>
                    <div className='flex flex-col gap-2 w-[218.17px] h-auto ibm-plex-sans-condensed-regular'>
                        <div className='ibm-plex-sans-condensed-regular text-[28.04px]'><span className="text-[13px] font-medium align-super">₹</span>{product.price}<span className="text-[13px] font-medium align-super">00</span></div>
                        <div className='text-[15.52px]'>Delivery by <span className='ibm-plex-sans-condensed-semibold'>{product.delivery}</span> </div>
                        <div className='flex flex-row gap-2'>
                            <PiMapPinAreaBold size={20} />
                            <div className='text-[#1F8394] cursor-pointer  text-[14.37px]'>Delivery to Riyadh - Update Location</div>
                        </div>
                        <div className='ibm-plex-sans-condensed-bold text-[15.39px]'>Usually ships within 4 to 5
                            days</div>
                        <div className=' bg-[#F0F2F2] hover:bg-[#C3CACA] border border-[#C6C6C6] hover:border-[#C6C6C6] rounded-[5px] py-2 px-2'>
                            <select className='w-full'
                                value={qty}
                                onChange={(e) => setQty(Number(e.target.value))}
                            >
                                {[1, 2, 3, 4].map(q => (
                                    <option key={q} value={q}>Quantity: {q}</option>
                                ))}
                            </select>
                        </div>
                        <div className='py-2'>
                            <button className='ibm-plex-sans-condensed-regular w-full hover:bg-[#CFAF11] bg-[#FFCC00] px-[18px] py-[7px] rounded-full cursor-pointer' type="button"
                                onClick={() =>
                                    dispatch(addToCart({ ...product,    qty }))
                                }
                            >
                                Add to Cart
                            </button>
                        </div>
                        <div className='py-2'>
                            <button className='ibm-plex-sans-condensed-regular w-full hover:bg-[#D18109] bg-[#FFA41C] px-[18px] py-[7px] rounded-full cursor-pointer' type="button">Buy Now</button>
                        </div>
                        <div className='text-[#717171] text-[14.99px] gap-3 flex flex-row'>
                            <div>
                                <p>Ship from</p>
                                <p>Sold by</p>
                                <p>Payment</p>
                            </div>
                            <div>
                                <p>Monatik LLC</p>
                                <p className='text-[#1F8394]'>Monatik LLC</p>
                                <p className='text-[#1F8394]'>Secure transaction</p>
                            </div>

                        </div>
                        <hr className='text-gray-300 my-2 ' />
                        <div className='py-2'>
                            <button className='ibm-plex-sans-condensed-regular w-full bg-[#FFFFFF] hover:bg-[#F0F2F2]  border-[0.5px] rounded-[8.96px] px-[18px] py-[7px]  cursor-pointer' type="button">Add to List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductView