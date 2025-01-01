import React from 'react'
import BigCard from './BigCard';
import SmallCard from './SmallCard';

function Base() {
  const customstyle={
    
  }
  return (
    <div className=' ml-[14vw] top-[.5vw]  w-[85%] relative rounded-[30px] border-[1px] border-gray-300 h-screen ' >
      <div className=' w-full h-full rounded-[30px] text-7xl'>

        <div className='w-full  h-[90px]  rounded-t-[30px] border-b-[1px]  border-gray-300 bg-white'>
        
        
        </div>
        <BigCard
        title={'My Work'}
        h1={'Newly Assigned'}
        h2={'ToDo'}
        h3={'Done'}
        />
        <div className='w-[98%] h-[42%] m-4 rounded-[30px] flex absolute top-[55%]  '>
          <BigCard 
          container={'w-[60%] h-[93%] ' }
          title={'Upcoming Events'}
          h1={'Meetings'}
          h2={'Deadlines'}
          h3={'Reminders'}
          />
          <SmallCard
          container={'w-[40%]  h-[93%]' }
          title={'Assigned Comments'}
         
          />
        

        </div>
      
       

        


       
      </div>
        
      
    </div>
  )
}

export default Base
