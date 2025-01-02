import React from 'react'
import { Icons } from '../icons'
const {CiSearch, IoAddOutline,GoBell,CiCircleQuestion, FaCircle} = Icons

function Navbar() {
  return (
    <div className='w-full z-50  text-black font-robotoLight  p-4 sticky top-0 bg-white flex justify-center items-center'>
   <div className='relative w-full  h-[7px] gap-1 flex flex-1 justify-center items-center '>
    <CiSearch className='text-[2vw] text-secondary'/>
   <input
    type="search"
    placeholder="Search"
    className="w-[27vw] border-[.1vw] h-[31px] pl-[3rem] rounded-[50px] border-grey-200 text-[1vw] text-gray-700 focus:outline-none "
  />
  <button className='w-[4.4vw] h-[30px] bg-secondary ml-2 flex justify-center items-center gap-1 text-[.9vw] rounded-lg hover: transition-all ease-in-out duration-[.3s]'> 
    <IoAddOutline className=' text-[1vw] text-white  '/>
    <p className=' font-robotoMedium mt-[.5px] text-white'>Add</p>
    </button>
    <div className=' flex justify-center absolute left-[85vw]  right-0  gap-4   items-center'>
       <GoBell className='text-secondary text-[1.5vw]'/>
        <CiCircleQuestion className='text-secondary text-[1.7vw]  '/>
     
      <div className="relative w-[1.5vw] h-[1.5vw]">
  <FaCircle className="text-secondary text-[1.7vw] " />
  <span className="absolute top-[.9vw] left-[.9vw] transform -translate-x-1/2 -translate-y-1/2 text-white text-[.8vw]">
    A
  </span>
</div>
      </div>

   </div>
 

    </div>
  )
}

export default Navbar
