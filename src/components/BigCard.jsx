
import React, { useState } from 'react';
import { Icons } from '../icons';
const { FaCircle, IoFlagOutline } = Icons;
const tabs = [
  {
    id: 0,
    content: (
      <div className='w-full h-full text-[1vw]  flex flex-col gap-1 overflow-hidden'>
        {/* //first main div   */}
        <div className=' w-full cursor-pointer hover:bg-gray-200 transition-all ease-in-out duration-[.2s] p-1 flex gap-2'>
          <div className=' flex-1 h-full p-1 '>
            <div className='w-full h-full  flex gap-2 '>
              <div className='inline-flex text-[1vw] mt-[.2vw]  '><FaCircle/></div>
              <div className='inline-flex '>
                <p>Logo Design</p>
              </div>

            </div>
          </div>
          <div className=' flex-1  p-1'> 
          <div className='w-full h-full text-wrap flex gap-[.1vw]'>
              <div className='inline-flex '> In Project</div>
              <div className='inline-flex  justify-center items-center '>/</div>

              <div className='flex-1 '>Urge Fragrances</div>

            </div>

          </div>
          <div className='flex-1 h-full p-1'>
          <div className='w-full h-full  flex gap-4'>
              <div className='inline-flex  justify-center items-center '><IoFlagOutline className='text-red-600'/></div>
              <div className='inline-flex  justify-center items-center '>Critical</div>

            </div>
          </div>
          <div className=' flex-1 h-full p-1'>
          <div className='w-full h-full  flex gap-3'>
              <div className='inline-flex  justify-center items-center '>12 Jan</div>
              <div className='inline-flex  justify-center items-center '>,</div>

              <div className='inline-flex  justify-center items-center '>9:32 pm</div>

            </div>
          </div>
        </div>

          {/* //Second main div  */}
        <div className=' w-full  cursor-pointer hover:bg-gray-200 transition-all ease-in-out duration-[.2s] p-1 flex gap-1'>
          <div className=' flex-1 h-full p-1 '>
            <div className='w-full h-full  flex gap-2 '>
              <div className='inline-flex text-[1vw] mt-[.2vw]  '><FaCircle/></div>
              <div className='inline-flex '>
                <p>Logo Design</p>
              </div>

            </div>
          </div>
          <div className=' flex-1  p-1'> 
          <div className='w-full h-full  flex'>
              <div className='inline-flex '> In Project</div>
              <div className='inline-flex  justify-center items-center '>/</div>

              <div className='flex-1 '>Urge Fragrances</div>

            </div>

          </div>
          <div className=' flex-1 h-full p-1'>
          <div className='w-full h-full  flex gap-4'>
              <div className='inline-flex  justify-center items-center '><IoFlagOutline className='text-red-600'/></div>
              <div className='inline-flex  justify-center items-center '>Critical</div>

            </div>
          </div>
          <div className=' flex-1 h-full p-1'>
          <div className='w-full h-full  flex gap-3'>
              <div className='inline-flex  justify-center items-center '>12 Jan</div>
              <div className='inline-flex  justify-center items-center '>,</div>

              <div className='inline-flex  justify-center items-center '>9:32 pm</div>

            </div>
          </div>
        </div>

          {/* //Third main div   */}
        <div className='w-full  cursor-pointer hover:bg-gray-200 transition-all ease-in-out duration-[.2s] p-1 flex gap-1'>
          <div className=' flex-1 h-full p-1 '>
            <div className='w-full h-full  flex gap-2 '>
              <div className='inline-flex text-[1vw] mt-[.2vw]  '><FaCircle/></div>
              <div className='inline-flex '>
                <p>Logo Design</p>
              </div>

            </div>
          </div>
          <div className=' flex-1 h-full p-1'> 
          <div className='w-full h-full  flex'>
              <div className='inline-flex '> In Project</div>
              <div className='inline-flex  justify-center items-center '>/</div>

              <div className='flex-1 '>Urge Fragrances</div>

            </div>

          </div>
          <div className=' flex-1 h-full p-1'>
          <div className='w-full h-full  flex gap-4'>
              <div className='inline-flex  justify-center items-center '><IoFlagOutline className='text-red-600'/></div>
              <div className='inline-flex  justify-center items-center '>Critical</div>

            </div>
          </div>
          <div className=' flex-1 h-full p-1'>
          <div className='w-full h-full  flex gap-3'>
              <div className='inline-flex  justify-center items-center '>12 Jan</div>
              <div className='inline-flex  justify-center items-center '>,</div>

              <div className='inline-flex  justify-center items-center '>9:32 pm</div>

            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    content: (<div className='w-full h-full bg-pink-300'>
    
    </div>),
  },
  {
    id: 2,
    content: (
      <div>
        <p>Data for tab </p>
      </div>
    ),
  },
];

function BigCard(props) {
  const [activeTab, setActiveTab] = useState(0); 

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const items = [props.item1, props.item2, props.item3]

  return (
    <div
      className={`w-[98%] h-[45%] m-2 rounded-[10px] border-[1px] border-gray-300 relative   ${props.container}`}
    >
      <div className="w-full  h-full rounded-[10px]">
        {/* Tabs */}
        <div className="flex justify-around border-b-[1px] border-gray-200 rounded-t-[10px] py-2">
       
          {items.map((item, index) => (
            <button key={index} className={`font-poppinsSemiBold text-[1vw] ${
                activeTab === index ? 'border-b-[1px] border-black transition-all ease-in-out duration-[.3s]' : 'text-gray-600'
              }`}
              onClick={() => handleTabClick(index)}>
                {item}

            </button>

          ))}
        </div>

        {/* Content */}
        <div className="w-full h-[90%] text-left text-[1.1vw] font-bold leading-snug  p-2">
        
           {tabs
      .filter(tab => tab.id === activeTab) 
      .map(tab => (
        <div key={tab.id}>{tab.content}</div>
      ))}
        </div>
      </div>
    </div>
  );
}

export default BigCard;
