import React from 'react'
import { BiSolidRightArrow } from "react-icons/bi";
import DividerWithText from '../components/UI/DividerWithText';
import { GoogleLogin } from '@react-oauth/google';
import api from '../../API/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/userSlice";
import toast from 'react-hot-toast'

const Login = () => {
  const [emailOrPhone, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleGoogleLogin = async (credentialResponse) => {
    const token = credentialResponse.credential
    try {
      const res = await api.post("/api/auth/google", { token })
      console.log("Google Response:", credentialResponse);
      console.log("Google Login Response:", res.data);

      dispatch(setUser(res.data.user));
      navigate("/");
    } catch (error) {
      console.error("Google Login Error", error);
    }

  }


  const handleLogin = async (e) => {
    e.preventDefault()
    if (!emailOrPhone || !password) {
      toast.error("Please enter your emailOrPhone/phone and password");
      return;
    }
    try {
      const res = await api.post("/api/auth/login", {
        emailOrPhone,
        password,


      })
      console.log("Login Success:", res.data);
      toast.success("Login Success")

      dispatch(setUser(res.data.user));
      navigate('/')
    } catch (error) {
      console.error("Login Error:", error);

      if (error.response?.status === 400) {
        toast.error("Invalid email/phone or password");
      } else {
        toast.error("Server error. Try again later.");
      }
    }
  }
  return (
    <div className='bg-white h-screen'>
      <div className='flex flex-col justify-center items-center pt-12 '>
        <img className='h-10' src="./images/Icon.png" alt="icon" />
        <div className='border flex flex-col px-6  border-[#D9D9D9] rounded-xl mt-6 w-md'>
          <h2 className='text-3xl ibm-plex-sans-condensed-medium  py-4'>Sign in</h2>
          <form onSubmit={handleLogin}>
            <div className='container flex flex-col  pt-2 '>
              <label className='w-96 ibm-plex-sans-condensed-medium ' >Email or mobile phone number</label>
              <input className='border border-gray-400 rounded-md py-2 w-full' type="text" placeholder='' value={emailOrPhone} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='container flex flex-col  pt-2 '>
              <label className='w-96 ibm-plex-sans-condensed-medium ' >Password</label>
              <input className='border border-gray-400 rounded-md py-2 w-full' type="text" placeholder='' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type='submit' className='bg-[#FFD814] text-black p-2 mt-2 rounded-md w-full'>Continue</button>
          </form>
          <div className='w-96 text-sm pt-6 pb-6'>
            <p >By continuing, you agree to Amazon’s <a className='text-[#2A8FD7] inika-regular hover:underline' href="">Conditions of Use</a> and <a className='text-[#2A8FD7] inika-regular hover:underline' href="">Privacy Notice</a>.</p>
            <p className='pt-4 pb-4 text-[#2A8FD7] inika-regular hover:underline '><span><BiSolidRightArrow className='inline me-2 text-[#656565]' /></span>Need help?</p>
            <div className="pt-4 border-t border-[#D9D9D9]"></div>
            <p className='font-semibold text-md '>Buying for work? </p>
            <p className='text-[#2A8FD7] inika-regular hover:underline'>Shop on Amazon Business</p>
          </div>

        </div>
        <div className='flex flex-col mt-6 w-md '>
          <DividerWithText text="New to Amazon?" />
          <button className='bg-white border border-[#D9D9D9] text-black p-2 text-xs rounded-md w-full cursor-pointer ' onClick={() => navigate('/register')}>Create your Amazon account</button>
        </div>

        <div className='flex flex-col my-6 w-md '>
          <DividerWithText text="or" />
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log("Google Response:", credentialResponse);
                handleGoogleLogin(credentialResponse);
              }}
              onError={() => console.log("Google Login Failed")}
            />
          </div>

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
  )
}

export default Login