import React from 'react'

function SmallCard(props) {
  return (
    <div className={`w-[98%] h-[98%] m-4 rounded-[50px] border-[1px] border-gray-300 ${props.container}`}>
        <div className='w-full h-full rounded-[50px] '>

            <p className='font-poppinsSemiBold px-10 py-5 text-[1.3vw]'>{props.title}</p>
           
           <div className='w-full h-[80%] text-left    overflow-y-auto flex flex-1'>
            

    
            
            </div>
          
        </div>
     
    </div>
  )
}

export default SmallCard
