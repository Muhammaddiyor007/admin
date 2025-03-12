import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='text-center'>
      <h1 className='text-center font-medium pt-[98px] text-[45px] text-[#4F4F4F] pb-[53px]'>
        Welcome, Log into your account
      </h1>

      <div className='mx-auto w-[512px] h-[494px] bg-[#FFFFFF] px-[142px] flex flex-col gap-[34px]'>
        <p className='text-center text-[#667085] pt-[72px] font-inter'>
          It is our great pleasure to have you on board!
        </p>

       
        <form className='flex flex-col gap-[14px]' onSubmit={(e) => e.preventDefault()}>
          <input 
            required 
            className='p-2 w-full border border-[#A7A7A7]' 
            placeholder='Enter your Login' 
            type="text" 
          />
          <input 
            required 
            className='p-2 w-full border border-[#A7A7A7]' 
            placeholder='Enter Password' 
            type="password" 
          />

          
          <Link to={"/dashboard"}><button type="submit" className='w-full bg-[#2D88D4] py-3 rounded border border-[#2D88D4] text-white transition-all duration-300 hover:bg-white hover:text-[#2D88D4]'>
            Login
          </button></Link>
        </form>

       
        <Link className='w-full' to={"/signup"}>
          <button className='border border-[#2D88D4] w-full py-3 rounded text-[#2D88D4] hover:bg-[#2D88D4] hover:text-white transition-all duration-300'>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Login
