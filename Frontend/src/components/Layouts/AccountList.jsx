import React from 'react'
import { IoMdArrowDropup } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/userSlice";

const AccountList = () => {
    const navigate = useNavigate()
    const user = useSelector((state)=>state.user.user)
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/");
    };
    return (
        <div
            className="
        absolute -right-30 top-20 mt-2 w-[500px] bg-white shadow-2xl border 
        rounded-md p-6 
        opacity-100 invisible 
        group-hover:opacity-100 group-hover:visible 
        transition-all duration-200 inika-regular
      "
        >
            <IoMdArrowDropup size={50} className='text-white -top-8 right-55 absolute' />

            {!user ? (
                <div className="text-center">
                    <button onClick={() => navigate('/login')} className="bg-yellow-400 px-6 py-2 w-[225px] h-[42px] text-black rounded-md font-medium hover:bg-yellow-500">
                        Sign in
                    </button>
                    <p className="text-sm text-black mt-2 inika-regular">
                        New customer?
                        <span onClick={() => navigate('/register')} className="text-[#1F8394] cursor-pointer"> Start here.</span>
                    </p>
                </div>
            ) : (
               
                <div className="text-center">
                    <div className="mb-2">
                        <p className="font-bold text-black">{user.name}</p>
                        <p className="text-sm text-[#5C5C5C]">{user.email}</p>
                        {user.phoneNumber && (
                            <p className="text-sm text-[#5C5C5C]">{user.phoneNumber}</p>
                        )}
                    </div>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-6 py-2 rounded-md w-[225px] hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
            )}

            <hr className="my-4 text-[#D9D9D9]" />

            <div className="grid grid-cols-2 gap-6">
                {/* Left Section */}
                <div>
                    <h3 className=" mb-2 inika-bold text-[16.55px] text-black">Your Lists</h3>
                    <ul className="space-y-1 text-sm text-[#5C5C5C]">
                        <li>Create a Wish List</li>
                        <li>Wish from Any Website</li>
                        <li>Baby Wishlist</li>
                        <li>Discover Your Style</li>
                        <li>Explore Showroom</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className='border-l border-[#D9D9D9]'>

                    <h3 className="mb-2 ps-4 inika-bold text-[16.55px] text-black">Your Account</h3>
                    <ul className="space-y-1 ps-4 text-sm text-[#5C5C5C]">
                        <li>Your Account</li>
                        <li className='cursor-pointer'onClick={()=>navigate('/orders')}>Your Orders</li>
                        <li>Your Wish List</li>
                        <li>Keep Shopping</li>
                        <li>Your Recommendations</li>
                        <li>Your Prime membership</li>
                        <li>Your Prime Video</li>
                        <li>Your Subscribe & Save Items</li>
                        <li>Your Seller Account</li>
                        <li>Memberships & Subscriptions</li>
                        <li>Manage Your Content and Devices</li>
                        <li>Your Free Amazon Business Account</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AccountList