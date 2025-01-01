import React from 'react'

function BigCard(props) {
  return (
    <div className={`w-[98%] h-[45%] m-4 rounded-[20px] border-[1px] border-gray-300  ${props.container}`}>
        <div className='w-full h-full rounded-[20px] overflow-hidden'>

            <p className='font-poppinsSemiBold px-10 py-5 text-[1.3vw]'>{props.title}</p>
           
           <div className='w-full h-[80%] text-left text-[1.1vw] font-bold leading-snug mt-4   flex flex-1'>

           <div className='w-[33.33%] border-r-[1px] overflow-y-auto border-gray-200 ml-10   '> 
            <h1 className=' font-poppinsLight text-gray-600 mb-5 z-300'>{props.h1}</h1>
            <p className='mt-5 font-robotoLight'></p>
            </div>

           <div className='w-[33.33%] border-r-[1px] overflow-y-auto border-gray-200 ml-10  '> 
           <h1 className=' mb-5 z-300 font-poppinsLight text-gray-600 '>{props.h2}</h1>
           <p className='mt-5'></p>
           </div>
           <div className='w-[33.33%] ml-10 overflow-y-auto '>
           <h1 className=' mb-5 z-300 font-poppinsLight text-gray-600 '>{props.h3}</h1>
           <p className='mt-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deleniti corrupti asperiores officia magnam aliquid fugiat pariatur, dicta repellendus unde labore nemo sunt autem sed. Atque explicabo repellendus eveniet laborum nisi delectus consequatur libero, fugiat id distinctio perspiciatis mollitia culpa voluptatem? Porro at nam rerum ipsam optio et sit consequuntur facere recusandae fuga delectus fugiat ipsum fugit explicabo molestias, rem quos aliquid aspernatur enim dicta commodi, minus asperiores ut? Dolor aspernatur eum nulla quam. Debitis cupiditate enim, alias vero repellendus corrupti neque numquam quos odit eligendi distinctio sit consequuntur veritatis fuga doloribus fugiat laudantium. Aperiam molestias at earum nihil debitis.</p>
             </div>
            
            </div>
          
        </div>
     
    </div>
  )
}

export default BigCard
