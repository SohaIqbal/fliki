import React from 'react'
import { Icons } from '../icons'
const {CiSearch, IoAddOutline,GoBell,CiCircleQuestion, FaRegCircle} = Icons

function Navbar() {
  return (
    <div className='w-full z-50  text-black font-robotoLight  p-4 sticky top-0 bg-white flex justify-center items-center'>
   <div className='relative w-full min-h-[2vw] flex justify-center items-center gap-1 mt-'>
    <CiSearch className='text-[2vw] text-gray-400'/>
   <input
    type="search"
    placeholder="Search"
    className="min-w-[28vw] border-[.1vw] h-[60px] pl-[3rem] rounded-[50px] border-grey-200 text-[1vw] text-gray-700 focus:outline-none "
  />
  <button className='w-[4vw] h-[2vw] bg-secondary ml-3 flex justify-center items-center gap-1 text-[.9vw] rounded-lg hover: transition-all ease-in-out duration-[.3s]'> 
    <IoAddOutline className=' text-[1vw] text-white  '/>
    <p className=' font-robotoMedium text-white'>Add</p>
    </button>
    <div className=' flex w-[] justify-center absolute left-[85vw] top-3 right-0  gap-4   items-center'>
       <GoBell className='text-gray-500 text-[1.5vw]'/>
        <CiCircleQuestion className='text-gray-500 text-[1.7vw]  '/>
        <FaRegCircle className='text-gray-500 text-[1.5vw] '/>
      
      </div>

   </div>
 
      {/*  */}
      {/* <div className=' flex justify-center  absolute top-3 right-0 mr-[10vw] gap-4 mt-[1vw]  items-center'>
        <GoBell className='text-gray-500 text-[1.5vw]'/>
        <CiCircleQuestion className='text-gray-500 text-[1.7vw]  '/>
        <FaRegCircle className='text-gray-500 text-[1.5vw] '/>
      </div> */}

    </div>
  )
}

export default Navbar
