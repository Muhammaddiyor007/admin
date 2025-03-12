import React from 'react'
import Logout from './Logout'
import Support from './Support'
import { FaSearch } from "react-icons/fa";
import notfound from '../assets/kuala.svg'

const Teachers = () => {
  return (
    <div className="relative px-[38px] pr-[99px]">
      <div className='flex justify-end pb-5'>
        <Logout />
      </div>
      <div className='flex justify-between items-center pb-5'>
        <h4 className='text-[#4F4F4F] text-[20px] font-semibold'>Teachers</h4>
        <button className='bg-[#509CDB] rounded-[4px] text-white p-[14px]'>Add Teachers</button>
      </div>

      {/* 🔍 Search input with icon */}
      <div className="relative w-full">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input 
          className="w-full py-4 pl-12 pr-4  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
          type="search" 
          placeholder="Search for a student by name or email" 
        />
      </div>
      <div className='flex flex-col justify-center items-center pt-4'>
        <img src={notfound} alt="" />
        <h1 className='text-[#4F4F4F] text-[28px] font-bold'>No Teachers at this time</h1>
        <p className='text-[#4F4F4F]'>Teachers will appear here after they enroll in your school.  </p>
      </div>

      <div className='absolute right-[100px]'>
        <Support />
      </div>
    </div>
  )
}

export default Teachers
