import React from 'react'
import Navbar from './Navbar'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import Logo from '../assets/Logo-image.svg'
import { BiHome } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { RiBankLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";

const Dashboard = () => {
  const location = useLocation();
  const isTeachersPage = location.pathname.includes("teachers"); // ✅ Agar "teachers" so'zi bo'lsa, true qaytaradi

  return (
    <div className="flex h-screen"> 

      <aside className="w-64 bg-[#152259] text-white p-5 flex flex-col">
        <div className='w-full border-b-2 border-b-[#BDBDBD]'>
          <Link to={"/signup"}><img className='mx-auto' src={Logo} alt=""/></Link>
          <h6 className="text-[14px] font-bold text-center py-5">Udemy Inter. school</h6>
        </div>
        
        <ul className="mt-5 space-y-3 flex-1">
  <li>
    <NavLink 
      className={({ isActive }) => 
        `flex items-center gap-4 p-2 rounded ${isActive ? "bg-[#509CDB] text-white" : "hover:bg-[#509CDB]"}`
      } 
      to="dashboard_home"
    >
      <BiHome /> Dashboard
    </NavLink>
  </li>
  <li>
    <NavLink 
      className={({ isActive }) => 
        `flex items-center gap-4 p-2 rounded ${isActive ? "bg-[#509CDB] text-white" : "hover:bg-[#509CDB]"}`
      } 
      to="teachers"
    >
      <GiTeacher /> Teachers
    </NavLink>
  </li>
  <li>
    <NavLink 
      className={({ isActive }) => 
        `flex items-center gap-4 p-2 rounded ${isActive ? "bg-[#509CDB] text-white" : "hover:bg-[#509CDB]"}`
      } 
      to="students"
    >
      <PiStudentBold /> Students
    </NavLink>
  </li>
  <li>
    <NavLink 
      className={({ isActive }) => 
        `flex items-center gap-4 p-2 rounded ${isActive ? "bg-[#509CDB] text-white" : "hover:bg-[#509CDB]"}`
      } 
      to="billing"
    >
      <RiBankLine /> Billing
    </NavLink>
  </li>
  <li>
    <NavLink 
      className={({ isActive }) => 
        `flex items-center gap-4 p-2 rounded ${isActive ? "bg-[#509CDB] text-white" : "hover:bg-[#509CDB]"}`
      } 
      to="settings"
    >
      <IoMdSettings /> Settings and profile
    </NavLink>
  </li>
  <li>
    <NavLink 
      className={({ isActive }) => 
        `flex items-center gap-4 p-2 rounded ${isActive ? "bg-[#509CDB] text-white" : "hover:bg-[#509CDB]"}`
      } 
      to="exams"
    >
      <IoStatsChart /> Exams
    </NavLink>
  </li>
</ul>

        
        <div className='flex items-center gap-4 pb-20'>
          <RiBankLine /> <p>Features</p>
          <button className='ml-4 rounded-full bg-[#B9D7F1] text-[10px] text-black px-2'>NEW</button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col"> 
 
        {!isTeachersPage && (
          <div className="w-full bg-white shadow-md">
            <Navbar />
          </div>
        )}
        
        <div className='p-6 flex-1'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
