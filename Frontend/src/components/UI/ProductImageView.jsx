import { useState } from "react";

const ProductImageViewer = ({images=[]}) => {
  

  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="flex gap-4 w-[644px] max-w-[1200px] mx-auto py-10">
      
     
      <div className="flex flex-col gap-3  p-1">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelected(img)}
            className={`flex items-center justify-center border w-[65px] h-20 rounded-md cursor-pointer overflow-hidden ${
              selected === img ? "border-blue-400" : "border-transparent"
            }`}
          >
            <img
              src={img}
              alt=""
              className="w-[45px] h-[60px] object-cover border rounded-[5px] border-[#1F8394]"
            />
          </div>
        ))}
      </div>

      
      <div className="flex-1 bg-white  p-3">
        <img
          src={selected}
          alt="main-product"
          className="w-[586.91px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ProductImageViewer;
