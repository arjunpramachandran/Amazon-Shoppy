import React, { useEffect, useState } from 'react'

import Filter from '../components/UI/Filter'
import ProductCardMain from '../components/UI/ProductCardMain'
import { homeProducts } from '../Data/products'
import api from '../../API/api'




const AmazoneHome = () => {

  const [products,setProducts] = useState([])

    useEffect(() => {
    api.get("/api/products").then((res) => {
      setProducts(res.data);
      console.log(res);
      
    });
  }, []);

  return (

    <div className='w-[1440px ]'>
      <nav className='flex items-center h-14 inika-regular text-[16px] text-[#5C5C5C] justify-between bg-white shadow-md shadow-[#C0C0C0]  border-b border-[#C0C0C0] py-[3px] px-3'>
        <div className='text-black lato-bold'>Amazon Home</div>
        <div>Kitchen & Home Appliances</div>
        <div>Large Appliances</div>
        <div>Kitchen & Dining</div>
        <div>Furniture</div>
        <div>Home Furnishing</div>
        <div>Home Decor</div>
        <div>Home Improvement</div>
        <div>Garden Outdoor</div>
        <div>Storage & Organisation</div>
      </nav>
      <div className='flex flex-row ps-4'>
        {/* filters */}
        <Filter />
        <div className='mt-[100px]'>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((p) => {
              return <ProductCardMain key={p._id} product={p} />
            })}
          </div>


        </div>
      </div>

      {/* Products */}



    </div >
  )
}

export default AmazoneHome