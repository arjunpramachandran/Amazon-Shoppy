import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import api from "../../API/api";
import toast from 'react-hot-toast'
import { clearCart } from "../Redux/cartSlice";



const Checkout = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.items);
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch()
    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    const handlePlaceOrder = async () => {
        console.log(cart);
        
        try {
            const res = await api.post("/api/orders", {
                items: cart,
                shippingAddress: {
                    name: user.name,
                    address: user.address || "2972 Westheimer Rd",
                    city: "Santa Ana",
                    pincode: "85486",
                    phone: user.phone || "9876543210"
                },
                paymentMethod: "Card",
                totalAmount: subtotal
            });

             dispatch(clearCart());
            toast.success("Congragulation Your Order Placed Successfully")
            navigate("/orders");
        } catch (error) {
            toast.error(error);
            console.log(error);
            
        }
    };

    return (
        <div className=" min-h-screen px-4 w-full">
            <div className="w-[1200px] mx-auto  gap-5 ibm-plex-sans-condensed-regular">
                <div className=" flex items-center relative justify-center h-[106.48px] bg-linear-to-b from-[#8b8b8b96] to-[#f1f1f100] border border-[#DBDBDB] px-[60.85px]">
                    <img className="absolute w-[113.53px] left-6 h-[43.66px]" src="/images/Icon.png" alt="" srcset="" />
                    <p className="ibm-plex-sans-condensed-medium text-[38.49px]">Checkout(<span className="text-[#007185]">{cart.legth}</span>)</p>
                </div>

                <div className="flex flex-row gap-6 px-10 py-4">
                    <div className="w-2/3 space-y-6 bg-white">


                        <div className="bg-white p-6  flex flex-row justify-between items-start">
                            <h2 className="text-[24.35px] font-semibold">1  Shipping Address</h2>

                            <p className="text-[#5C5C5C]">
                                {user?.name} <br />
                                {user?.address || "2972 Westheimer Rd."}<br />
                                Santa Ana, Illinois 85486
                            </p>

                            <button className="text-[#1F8394] font-medium mt-2">
                                Change
                            </button>
                        </div>
                        <hr className="my-2 mx-4 text-[#D9D9D9]" />

                        <div className="bg-white p-6 shadow ">
                            <div className="flex justify-between">
                                <h2 className="text-[24.35px] font-semibold text-red-500">
                                    2 Choose a payment method
                                </h2>
                                <button className="text-[#1F8394] font-medium">Close</button>
                            </div>



                            <div className="mt-4 space-y-4 border-[0.4px] px-4 py-6 rounded-[10px]">
                                <p className="font-medium text-[24.35px]">Your available balance</p>

                                <div className="flex flex-row items-end w-3/5 justify-between gap-2">
                                    <div className="text-[#D9D9D9]  "><FaPlus size={20} /></div>
                                    <div className="flex flex-col gap-1">
                                        <label className="font-medium">Enter a gift code or promotional code</label>
                                        <input
                                            placeholder="Enter code"
                                            className="border px-3 py-1 rounded w-60"
                                        />
                                    </div>

                                    <button className="hover:bg-gray-200 px-4 py-1 border rounded-full">
                                        Apply
                                    </button>
                                </div>


                                <div className="border p-3 rounded flex items-center gap-4 cursor-pointer hover:bg-gray-50">
                                    <span className="text-xl font-bold">+</span>
                                    <span className="text-blue-600">Add a credit or debit card</span>
                                </div>


                                <div className="border p-3 rounded">
                                    <p className="font-medium text-gray-800">
                                        Cash on Delivery (COD)
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        COD not available for this order.
                                        <span className="text-blue-600 cursor-pointer"> Why?</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-1/3">

                        <div className="bg-white p-5 shadow">
                            <h2 className="font-medium text-[35.13px] mb-3">Order Summary</h2>
                            <div className="flex justify-between">
                                <div>
                                    <p>Items</p>
                                    <p>Shipping & handling:</p>
                                </div>
                                <div>
                                    <p className="text-end">₹ {subtotal.toLocaleString()}</p>
                                    <p className="text-end">--</p>
                                </div>
                            </div>
                            <hr className="mt-2 text-gray-300" />
                            <div>
                                <p className="text-[35.13px] text-[#B12704] font-medium mb-3">Order Total</p>
                                <p className="text-[35.13px] text-[#B12704] font-medium mb-3">₹ {subtotal.toLocaleString()}</p>
                            </div>


                            <button
                                onClick={handlePlaceOrder}
                                className="bg-yellow-400 hover:bg-yellow-500 w-full py-2 rounded-full text-lg font-medium"
                            >
                                Place your order
                            </button>

                            <p className="text-sm text-gray-600 mt-3">
                                By placing your order, you agree to Amazon's
                                <span className="text-blue-600"> privacy notice </span>
                                and <span className="text-blue-600">conditions of use.</span>
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;
