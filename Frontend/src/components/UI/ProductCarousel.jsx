import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";

const ProductCarousel = ({ products, onPageChange }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative px-8">
            <Swiper
                modules={[Pagination, Navigation]}
                
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                onSwiper={(swiper) => {
                    swiper.on("slideChange", () => {
                        const current = Math.floor(swiper.activeIndex / swiper.params.slidesPerGroup) + 1;
                        onPageChange(current);
                    });
                }}
                spaceBetween={10}
                breakpoints={{
                    320: { slidesPerView: 2, slidesPerGroup: 2 },
                    640: { slidesPerView: 4, slidesPerGroup: 4 },
                    768: { slidesPerView: 6, slidesPerGroup: 6 },
                }}

            >
                {products.map((product, i) => (
                    <SwiperSlide key={i}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* LEFT ARROW */}
            <button
                ref={prevRef}
                className="
          absolute left-0 top-1/2 -translate-y-1/2 z-20
          border  py-2 rounded-e-md rounded-s-sm bg-white shadow
          hover:bg-gray-100 
        "
            >

                <IoIosArrowBack size={24} />
            </button>

            {/* RIGHT ARROW */}
            <button
                ref={nextRef}
                className="
          absolute right-0 top-1/2 -translate-y-1/2 z-20
          border  py-2 rounded-e-md rounded-s-sm bg-white shadow
          hover:bg-gray-100
        "
            >
                <IoIosArrowForward size={24} />
            </button>
        </div>
    );
};

export default ProductCarousel;
