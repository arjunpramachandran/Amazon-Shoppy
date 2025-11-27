import React, { useState } from "react";

 

export default function FourProductCard({products,title}) {
  

  const [selected, setSelected] = useState(products[0]);

  return (
    <div className="bg-white p-2 w-full shadow-md flex flex-col justify-between">
      {/* Title Block */}
      <h2 className="text-[32px] font-bold text-[#111] leading-tight mb-6">
        {title}
      </h2>

      {/* Main Image */}
      <div className="flex justify-center mb-6">
        <img
          src={selected.mainImage}
          alt="Product"
          className="w-[350px] h-[350px] object-contain transition-all duration-300"
        />
      </div>

      {/* Product Description */}
      <p className="text-[18px] text-[#111] mb-3">{selected.title}</p>

      {/* Price */}
      <div className="flex items-start gap-1 text-[#111] mb-6">
        <span className="text-[32px] font-bold">₹{selected.price}</span>
        <span className="text-[16px] font-medium align-super">00</span>
      </div>

      {/* Thumbnail Buttons */}
      <div className="flex gap-6 justify-center mt-4">
        {products.map((item, i) => (
          <button
            key={i}
            onClick={() => setSelected(item)}
            className={`p-2 rounded-lg border-2 ${
              selected.mainImage === item.mainImage
                ? "border-[#138083]"
                : "border-transparent"
            } hover:border-[#138083] transition`}
          >
            <img
              src={item.thumbnail}
              alt="thumb"
              className="w-[70px] h-[70px] object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
