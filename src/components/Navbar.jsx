import React from 'react'
import { Icons } from '../icons'
const {CiSearch, IoAddOutline,GoBell,CiCircleQuestion, FaRegCircle} = Icons

function Navbar() {
  return (
    <div className='w-full h-16  text-black font-robotoLight  p-4 fixed flex justify-center items-center'>
      <div className='min-w-[28vw] border-[.1vw] min-h-9 rounded-[50px] relative border-grey-200'>
        <div className='flex justify-start items-center absolute left-4 top-[.3vw] text-[1vw] gap-5'>
            <span><CiSearch/></span>
            <p>Search</p>

        </div>
      </div>
      <IoAddOutline className='text-gray-500   text-[2vw] ml-2 '/>
      <div className=' flex justify-center  absolute top-0 right-0 mr-[10vw] gap-4 mt-[1vw]  items-center'>
        <GoBell className='text-gray-500 text-[1.5vw]'/>
        <CiCircleQuestion className='text-gray-500 text-[1.7vw]  '/>
        <FaRegCircle className='text-gray-500 text-[1.5vw] '/>
      </div>

    </div>
  )
}

export default Navbar
