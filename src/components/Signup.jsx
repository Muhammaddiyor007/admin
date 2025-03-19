import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://api.ashyo.fullstackdev.uz/auth/register",
        {
          fullname,
          email,
          password,
        }
      );
      toast.success("Ro'yxatdan muvaffaqiyatli o'tdingiz!", {
        position: "top-right",
        autoClose: 3000,
      });
      console.log(data);
      setTimeout(() => navigate("/dashboard/dashboard_home"), 3000);
    } catch (error) {
      toast.error("Xatolik yuz berdi! Iltimos, qaytadan urinib ko'ring.", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error(error);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-center font-medium pt-[98px] text-[45px] text-[#4F4F4F] pb-[53px]">
        Welcome, Sign up
      </h1>
      <div className="mx-auto w-[512px] h-[494px] bg-[#FFFFFF] px-[142px] flex flex-col gap-[34px]">
        <p className="text-center text-[#667085] pt-[72px] font-inter">
          It is our great pleasure to have you on board!
        </p>
        <form className="flex flex-col gap-[14px]" onSubmit={register}>
          <input
            required
            className="p-2 w-full border border-[#A7A7A7]"
            placeholder="Enter your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="p-2 w-full border border-[#A7A7A7]"
            placeholder="Create your Login"
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <div className="relative w-full">
            <input
              required
              className="p-2 w-full border border-[#A7A7A7] pr-10"
              placeholder="Create your Password"
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
          <button
            type="submit"
            className="bg-[#2D88D4] w-full py-3 rounded text-white border border-[#2D88D4] transition-all duration-300 hover:bg-white hover:text-[#2D88D4]"
          >
            Sign up
          </button>
        </form>
        <Link className="w-full" to={"/login"}>
          <button className="w-full py-3 rounded text-[#2D88D4] border border-[#2D88D4] hover:bg-[#2D88D4] hover:text-white transition-all duration-300">
            Log in
          </button>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
