import React from 'react'
import BigCard from './BigCard';
import SmallCard from './SmallCard';

function Base() {
  const customstyle={
    
  }
  return (
    <div className='  ml-[14vw] mt-[.5vw]   w-[85%] relative rounded-[10px] border-[1px] border-gray-300 h-screen overflow-x-hidden    ' >
      <div className=' w-full h-full  rounded-[10px] text-7xl'>
        

        <div className='w-full shadow-md mb-3 h-[50px] sticky top-0 rounded-t-[30px]  border-b-[1px] z-30 bg-white  border-gray-300 '>
        
        
        </div>
        <BigCard
        title={'My Work'}
        item1={'Newly Assigned'}
        item2={'ToDo'}
        item3={'Done'}
        />
        <div className='w-[85vw] h-[50vh] rounded-[30px] flex  '>
          <BigCard 
          container={'h-[46vh] ' }
          items = {["Newly Assigned", "ToDo", "Done"]}
          title={'Upcoming Events'}
          item1={'Meetings'}
          item2={'Deadlines'}
          item3={'Reminders'}
          />
          <SmallCard
          container={'w-[30vw] mr-[4vw]' }
          title={'Assigned Comments'}
         
          />
        

        </div>
      
       

        


       
      </div>
        
      
    </div>
  )
}

export default Base
