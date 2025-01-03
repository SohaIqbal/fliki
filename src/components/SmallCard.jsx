
function SmallCard(props) {
    return (
      <div className={` h-[46vh] mt-2  rounded-[10px] border-[1px] border-gray-300  ${props.container}`}>
          <div className='w-full  h-full rounded-[10px]'>
  
              <p className='font-poppinsSemiBold px-10 py-2 border-b-[1px] border-gray-200 text-center  text-[1vw]'>{props.title}</p>
             
             <div className='w-full h-[80%] text-left text-[1.1vw] font-bold leading-snug mt-4 p-5   flex flex-1'>
                
         
              
              </div>
            
          </div>
       
      </div>
    )
  }
  
  export default SmallCard
  