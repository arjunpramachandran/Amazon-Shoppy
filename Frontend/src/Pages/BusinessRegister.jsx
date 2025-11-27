import React, { useState } from 'react'
import { BiErrorCircle } from "react-icons/bi";

const BusinessRegister = () => {
    const [emailReg, setEmailReg] = useState("abcdBusiness@gmail.com")
    const [error, setError] = useState("")
    return (
        <div className='h-screen'>
            <div className='bg-[#001F3C]'>
                <div className='mx-30 flex flex-row justify-between items-center py-4 '>
                    <img className='h-8' src="/images/amazone-business.png" alt="icon" />
                    <div className='flex gap-6'>
                        <div className='text-white font-medium text-[14px] flex flex-row items-center gap-2'><span className='border border-white rounded-full bg-white text-black w-6 h-6 flex  items-center justify-center'>1</span>ACCOUNT CREATION</div>
                        <div className='text-white font-medium text-[14px] flex flex-row items-center gap-2'><span className='border border-white rounded-full  w-6 h-6 flex  items-center justify-center'>2</span>BUSINESS DETAILS</div>
                        <div className='text-white font-medium text-[14px] flex flex-row items-center gap-2'><span className='border border-white rounded-full  w-6 h-6 flex  items-center justify-center'>3</span>FINISH</div>

                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-12'>
                <div className='border flex flex-col px-6  border-[#D9D9D9] rounded-xl  w-md'>
                    <h2 className='text-[40px] ibm-plex-sans-condensed-medium mt-10  py-4 pe-6'>Enter your full name
                        and choose your
                        business password</h2>

                    <form action="">
                        <div className='container flex flex-col gap-4 pt-2 '>
                            <div>
                                <label className='w-96 ibm-plex-sans-condensed-semibold ' >Your name</label>
                                <input className='border border-gray-400 rounded-md py-2 w-full' type="text" placeholder='' />
                            </div>
                            <div>
                                <label className='w-96 ibm-plex-sans-condensed-semibold ' >Mobile Number</label>
                                <input className='border border-gray-400 rounded-md py-2 w-full' type="text" placeholder='' />
                            </div>
                            <div>
                                <label className='w-96 ibm-plex-sans-condensed-semibold ' >Password</label>
                                <input className='border border-gray-400 rounded-md py-2 w-full' type="text" placeholder='' />
                                {error && <p className="text-black text-xs mt-1"><span><BiErrorCircle className='inline me-1 text-[#2A8FD7] inika-regular' /></span>{error}</p>}
                            </div>
                            <div>
                                <label className='w-96 ibm-plex-sans-condensed-semibold ' >Password again</label>
                                <input className='border border-gray-400 rounded-md py-2 w-full' type="text" placeholder='' />
                            </div>
                            <button className='bg-[#FFD814] text-black p-2 border-[0.5px] border-[#949494] rounded-xs w-full font-normal'>Create your Amazon account</button>
                        </div>
                    </form>
                    <div className='py-4'>By creating an account or logging in , you agree to Amazon’s <a href='#' className='text-[#2A8FD7] inika-regular hover:underline'>Conditions of Use</a>, <a href='#' className='text-[#2A8FD7] inika-regular hover:underline'>Privacy Notice</a>, and the
                        <a href='#' className='text-[#2A8FD7] inika-regular hover:underline'> Amazon Business Terms and Conditions</a>. You agree that you are creating this business
                        account on behalf of your organization and have authority to bind your organization.</div>
                   
                </div>
            </div>
            <div className='flex justify-center items-center flex-col mt-12 '>
                <div className="w-full h-0.5 bg-linear-to-r from-transparent via-[#c0c0c0] to-transparent"></div>
                <div className='w-[372px] px-12 flex flex-col justify-between items-center mt-6 mb-6'>
                    <div className='flex gap-8  text-xs text-[#2A8FD7] inika-regular pt-4 pb-2'>
                        <a href='#' className='hover:underline'>Conditions of Use</a >
                        <a href='#' className='hover:underline'>Privacy Notice</a>
                        <a href='#' className='hover:underline'>Help</a>
                    </div>
                    <div className='ibm-plex-sans-condensed-light text-sm'>© 1996-2024, Amazon.com, Inc. or its affiliates</div>
                    <div></div>
                </div>


            </div>

        </div>
    )
}

export default BusinessRegister