// import React from 'react'

// const ProductCart = () => {
//   return (
//     <div className='bg-[#f2f2f2] p-5 flex flex-row gap-3 ibm-plex-sans-condensed-regular'>

//       <div className=' w-full'>
//         <div className='px-2 py-6 bg-white'>
// <div className='border-b border-[#D9D9D9]'>
//   <p className='text-left ibm-plex-sans-condensed-medium text-[21.55px]'>Shoping Cart</p>
//   <p className='text-right'>Price</p>
// </div>
//           <div className='flex flex-row py-4 gap-3 justify-between border-b border-[#D9D9D9] '>
//             <div className='flex flex-row gap-2'>
//               <img src="./images/Women/image1.png" alt="" />
//               <div>
//                 <div>WDIRARA Women's Square Neck Puff Short Sleeve Cut Out Waist Tie Back Flared A Line Dress, Black, L</div>
//                 <div className='text-[#AD0000] text-[14px]'>Usually ships within 4 to 5 days</div>
//                 <div>sold by:
//                   <span className='text-[#1F8394]'>Monatik LLC</span> </div>
//                 <div>Size: L</div>
//                 <div>Color:Black</div>
//                 <div className='flex flex-row gap-3 items-center'>
//                   <select className='bg-[#F0F2F2] hover:bg-[#C3CACA] border border-[#C6C6C6] hover:border-[#C6C6C6] rounded-[3.12px] ' name="qty" id="qty">
//                     <option value="1">Qty :1</option>
//                     <option value="2">Qty :1</option>
//                     <option value="3">Qty :1</option>
//                     <option value="4">Qty :1</option>
//                   </select>
//                   <div className='text-[#1F8394] text-[10.78px]'>Delete</div>
//                   <div className='text-[#1F8394] text-[10.78px]'>Save for later</div>
//                   <div className='text-[#1F8394] text-[10.78px]'>Share</div>
//                 </div>
//               </div>
//             </div>
//             <div className='ibm-plex-sans-condensed-bold text-[21px]'>
//               ₹ 1400.00
//             </div>
//           </div>
//           <div className='text-end'>
//             Subtotal (1 item): <span className='ibm-plex-sans-condensed-bold text-[16.16px] '> ₹ 1400.00</span>
//           </div>
//         </div>
// <div className='h-20 bg-white my-4'></div>
// <div>
//   The price and availability of items at Amazon.sa are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent
//   price.
//   Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
// </div>
//       </div>
//       <div className='flex flex-col w-[430px]'>
//         <div className='px-[57px] bg-white py-2.5'>
//           <p> Subtotal (1 item): <span className='ibm-plex-sans-condensed-bold text-[16.16px] '> ₹ 1400.00</span></p>
//           <div className='py-2'>
//             <button className='ibm-plex-sans-condensed-regular w-full hover:bg-[#CFAF11] bg-[#FFCC00] px-[18px] py-[7px] rounded-full cursor-pointer' type="button">Proceed to Buy</button>
//           </div>
//         </div>
//         <div className='px-[32.5px] bg-white py-2.5 my-2'>
//             <p className='ibm-plex-sans-condensed-bold text-[16.16px]'>Customers Who Brought Items in Your Recent History Also Bought</p>
//         </div>
//       </div>
//     </div>


//   )
// }

// export default ProductCart


import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate()

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleQtyChange = (id, qty) => {
    dispatch(updateQuantity({ id, qty: Number(qty) }));
  };

  return (
    <div className="bg-[#f2f2f2] p-5 flex flex-row gap-3 ibm-plex-sans-condensed-regular">


      <div className="w-full">
        <div className="px-2 py-6 bg-white">


          <div className='border-b border-[#D9D9D9]'>
            <p className='text-left ibm-plex-sans-condensed-medium text-[21.55px]'>Shoping Cart</p>
            <p className='text-right'>Price</p>
          </div>


          {cartItems.length === 0 && (
            <div className="py-10 text-center">
              <p className="text-lg">Your Amazon Cart is empty.</p>
            </div>
          )}


          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-row py-4 gap-3 justify-between border-b border-[#D9D9D9]"
            >
              <div className="flex flex-row gap-2">

                <img
                  src={item.image}
                  className="w-[120px] object-contain"
                  alt=""
                />


                <div>
                  <div>{item.title}</div>

                  <div className="text-[#AD0000] text-[14px]">
                    Usually ships within 4 to 5 days
                  </div>

                  <div>
                    Sold by:{" "}
                    <span className="text-[#1F8394]">Amazon Seller</span>
                  </div>

                  <div>Size: {item.size || "M"}</div>
                  <div>Color: {item.color || "Black"}</div>


                  <div className="flex flex-row gap-3 items-center mt-2">
                    <select
                      className="bg-[#F0F2F2] hover:bg-[#C3CACA] border border-[#C6C6C6] rounded-[3.12px]"
                      value={item.qty}
                      onChange={(e) =>
                        handleQtyChange(item.productId, e.target.value)
                      }
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          Qty: {n}
                        </option>
                      ))}
                    </select>


                    <div
                      className="text-[#1F8394] text-[10.78px] cursor-pointer"
                      onClick={() => dispatch(removeFromCart(item.productId))}
                    >
                      Delete
                    </div>

                    <div className="text-[#1F8394] text-[10.78px] cursor-pointer">
                      Save for later
                    </div>

                    <div className="text-[#1F8394] text-[10.78px] cursor-pointer">
                      Share
                    </div>
                  </div>
                </div>
              </div>

              {/* PRICE */}
              <div className="ibm-plex-sans-condensed-bold text-[21px]">
                ₹{(item.price * item.qty).toLocaleString()}
              </div>
            </div>
          ))}

          {/* Subtotal */}
          <div className="text-end mt-3">
            Subtotal ({cartItems.length} items):{" "}
            <span className="ibm-plex-sans-condensed-bold text-[16.16px]">
              ₹ {subtotal.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Info Box */}
        <div className='h-20 bg-white my-4'></div>
        <div>
          The price and availability of items at Amazon.sa are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent
          price.
          Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col w-[430px]">
        <div className="px-[57px] bg-white py-2.5 shadow">
          <p>
            Subtotal ({cartItems.length} items):{" "}
            <span className="ibm-plex-sans-condensed-bold text-[16.16px]">
              ₹ {subtotal.toLocaleString()}
            </span>
          </p>

          <div className="py-2">
            <button
              disabled={subtotal === 0}
              className={`w-full px-[18px] py-[7px] rounded-full  ${subtotal === 0 ? "bg-yellow-200 cursor-not-allowed" : "bg-[#FFCC00] hover:bg-[#CFAF11] cursor-pointer"}`}
              type="button" onClick={() => navigate('/checkout')}
            >
              Proceed to Buy
            </button>
          </div>
        </div>

        {/* extra white box */}
        <div className="px-[32.5px] bg-white py-2.5 my-2 shadow">
          <p className="ibm-plex-sans-condensed-bold text-[16.16px]">
            Customers Who Bought Items Also Bought
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
