import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://api.ashyo.fullstackdev.uz/auth/login', {
        email,
        password
      });

      toast.success('Kirish muvoffaqiyatli amalga oshirildi!', { position: "top-right", autoClose: 3000 });
      console.log(data);

      setTimeout(() => {
        navigate("/dashboard/dashboard_home");
      }, 3000);
    } catch (error) {
      toast.error('Login yaroqli emas, iltimos qaytadan urining!', { position: "top-right", autoClose: 3000 });
      console.error(error);
    }
  };

  return (
    <div className='text-center'>
      <ToastContainer />
      <h1 className='text-center font-medium pt-[98px] text-[45px] text-[#4F4F4F] pb-[53px]'>
        Welcome, Log into your account
      </h1>

      <div className='mx-auto w-[512px] h-[494px] bg-[#FFFFFF] px-[142px] flex flex-col gap-[34px]'>
        <p className='text-center text-[#667085] pt-[30px] font-inter'>
          It is our great pleasure to have you on board!
        </p>

        <form className='flex flex-col gap-[14px]' onSubmit={handleLogin}>
          <input 
            required 
            className='p-2 w-full border border-[#A7A7A7] rounded' 
            placeholder='Enter your Login' 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">
            <input 
              required 
              className='p-2 w-full border border-[#A7A7A7] rounded pr-10' 
              placeholder='Enter Password' 
              type={showPassword ? "text" : "password"} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button type="submit" className='w-full bg-[#2D88D4] py-3 rounded border border-[#2D88D4] text-white transition-all duration-300 hover:bg-white hover:text-[#2D88D4]'>
            Login
          </button>
        </form>

        <Link className='w-full' to={"/signup"}>
          <button className='border border-[#2D88D4] w-full py-3 rounded text-[#2D88D4] hover:bg-[#2D88D4] hover:text-white transition-all duration-300'>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
