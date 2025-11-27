import React, { useState } from 'react'
import { GrLocation } from "react-icons/gr";
import SearchBar from '../UI/SearchBar';
import { IoMdArrowDropdown } from "react-icons/io";
import AccountList from './AccountList';
import { IoMenu } from "react-icons/io5";
import { Outlet, useNavigate } from 'react-router-dom';
import LanguageSelector from '../UI/LanguageSelector';
import LanguageDropdown from '../UI/LanguageDropdown';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';




const MainLayout = () => {
  const navigate = useNavigate()
  const [pincode, setPincode] = useState("Surat 394210");
  const user = useSelector((state) => state.user.user);
 
  
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const cartCount = useSelector((state) => state.cart.items.reduce((total, item) => total + item.qty, 0))

  const cartClick = () => {
    if (isAuthenticated) {
      navigate("/product-cart")
    }
    else{
      toast.error("Login To View Your Cart")
    }
  }
  return (
    <div className=''>
      <nav className='fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[1440px]'>
        <div className='flex justify-between h-[75px] w-full items-center px-[25px] bg-[#131921] '>
          <div className='flex w-1/3 items-center  gap-3'>
            <div onClick={() => navigate("/")} className='w-[141px] h-[75px] px-2.5 py-[22px] '><img className='  ' src="/images/icon-white.png" alt="icon" /></div>
            <div className='px-[10.17px] py-[14.69px] cursor-pointer' >
              {/* location */}
              <div className='text-[#C0CCCC] w-fit lato-regular'>Delivering to {pincode}</div>
              <div className='lato-bold text-white text-[18px]'><span><GrLocation className='inline -mt-1' /></span>Update Location</div>
            </div>
          </div>
          <div className='w-1/3'>
            <SearchBar />
          </div>
          <div className='flex justify-between w-1/3  text-white lato-bold'>
            <div className='px-2.5 '>
              <img className='inline' src="/images/india-flag.svg" alt="" /><select className='' name="language" id="">
                <option value="india">EN</option>
              </select>
            </div>
            <div className='px-[10.17px]  cursor-pointer w-fit relative group' >

              <div className='text-[#C0CCCC]  lato-regular'> {user ? `Hello, ${user.name}` : "Hello, sign in"}</div>
              <div className='lato-bold text-white text-[18px] '>Account & Lists<span><IoMdArrowDropdown className='inline -mt-1' /></span></div>
              <AccountList />
            </div>

            <div className='w-25 lato-bold px-2 text-white text-[18px]' >Returns & Orders</div>
            <div onClick={cartClick} className='flex justify-center relative cursor-pointer'>
              {cartCount > 0 && (
                <span className="absolute left-4.5 bg-[#F08804] text-black text-[12px] font-bold h-5 w-5 rounded-full  flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
              <svg width="49" height="38" viewBox="0 0 49 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.6154 33.0164C23.6154 35.3693 21.1277 37.2766 18.0588 37.2766C14.99 37.2766 12.5023 35.3693 12.5023 33.0164C12.5023 30.6635 14.99 28.7562 18.0588 28.7562C21.1277 28.7562 23.6154 30.6635 23.6154 33.0164ZM19.448 33.0164C19.448 32.4283 18.826 31.9514 18.0588 31.9514C17.2916 31.9514 16.6697 32.4283 16.6697 33.0164C16.6697 33.6045 17.2916 34.0815 18.0588 34.0815C18.826 34.0815 19.448 33.6045 19.448 33.0164ZM43.0633 33.0164C43.0633 35.3693 40.5757 37.2766 37.5068 37.2766C34.4379 37.2766 31.9502 35.3693 31.9502 33.0164C31.9502 30.6635 34.4379 28.7562 37.5068 28.7562C40.5757 28.7562 43.0633 30.6635 43.0633 33.0164ZM38.8959 33.0164C38.8959 32.4283 38.2738 31.9514 37.5068 31.9514C36.7397 31.9514 36.1176 32.4283 36.1176 33.0164C36.1176 33.6045 36.7397 34.0815 37.5068 34.0815C38.2738 34.0815 38.8959 33.6045 38.8959 33.0164Z" fill="white" />
                <path d="M0 1.59757C0 0.715263 0.932918 0 2.08371 0H3.63471C6.27538 0 7.85647 1.36111 8.76061 2.62638C9.36325 3.46979 11.0096 7.63474 11.3506 8.52037L14.0555 15.5216C14.0702 15.5595 14.0829 15.5974 14.0937 15.6355L16.1816 21.4683C16.5956 22.6248 17.9666 23.4263 19.5307 23.4263H36.0562C37.6073 23.4263 38.9704 22.6375 39.396 21.4939L44.4525 7.36113C46.759 7.36113 48.6199 7.45532 48.6199 7.45532L43.4034 22.37C42.4677 24.8863 39.4688 26.6215 36.0562 26.6215H19.5307C16.0898 26.6215 13.0735 24.858 12.1628 22.314L10.05 16.4113L6.55324 7.36113L6.54757 7.34528C6.11499 6.13575 5.709 5.00582 5.10573 4.16156C4.51987 3.34169 4.05287 3.19514 3.63471 3.19514H2.08371C0.932918 3.19514 0 2.47987 0 1.59757Z" fill="white" />
              </svg>
              <span className='mt-3'>Cart</span>

            </div>
          </div>
        </div>

      </nav>
      <nav className='bg-[#232F3E] w-[1440px] mx-auto px-5 h-14 flex items-center gap-4 text-sm text-white lato-bold mt-[75px]'>
        <div><IoMenu className='inline' size={24} />All</div>
        <div>Amazon mini TV</div>
        <div>Sell</div>
        <div>Best Sellers</div>
        <div>Today’s Deals</div>
        <div>Mobiles</div>
        <div>Customer Service</div>
        <div>Prime <IoMdArrowDropdown className='inline -mt-0.5' size={24} /></div>
        <div>Electronics</div>
        <div>Fashion</div>
        <div>New Releases</div>
        <div className='cursor-pointer' onClick={()=>navigate('/amazone-home')}>Home & Kitchen</div>
        <div>Amazon Pay</div>
      </nav>
      <div className='w-[1440px] mx-auto'>
        <Outlet />
      </div>
      <footer className='w-[1440px] mx-auto'>
        <div className='bg-[#232F3E]  h-[548px] py-4 px-10 '>
          <div className='text-white px-30 py-4 grid md:grid-cols-4 sm:grid-cols-2 gap-2' >
            <ul className='space-y-2 w-[134.29px]'>
              <li className='font-bold text-md'>Get to know Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
            <ul className='space-y-2 w-[134.29px]'>
              <li className='font-bold text-md'>Connect with Us</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
            <ul className='space-y-2 w-[235px]'>
              <li className='font-bold text-md'>Make Money with Us</li>
              <li>Sell on Amazon</li>
              <li>Sell under Amazon Accelerator</li>
              <li>Protect and Build Your Brand</li>
              <li>Amazon Global Selling</li>
              <li>Supply to Amazon</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Amazon</li>
              <li>Advertise Your Products</li>
              <li>Amazon Pay on Merchants</li>
            </ul>
            <ul className='space-y-2 w-[235px]'>
              <li className='font-bold text-md'>Let Us Help You</li>
              <li>Your Account</li>
              <li>Returns Center</li>
              <li>Recalls and Products Safety Alerts</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Help</li>
            </ul>
          </div>
          <hr className='text-[#4C4C4C] my-6 ' />
          <div className='flex items-center justify-center gap-10 py-4 text-[#B4B4B4]'>
            <div className='w-[109px]'><img src="/images/icon-white.png" alt="" /></div>
            <div className='flex gap-2'>
              <div className='relative group'>
                <LanguageSelector />
                <LanguageDropdown />
              </div>
              <div>
                <button
                  className="flex items-center gap-2 px-4 py-2 border  border-[#B4B4B4] rounded-md ">
                  <img
                    src="/images/india-flag.svg"
                    alt="India flag"
                    className="w-6 h-4 object-cover"
                  />
                  <span>India</span>
                </button></div>
            </div>
          </div>
        </div>
        <div className='bg-[#131A22] px-40 py-10 grid grid-cols-2 md:grid-cols-4 gap-5'>
          <div className='flex md:flex-col flex-row gap-8 w-[120.48px]'>
            <ul>
              <li className='text-white font-medium'>AbeBooks</li>
              <li className='text-[#999999] font-light'>Books, art
                & collectibles</li>
            </ul>
            <ul>
              <li className='text-white font-medium'>Shop bop</li>
              <li className='text-[#999999] font-light'>Designer
                Fashion Brands</li>
            </ul>
          </div>
          <div className='flex md:flex-col flex-row gap-8 w-[150.3px]'>
            <ul>
              <li className='text-white font-medium'>Amazon web Services</li>
              <li className='text-[#999999] font-light'>Scalable Cloud
                Computing Services</li>
            </ul>
            <ul>
              <li className='text-white font-medium'>Amazon Business</li>
              <li className='text-[#999999] font-light'>Everything For
                Your Business</li>
            </ul>
          </div>
          <div className='flex md:flex-col flex-row gap-8 w-[128.48px]'>
            <ul>
              <li className='text-white font-medium'>Audible</li>
              <li className='text-[#999999] font-light'>Download
                Audio Books</li>
            </ul>
            <ul>
              <li className='text-white font-medium'>Prime Now</li>
              <li className='text-[#999999] font-light'>2-Hour Delivery
                on Everyday Items</li>
            </ul>
          </div>
          <div className='flex md:flex-col flex-row gap-8 w-[229.48px]'>
            <ul>
              <li className='text-white font-medium'>IMDb</li>
              <li className='text-[#999999] font-light'>Movies, TV
                & Celebrities</li>
            </ul>
            <ul>
              <li className='text-white font-medium'>Amazon Prime Music</li>
              <li className='text-[#999999] font-light'>100 million sings, ad-free
                Over 15 million podcast episodes</li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center items-center flex-col bg-[#131A22] text-white '>

          <div className=' px-12 flex flex-col justify-between items-center mb-6'>
            <div className='flex gap-8  text-xs  pt-4 pb-2'>
              <a href='#' className='hover:underline'>Conditons of Use & Sale</a >
              <a href='#' className='hover:underline'>Privacy Notice</a>
              <a href='#' className='hover:underline'>Interset-Based Ads</a>
            </div>
            <div className='ibm-plex-sans-condensed-light text-sm'>1996-2024, Amazon.com, Inc. or its affiliates</div>

          </div>




        </div>
      </footer>
    </div>

  )
}

export default MainLayout