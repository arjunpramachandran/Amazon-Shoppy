import React from 'react'
import { BiSolidRightArrow } from "react-icons/bi";
import DividerWithText from '../components/UI/DividerWithText';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import api from '../../API/api';


const Register = () => {
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate()

  const handleGoogleLogin = async (credentialResponse) => {
    const token = credentialResponse.credential
    try {
      const res = await api.post("/api/auth/google", { token })
      console.log("Google Response:", credentialResponse);
      console.log("Google Login Response:", res.data);
    } catch (error) {
      console.error("Google Login Error", error);
    }

  }

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      const res = await api.post("/api/auth/register", {
        name,
        phoneNumber,
        email,
        password,
      });

      console.log("Register success:", res.data);
    } catch (error) {
      console.error("Register Error:", error);
      alert(error.response?.data?.message || "Registration failed");
    }

  }
  return (
    <div>
      <div className='bg-white h-screen'>
        <div className='flex flex-col justify-center items-center pt-12 '>
          <img className='h-10' src="./images/image.png" alt="icon" />
          <div className='border flex flex-col px-6  border-[#D9D9D9] rounded-xl mt-6 w-md'>
            <h2 className='text-3xl ibm-plex-sans-condensed-medium  py-4'>Create Account</h2>
            <form action="" onSubmit={handleRegister}>
              <div className='container flex flex-col text-sm gap-4 pt-2 '>
                <div>
                  <label className='w-96 ibm-plex-sans-condensed-medium ' >Your name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} className='border border-gray-400 rounded-md py-1 px-2 w-full' type="text" placeholder='' />
                </div>
                <div>
                  <label className='w-96 ibm-plex-sans-condensed-medium ' >Mobile numbers</label>
                  <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='border border-gray-400 rounded-md px-2 py-1 w-full' type="text" placeholder='' />
                </div>
                <div>
                  <label className='w-96 ibm-plex-sans-condensed-medium ' >Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className='border border-gray-400 rounded-md px-2 py-1 w-full' type="text" placeholder='' />
                </div>
                <div>
                  <label className='w-96 ibm-plex-sans-condensed-medium ' >Password</label>
                  <input value={password} onChange={(e) => setPassword(e.target.value)} className='border border-gray-400 rounded-md px-2 py-1 w-full' type="text" placeholder='' />
                </div>

                <button type='submit' className='bg-[#FFD814] text-black p-2 rounded-md w-full'>Create Account</button>
              </div>
              <hr className='text-[#D9D9D9] my-4' />
            </form>
            <div className='w-96 text-sm pt-2 pb-6'>
              <p className='font-semibold text-md '>Buying for work? </p>
              <p className='text-[#2A8FD7] text-sm inika-regular hover:underline'>Create a free business account</p>
              <div className="w-full h-0.5 bg-linear-to-r from-transparent via-[#c0c0c0] to-transparent mt-4"></div>
              <p className='pt-4 pb-4 inika-regular '>Already have an account?<span className='ms-1 text-[#2A8FD7]  hover:underline' onClick={()=>navigate('/login')}>Sign in<BiSolidRightArrow className='inline text-[10px] ms-2 text-[#2A8FD7]' /></span></p>
              <p className='text-sm'>By creating an account or logging in , you agree to Amazon’s <a className='text-[#2A8FD7] inika-regular hover:underline' href="">Conditions of Use</a> and <a className='text-[#2A8FD7] inika-regular hover:underline' href="">Privacy Notice</a>.</p>



            </div>

          </div>


          <div className='flex flex-col my-6 w-md '>
            <DividerWithText text="or" />
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => console.log("Google Login Failed")}
            />

          </div>
        </div>
        <div className='flex justify-center items-center flex-col  '>
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
    </div>
  )
}

export default Register