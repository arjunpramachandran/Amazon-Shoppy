import React, { useState } from 'react'
import HeroSlider from '../components/UI/HeroSlider'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar } from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import FourProductCard from '../components/UI/FourProductCard';
import { add1, products1, productsToys, viewedProducts } from '../Data/products'
import ProductCard from '../components/UI/ProductCard';
import ProductCarousel from '../components/UI/ProductCarousel';
import { useNavigate } from 'react-router-dom';




const Home = () => {
    const navigate = useNavigate()
    
    const relatedViewed = [
        "/images/RelatedViewed/image 38.png", "/images/RelatedViewed/image 39.png", "/images/RelatedViewed/image 40.png", "/images/RelatedViewed/image 41.png", "/images/RelatedViewed/image 42.png", "/images/RelatedViewed/image 43.png", "/images/RelatedViewed/image 44.png", "/images/RelatedViewed/image 45.png", "/images/RelatedViewed/image 46.png", "/images/RelatedViewed/image 47.png", "/images/RelatedViewed/image 48.png", "/images/RelatedViewed/image 49.png", "/images/RelatedViewed/image 50.png", "/images/RelatedViewed/image 51.png", "/images/RelatedViewed/image 51.png", "/images/RelatedViewed/image 52.png", "/images/RelatedViewed/image 53.png", "/images/RelatedViewed/image 54.png", "/images/RelatedViewed/image 55.png", "/images/RelatedViewed/image 56.png", "/images/RelatedViewed/image 57.png", "/images/RelatedViewed/image.png",
    ]
    const moreItems = [
        "/images/MoreItems/image.png", "/images/MoreItems/image 59.png", "/images/MoreItems/image 60.png", "/images/MoreItems/image 61.png", "/images/MoreItems/image 62.png", "/images/MoreItems/image 63.png", "/images/MoreItems/image 64.png", "/images/MoreItems/image 65.png", "/images/MoreItems/image 66.png", "/images/MoreItems/image 67.png", "/images/MoreItems/image 68.png", "/images/MoreItems/image 69.png", "/images/MoreItems/image 70.png", "/images/MoreItems/image 71.png", "/images/MoreItems/image 72.png", "/images/MoreItems/image 73.png", "/images/MoreItems/image 75.png", "/images/MoreItems/image 76.png", "/images/MoreItems/image 77.png", "/images/MoreItems/image 78.png", "/images/MoreItems/image 79.png", "/images/MoreItems/image 80.png", "/images/MoreItems/image 85.png", "/images/MoreItems/image 86.png", "/images/MoreItems/image 87.png", "/images/MoreItems/image 88.png"
    ]
    const imagesComp = import.meta.glob("/public/images/Computer-Ace/*.png", {
        eager: true,
        import: "default",
    });

    const imageListComp = Object.values(imagesComp);

    const imagesBikes = import.meta.glob("/public/images/Bikes/*.png", {
        eager: true,
        import: "default",
    });
    const imageListBikes = Object.values(imagesBikes);
    const bestCloth = import.meta.glob("/public/images/BestClothings/*.png", {
        eager: true,
        import: "default",
    });
    const bestClothList = Object.values(bestCloth);

    const kitchenFinds = import.meta.glob("/public/images/KitchenFinds/*.png", {
        eager: true,
        import: "default",
    });
    const kitchenImageList = Object.values(kitchenFinds);


    const [current, setCurrent] = useState(1);

    const totalPages = Math.ceil(viewedProducts.length / 6);


    return (
        <div className='bg-[#e3e6e6]'>
            <div className='relative' id='add'>
                <HeroSlider />
                <div className='absolute left-0 right-0 top-120 z-20 ' >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 max-w-[1500px] mx-auto ">

                        {add1.map((item, index) => (
                            <div key={index} className="bg-white p-2  shadow-md flex flex-col justify-between">
                                <h2 className="lato-bold text-[24px]   text-black p-2">{item.heading}</h2>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className=" p-2 text-sm">
                                        <img src={item.image1} alt="" />
                                        <p className='py-1'>{item['disc-1']}</p>
                                    </div>
                                    <div className=" p-2 text-sm">
                                        <img src={item.image2} alt="" />
                                        <p className='py-1'>{item['disc-2']}</p>
                                    </div>
                                    <div className=" p-2 text-sm">
                                        <img src={item.image3} alt="" />
                                        <p className='py-1'>{item['disc-3']}</p>
                                    </div>
                                    <div className=" p-2 text-sm">
                                        <img src={item.image4} alt="" />
                                        <p className='py-1'>{item['disc-4']}</p>
                                    </div>

                                </div>
                                <div onClick={()=>navigate(item.navigate)} className='text-[#1F8394] px-2 mt-6 align-text-bottom   lato-medium text-[16px] cursor-pointer'>
                                    {item.link}
                                </div>

                            </div>
                        )

                        )}


                    </div>
                </div>

            </div>
            <div className="h-230"></div>


            <div className='px-49 sm:px-4 py-4 flex items-center justify-center'>
                <div className="w-full bg-white py-4 " id='relatedViewed'>
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 mb-4">
                        <h2 className="text-[22px] font-semibold text-black">
                            Related to items you’ve viewed
                        </h2>
                        <a className="text-[#007185] hover:text-orange-600 cursor-pointer">
                            See more
                        </a>
                    </div>

                    {/* Slider */}
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        navigation={true}
                        scrollbar={{ draggable: true }}
                        spaceBetween={10}
                        slidesPerView={7.5}
                        className="px-6 "
                    >
                        {relatedViewed.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    className="w-40 h-[230px] object-cover rounded cursor-pointer hover:scale-105 transition"
                                    alt=""
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
            <div className='px-49 sm:px-4 py-4 flex items-center justify-center'>
                <div className="w-full bg-white py-4 " id='relatedViewed'>
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 mb-4">
                        <h2 className="text-[22px] font-semibold text-black">
                            More items to consider
                        </h2>
                        <a className="text-[#007185] hover:text-orange-600 cursor-pointer">
                            See more
                        </a>
                    </div>

                    {/* Slider */}
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        navigation={true}
                        scrollbar={{ draggable: true }}
                        spaceBetween={10}
                        slidesPerView={7.5}
                        className="px-6 "
                    >
                        {moreItems.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    className="w-40 h-[230px] object-cover rounded cursor-pointer hover:scale-105 transition"
                                    alt=""
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 max-w-[1500px] mx-auto ">


                <div className="bg-white p-2  shadow-md flex flex-col justify-between">
                    <h2 className="lato-bold text-[24px]   text-black p-2">Keep shopping for</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <div className=" p-2 text-sm">
                            <img src="/images/KeepShoping/image1.png" alt="" />
                            <div>
                                <p className="text-[12px] font-semibold tracking-wide text-[#111] uppercase">
                                    COOL AND CASUAL...
                                </p>

                                <div className="flex items-start gap-1 text-black mt-1">
                                    <span className="text-[16px] font-bold">₹639</span>
                                    <span className="text-[12px] font-medium align-super">00</span>
                                </div>
                            </div>
                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/KeepShoping/image2.png" alt="" />
                            <div>
                                <p className="text-[12px] font-semibold tracking-wide text-[#111] uppercase">
                                    Leriya Fashion Mid...
                                </p>

                                <div className="flex items-start gap-1 text-black mt-1">
                                    <span className="text-[16px] font-bold">₹509</span>
                                    <span className="text-[12px] font-medium align-super">00</span>
                                </div>
                            </div>
                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/KeepShoping/image3.png" alt="" />
                            <div>
                                <p className="text-[12px] font-semibold tracking-wide text-[#111] uppercase">
                                    Lymio Women Ma...
                                </p>

                                <div className="flex items-start gap-1 text-black mt-1">
                                    <span className="text-[16px] font-bold">₹839</span>
                                    <span className="text-[12px] font-medium align-super">00</span>
                                </div>
                            </div>
                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/KeepShoping/image4.png" alt="" />
                            <div>
                                <p className="text-[12px] font-semibold tracking-wide text-[#111] uppercase">
                                    Dream Beauty Fashi...
                                </p>

                                <div className="flex items-start gap-1 text-black mt-1">
                                    <span className="text-[16px] font-bold">₹264</span>
                                    <span className="text-[12px] font-medium align-super">00</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='text-[#1F8394] px-2 mt-6 align-text-bottom   lato-medium text-[16px] cursor-pointer'>
                        See more
                    </div>

                </div>

                <div className="bg-white p-2  shadow-md flex flex-col justify-between">
                    <h2 className="lato-bold text-[24px]   text-black p-2">Minimum 50% off | Indoor plants</h2>
                    <img src="/images/indoor-plants.png" alt="" />
                    <div className='text-[#1F8394] px-2 mt-6 align-text-bottom   lato-medium text-[16px] cursor-pointer'>
                        See more
                    </div>

                </div>

                <div className="bg-white p-2  shadow-md flex flex-col justify-between">
                    <h2 className="lato-bold text-[24px]   text-black p-2">Customer Most-Loved Fashion for you</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <div className=" p-2 text-sm">
                            <img src="/images/Most-Loved/image 85.png" alt="" />

                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/Most-Loved/image 86.png" alt="" />

                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/Most-Loved/image 87.png" alt="" />

                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/Most-Loved/image 88.png" alt="" />

                        </div>

                    </div>
                    <div className='text-[#1F8394] px-2 mt-6 align-text-bottom   lato-medium text-[16px] cursor-pointer'>
                        Explore more
                    </div>

                </div>
                <div className="bg-white p-2  shadow-md flex flex-col justify-between">
                    <h2 className="lato-bold text-[24px]   text-black p-2">Up to 50% off | International brands</h2>
                    <img src="/images/inter-brands.png" alt="" />
                    <div className='text-[#1F8394] px-2 mt-6 align-text-bottom   lato-medium text-[16px] cursor-pointer'>
                        See more
                    </div>

                </div>

            </div>
            <div className='px-49 sm:px-4 py-4 flex items-center justify-center'>
                <div className="w-full bg-white py-4 " id='relatedViewed'>
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 mb-4">
                        <h2 className="text-[22px] font-semibold text-black">
                            Best Sellers in Computers & Accessories
                        </h2>

                    </div>

                    {/* Slider */}
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        navigation={true}
                        scrollbar={{ draggable: true }}
                        spaceBetween={10}
                        slidesPerView={5.5}
                        className="px-6 "
                    >
                        {imageListComp.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    className="w-fit h-fit object-cover rounded cursor-pointer hover:scale-105 transition"
                                    alt=""
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
            <div className='px-49 sm:px-4 py-4 flex items-center justify-center'>
                <div className="w-full bg-white py-4 " id='relatedViewed'>
                    {/* Header */}
                    <div className="flex items-center justify-start px-6 mb-4">
                        <h2 className="text-[22px] font-semibold text-black">
                            No cost EMI up to 24 months | Starting ₹4,433 INR/month*
                        </h2>
                        <a className="text-[#007185] hover:text-orange-600 cursor-pointer">
                            See offers
                        </a>
                    </div>

                    {/* Slider */}
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        navigation={true}
                        scrollbar={{ draggable: true }}
                        spaceBetween={10}
                        slidesPerView={4}
                        className="px-6 "
                    >
                        {imageListBikes.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    className="w-fit h-fit object-cover rounded cursor-pointer hover:scale-105 transition"
                                    alt=""
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
            <div className='flex my-8 justify-center h-[249px]'>
                <div className='flex flex-row gap-8 bg-white px-[178px] py-10'>
                    <img src="/images/women-gym-dress.png" alt="" />
                    <div className='w-[432px]'>
                        <div className='text-[18px]'>CHKOKKO Women’s Round Neck Full Sleeves Gym
                            Sports Regular Fit T-Shit</div>
                        <div className='flex items-center gap-1 text-[#777777]'>3.9 <span className='text-[#FFCC00] flex -mt-1'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStarOutline /></span> 1,319 </div>
                        <div className="flex items-start gap-1 text-black mt-1">
                            <span className="text-[16px] font-bold">₹509</span>
                            <span className="text-[12px] font-medium align-super">00</span>
                        </div>
                        <div className='text-[12px] lato-medium'>Save ₹100 with coupon</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 max-w-[1500px] mx-auto ">


                <div className="bg-white p-2  shadow-md flex flex-col justify-between">
                    <h2 className="lato-bold text-[24px]   text-black p-2">Keep shopping for</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <div className=" p-2 text-sm">
                            <img src="/images/PickUp-Left/image1.png" alt="" />
                            <div>
                                <p className="text-[12px] font-semibold tracking-wide text-[#111] uppercase">
                                    FUNDAY FASHION...
                                </p>

                                <div className="flex items-start gap-1 text-black mt-1">
                                    <span className="text-[16px] font-bold">₹389</span>
                                    <span className="text-[12px] font-medium align-super">00</span>
                                </div>
                            </div>
                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/PickUp-Left/image2.png" alt="" />
                            <div>
                                <p className="text-[12px] font-semibold tracking-wide text-[#111] uppercase">
                                    P. S. COLLECTION…
                                </p>

                                <div className="flex items-start gap-1 text-black mt-1">
                                    <span className="text-[16px] font-bold">₹499</span>
                                    <span className="text-[12px] font-medium align-super">00</span>
                                </div>
                            </div>
                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/PickUp-Left/image3.png" alt="" />
                            <div>
                                <p className="text-[12px] font-semibold tracking-wide text-[#111] uppercase">
                                    FUNDAY FASHION...
                                </p>

                                <div className="flex items-start gap-1 text-black mt-1">
                                    <span className="text-[16px] font-bold">₹499</span>
                                    <span className="text-[12px] font-medium align-super">00</span>
                                </div>
                            </div>
                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/PickUp-Left/image4.png" alt="" />
                            <div>
                                <p className="text-[12px] font-semibold tracking-wide text-[#111] uppercase">
                                    Dream of Glory In…
                                </p>

                                <div className="flex items-start gap-1 text-black mt-1">
                                    <span className="text-[16px] font-bold">₹2650</span>
                                    <span className="text-[12px] font-medium align-super">00</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='text-[#1F8394] px-2 mt-6 align-text-bottom   lato-medium text-[16px] cursor-pointer'>
                        See more
                    </div>

                </div>

                <div className="bg-white p-2  shadow-md flex flex-col justify-between">
                    <h2 className="lato-bold text-[24px]   text-black p-2">Minimum 50% off | Indoor plants</h2>
                    <img src="/images/mini-tv.png" alt="" />
                    <div className='text-[#1F8394] px-2 mt-6 align-text-bottom   lato-medium text-[16px] cursor-pointer'>
                        Check out other exciting shows on miniTV
                    </div>

                </div>

                <FourProductCard products={products1} title={"Best Sellers in Sports,Fitness & Outdoors"} />
                <div className="bg-white p-2  shadow-md flex flex-col justify-between">
                    <h2 className="lato-bold text-[24px]   text-black p-2">Up to 70% off | IDAM natural wellness|Smal...</h2>
                    <img src="/images/bellavita.png" alt="" />
                    <div className='text-[#1F8394] px-2 mt-6 align-text-bottom   lato-medium text-[16px] cursor-pointer'>
                        See more
                    </div>

                </div>

            </div>
            <div className='px-49 sm:px-4 py-4 flex items-center justify-center'>
                <div className="w-full bg-white py-4 " id='relatedViewed'>
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 mb-4">
                        <h2 className="text-[22px] font-semibold text-black">
                            Best Sellers in Clothing & Accessories
                        </h2>
                        <a className="text-[#007185] hover:text-orange-600 cursor-pointer">

                        </a>
                    </div>

                    {/* Slider */}
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        navigation={true}
                        scrollbar={{ draggable: true }}
                        spaceBetween={10}
                        slidesPerView={7.5}
                        className="px-6 "
                    >
                        {bestClothList.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    className="w-fit h-fit object-cover rounded cursor-pointer hover:scale-105 transition"
                                    alt=""
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 max-w-[1500px] mx-auto ">

                <FourProductCard products={productsToys} title={"Best Sellers in Toys & Games"} />
                <div className="bg-white p-2  shadow-md flex flex-col justify-between">
                    <h2 className="lato-bold text-[24px]   text-black p-2">Customers’ Most-Loved Products</h2>
                    <div className="grid grid-cols-2 gap-2">

                        <div className=" p-2 text-sm">
                            <img src="/images/Most-Loved/image1.png" alt="" />

                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/Most-Loved/image2.png" alt="" />

                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/Most-Loved/image3.png" alt="" />

                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/Most-Loved/image4.png" alt="" />

                        </div>

                    </div>
                    <div className='text-[#1F8394] px-2 mt-6 align-text-bottom   lato-medium text-[16px] cursor-pointer'>
                        Explore more
                    </div>

                </div>
                <div className="bg-white p-2  shadow-md flex flex-col justify-between">
                    <h2 className="lato-bold text-[24px]   text-black p-2">Best Sellers in Beauty</h2>
                    <div className="grid grid-cols-2 gap-2">

                        <div className=" p-2 text-sm">
                            <img src="/images/Beauty/image1.png" alt="" />

                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/Beauty/image2.png" alt="" />

                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/Beauty/image3.png" alt="" />

                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/Beauty/image4.png" alt="" />

                        </div>

                    </div>
                    <div className='text-[#1F8394] px-2 mt-6 align-text-bottom   lato-medium text-[16px] cursor-pointer'>

                    </div>

                </div>

                <div className="bg-white p-2  shadow-md flex flex-col justify-between">
                    <h2 className="lato-bold text-[24px]   text-black p-2">Latest styles | Dresses, kurta & more | 50% -...</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <div className=" p-2 text-sm">
                            <img src="/images/LatestStyle/image1.png" alt="" />
                            <p className='py-1'>Kurta & sets</p>
                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/LatestStyle/image2.png" alt="" />
                            <p className='py-1'>Tops</p>
                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/LatestStyle/image3.png" alt="" />
                            <p className='py-1'>Dresses</p>
                        </div>
                        <div className=" p-2 text-sm">
                            <img src="/images/LatestStyle/image4.png" alt="" />
                            <p className='py-1'>Sarees</p>
                        </div>

                    </div>
                    <div className='text-[#1F8394] px-2 mt-6 align-text-bottom   lato-medium text-[16px] cursor-pointer'>
                        Explore more
                    </div>

                </div>

            </div>
            <div className='px-49 sm:px-4 py-4 flex items-center justify-center'>
                <div className="w-full bg-white py-4 " id='relatedViewed'>
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 mb-4">
                        <h2 className="text-[22px] font-semibold text-black">
                            Min. 50% off | Unique kitchen finds | Amazon Brands & more
                        </h2>
                        <a className="text-[#007185] hover:text-orange-600 cursor-pointer">
                            See All
                        </a>
                    </div>

                    {/* Slider */}
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        navigation={true}
                        scrollbar={{ draggable: true }}
                        spaceBetween={10}
                        slidesPerView={5.2}
                        className="px-6 "
                    >
                        {kitchenImageList.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    className="w-fit h-fit object-cover rounded cursor-pointer hover:scale-105 transition"
                                    alt=""
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
            <div className='bg-white pt-4 mt-4'>
                <div className='my-4 py-4 border-t-2 px-4 border-b-2 rounded-md border-gray-300'>
                    <div className='flex  justify-between px-2'>
                        <div className='lato-bold text-[22px]'>Inspired  by your browsing history</div>
                        <div className='text-[20px] pe-2'>Page {current} of {totalPages}</div>
                    </div>
                    <ProductCarousel products={viewedProducts} onPageChange={(page) => setCurrent(page)} />
                    <div className='flex flex-col py-4  items-center justify-center'>
                        <hr className='mx-4 w-full  text-gray-300' />
                        <div className='w-[292px] py-2 flex flex-col items-center '>
                            <div className='lato-medium text-[14px]'>See personalized recommendations</div>
                            <button type='button' className='bg-[#FFD52D] border border-[#F8AB38] w-full font-medium'>Sign in</button>
                            <div className='lato-medium text-[14px]'>New customer?
                                <span className='ps-2 text-[#497978] cursor-pointer'>Start here</span></div>
                        </div>
                    </div>
                </div>
                <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}  className='bg-[#37475A] hover:bg-[#4E5E72] h-20 flex items-center justify-center text-white lato-medium text-[16px]'>
                        Back to Top
                </div>


            </div>

        </div>
    )
}

export default Home