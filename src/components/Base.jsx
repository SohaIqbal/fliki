import React from 'react'
import BigCard from './BigCard';
import SmallCard from './SmallCard';

function Base() {
  const customstyle={
    
  }
  return (
    <div className='  ml-[14vw] mt-2  w-[85%] relative rounded-[10px] border-[1px] border-gray-300 h-screen overflow-y-auto overflow-x-hidden' >
      <div className=' w-full h-full rounded-[10px] text-7xl'>

        <div className='w-full mb-3  h-[35px]  rounded-t-[30px] border-b-[1px]  border-gray-300 bg-white'>
        
        
        </div>
        <BigCard
        title={'My Work'}
        item1={'Newly Assigned'}
        item2={'ToDo'}
        item3={'Done'}
        />
        <div className='w-[85vw] h-[41vh]  rounded-[30px] flex  '>
          <BigCard 
          container={'h-[43vh] ' }
          items = {["Newly Assigned", "ToDo", "Done"]}
          title={'Upcoming Events'}
          item1={'Meetings'}
          item2={'Deadlines'}
          item3={'Reminders'}
          />
          <SmallCard
          container={'w-[30vw] mr-7 h-[16.8vw]  ' }
          title={'Assigned Comments'}
         
          />
        

        </div>
      
       

        


       
      </div>
        
      
    </div>
  )
}

export default Base
