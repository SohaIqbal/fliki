// import React from 'react'

// function BigCard(props) {
// const [activeTab, setActiveTab] = useState(0); // 0 for h1, 1 for h2, 2 for h3

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <div className={`w-[98%] h-[45%] m-2 rounded-[10px] border-[1px] border-gray-300 overflow-hidden  ${props.container}`}>
//         <div className='w-full bg-purple-300  h-full rounded-[10px] '>

//             <p className='font-poppinsSemiBold px-10 py-2 rounded-t-[10px] bg-pink-400 text-[1.3vw]'>{props.title}</p>
           
//            <div className='w-full h-[80%] text-left text-[1.1vw] font-bold leading-snug mt-4   flex flex-1'>

//            <div className='w-[33.33%] border-r-[1px] overflow-y-auto border-gray-200 ml-10   '> 
//             <h1 className=' font-poppinsLight text-gray-600 mb-5 z-300'>{props.h1}</h1>
//             <p className='mt-5 font-robotoLight'>
                
//             </p>
//             </div>

//            <div className='w-[33.33%] border-r-[1px] overflow-y-auto border-gray-200 ml-10  '> 
//            <h1 className=' mb-5 z-300 font-poppinsLight text-gray-600 '>{props.h2}</h1>
//            <p className='mt-5'>
//             lorem100
//            </p>
//            </div>
//            <div className='w-[33.33%] ml-10 overflow-y-auto '>
//            <h1 className=' mb-5 z-300 font-poppinsLight text-gray-600 '>{props.h3}</h1>
//            <p className='mt-5'> 
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, velit. Ullam nisi minima omnis quaerat vel officia? Molestiae dicta aperiam quo modi iure maxime error laudantium nostrum vero. Nemo corrupti, ducimus laborum veniam itaque nam et aperiam iste rerum atque fugit fugiat quis sit dolore esse necessitatibus optio ad impedit incidunt, accusamus magnam doloremque tempore libero officiis? Nihil beatae officiis corrupti distinctio praesentium quos recusandae facilis asperiores dolore repellat voluptas sunt in, vitae natus, vero, atque ab doloremque? Quasi, necessitatibus possimus? Laboriosam error fugiat est quaerat culpa, aperiam non itaque vero sapiente. Sit, nam atque hic enim fugiat cupiditate placeat!
//            </p>
//              </div>
            
//             </div>
          
//         </div>
     
//     </div>
//   )
// }

// export default BigCard
import React, { useState } from 'react';

function BigCard(props) {
  const [activeTab, setActiveTab] = useState(0); // 0 for h1, 1 for h2, 2 for h3

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const items = [props.item1, props.item2, props.item3]

  return (
    <div
      className={`w-[98%] h-[45%] m-2 rounded-[10px] border-[1px] border-gray-300 overflow-hidden ${props.container}`}
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
        <div className="w-full h-[80%] text-left text-[1.1vw] font-bold leading-snug mt-4 overflow-y-auto p-4">
          {activeTab === 0 && (
            <div>
              {/* <h1 className="font-poppinsLight text-gray-600 mb-5">
                {props.h1}
              </h1> */}
              <p>
                data for tab 1
                 
              </p>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              {/* <h1 className="font-poppinsLight text-gray-600 mb-5">
                {props.h2}
              </h1> */}
              <p>
              data for tab 2
              
              </p>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              {/* <h1 className="font-poppinsLight text-gray-600 mb-5">
                {props.h3}
              </h1> */}
              <p>
              data for tab 3
                
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BigCard;
