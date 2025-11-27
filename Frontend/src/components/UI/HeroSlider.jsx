import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { TiCreditCard } from "react-icons/ti";

const slides = [
    {
        image: "/images/Hero-Kitchen.jpg",
        title: "Under ₹499",
        subtitle1: "Filled with cuteness",
        subtitle2: "Action toys for your baby",
    },
    {
        image: "/images/Herotoys.jpg",
        title: "Best Deals",
        subtitle1: "Handpicked for you",
        subtitle2: "Top offers today",
    },
];

export default function HeroSlider() {
    return (
        <div className="w-full h-[700px]  ">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 3000 }}
                loop
                className="h-full"
                
            >

                <SwiperSlide >
                    <div
                        className="w-full h-full bg-cover bg-position-[center_40%] relative mask-bottom-fade"
                        style={{ backgroundImage: 'url(/images/Hero-Kitchen.jpg)' }}
                    >
                      
                        <div className="absolute top-2/7 left-2/6 -translate-y-1/2 text-white w-[287px]">
                            <h1 className="text-[40px] lato-black relative text-black">Starting <span className="text-xl absolute left-[195px] -top-0.5">₹</span> <span className="ms-6">99</span> </h1>
                            <p className="text-[22.77px] mt-2 lato-regular text-black">Budget store</p>
                            <p className="text-[22.77px] mt-2 lato-regular text-black">Home, Kitchen & outdoor</p>


                            <div className="flex items-center text-black gap-6 mt-4  text-sm lato-medium">
                                <div className="flex items-center gap-2">
                                    <span className="bg-orange-400 w-10 h-10  p-2 rounded-full"><img src="/images/money-hand.png" alt="" /></span>
                                    <span>PAY ON DELIVERY</span>
                                </div>
                                <div className="w-[3px] h-10 bg-black"></div>
                                <div className="flex items-center gap-2">
                                    <span className="bg-orange-400 w-10 h-10  p-2 rounded-full"><img src="/images/cursor-click.png" alt="" /></span>
                                    <span>WIDE SELECTION</span>
                                </div>
                            </div>


                            <div className="  text-black font-medium mt-6 relative">
                                <img className="h-18 w-200 object-cover" src="/images/card-background.png" alt="" />
                                <div className="absolute top-1 left-2  "><TiCreditCard size={40} /></div>
                                <div className="absolute top-0.5 left-18">
                                    <div className="lato-bold">Get extra up to 5% back </div>
                                    <div>with Amazon Pay ICICI Bank</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div
                        className="w-full h-full  bg-position-[center_40%] relative mask-bottom-fade"
                        style={{ backgroundImage: 'url(/images/Herotoys.jpg)' }}
                    >
                       

                        <div className="absolute top-2/7 left-1/5 -translate-y-1/2 text-white w-[287px]">
                            <h1 className="text-[40px] lato-black relative ">Under <span className="text-xl absolute left-[155px] top-1">₹</span> <span className="ms-6">499</span> </h1>
                            <p className="text-[22.77px] mt-2 lato-regular ">Filled with cuteness</p>
                            <p className="text-[22.77px] mt-2 lato-regular ">Action toys for your baby</p>


                            <div className="flex items-center text-white gap-6 mt-4  text-sm lato-medium">
                                <div className="flex items-center gap-2">
                                    <span className="bg-white w-10 h-8  p-2 rounded-full"><img src="/images/price-tag.png" alt="" /></span>
                                    <span>GREAT PRICES</span>
                                </div>
                                <div className="w-[3px] h-10 bg-black"></div>
                                <div className="flex items-center gap-2">
                                    <span className="bg-white w-10 h-8  p-2 rounded-full"><img src="/images/cursor-click.png" alt="" /></span>
                                    <span>WIDE SELECTION</span>
                                </div>
                            </div>


                            <div className="  text-black font-medium mt-6 relative">
                                <img className="h-18 w-200 object-cover" src="/images/card-background.png" alt="" />
                                <div className="absolute top-1 left-2  "><TiCreditCard size={40} /></div>
                                <div className="absolute top-0.5 left-18">
                                    <div className="lato-bold">Get extra up to 5% back </div>
                                    <div>with Amazon Pay ICICI Bank</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

            
        </div>
    );
}
