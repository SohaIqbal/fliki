import React, { useState ,useRef, useEffect} from "react";
import { Icons } from "../icons";
const { MdOutlinePushPin, MdPushPin,IoIosMore, IoMdHome, IoMdMore,GrProjects, IoChatbubbleSharp, MdViewTimeline, FaRegPenToSquare, IoMdList, IoCalendarClear, GoChecklist,HiDocumentReport,MdDashboardCustomize, MdAddTask  } = Icons;
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [extraItems, setExtraItems] = useState([]);
  const [isPinned, setIsPinned] = useState({}); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const togglepin=(index)=>{
    setIsPinned((prevState) => ({
        ...prevState,
        [index]: !prevState[index], 
      }));
  }
  const dropdownref = useRef(null);

useEffect(() => {
  const handleclosingofdropdown=(event)=>{
    if(dropdownref.current && !dropdownref.current.contains(event.target)){
      setIsOpen(false);
    }

  }
  document.addEventListener("mousedown",handleclosingofdropdown);
  return ()=>{
    document.removeEventListener("mousedown",handleclosingofdropdown);
  }

},[])

  const addItem = (item) => {
    setExtraItems([...extraItems, item]);
  };
  const removeItem = (itemToRemove) => {
    setExtraItems(extraItems.filter((item) => item.name !== itemToRemove.name));
  };

  const sidebarItems = [
    { name: "Home", icon:<IoMdHome  className="text-secondary text-[1vw]"/> },
    { name: "Projects", icon: <GrProjects className="text-secondary text-[.8vw]"/>},
    { name: "Chat", icon: <IoChatbubbleSharp className="text-secondary text-[1vw]"/> },
    { name: "More", icon: "⋮" },
  ];

  const moreOptions = [
    { name: "Timeline", icon: <MdViewTimeline className="text-secondary text-[1vw]"/> },
    { name: "Board", icon: <FaRegPenToSquare className="text-secondary text-[.8vw]"/> },
    { name: "Backlog", icon: <MdAddTask className="text-secondary text-[1vw]"/> },
    { name: "Sprint", icon: <IoMdList className="text-secondarytext-[1vw]"/> },
    { name: "Calender", icon: <IoCalendarClear className="text-secondary-600 text-[1vw]"/> },
    { name: "Lists", icon: <GoChecklist className="text-secondary text-[1vw]"/> },
    { name: "Reports", icon: <HiDocumentReport className="text-secondary text-[1vw]"/> },
    { name: "Dashboards", icon: <MdDashboardCustomize className="text-secondary text-[1vw]"/> },
  ];

  return (
    <div className="w-[13.5vw]  mt-[2.7vw] text-[1vw] h-full  text-black font-robotoLight  p-2 fixed ">
      <ul className='ml-2'>
        {sidebarItems.slice(0, 3).map((item, index) => (
          <li
            key={index}
            className="flex items-center w-[10.7vw] h-[2.3vw] text-secondary justify-start  p-3 hover:bg-gray-200 hover:transition-all ease-in-out duration-[.2s] rounded-md cursor-pointer"
          >
            <div >
              {item.icon}
            </div>
            <div className="px-5 text-left">
              {item.name}
            </div>
          </li>
        ))}
         <ul className="">
        {extraItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center p-3 h-[2.3vw] w-[10.7vw] text-left  text-secondary  hover:bg-gray-200 rounded-md cursor-pointer"
          >
            <div className="text-[1vw]">
              {item.icon}
            </div>
            <div className="px-5 mr-[5vw] ">
              {item.name}
            </div>
          </li>
        ))}
      </ul>
      </ul>
      {/* More Dropdown */}
      <div ref={dropdownref} className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center p-4 ml-2 hover:bg-gray-200 rounded-md cursor-pointer w-[10.7vw] h-[2vw]"
        >
         <div className="flex gap-2  text-secondary ">
         <span className=" mr-[1.3vw] mt-[.15vw] text-[.9vw] text-secondary">{sidebarItems[3].icon}</span>
       <span>  {sidebarItems[3].name}</span>
         </div>
        </button>
        {isOpen && (
  <div className=" ml- mt-2 w-[12vw]   border-black shadow-[0_0_10px_rgba(0,0,0,0.5)]   bg-primarybg  text-black p-2 rounded-md ">
    {moreOptions.map((option, index) => (
     
        <div className="flex h-[2.2vw]  items-center text-secondary " key={index}>
        <button
          className="flex items-center w-full p-2 hover:bg-gray-200 hover:transition-all ease-in-out duration-[.2s] font-robotoLight rounded-md"
        >
          <div className="flex items-center w-full">
        
            <span className="mr-2">{option.icon}</span>
            
           
            <div className="flex items-center text-left  w-full">
              <span className=" flex-1">{option.name}</span>
              <div  onClick={(e) => {
    e.stopPropagation(); 
    if (!isPinned[index]) {
      addItem(option); 
    } else {
      removeItem(option); 
    }
    togglepin(index); 
  }} className="ml-2">
                {isPinned[index] ? <MdPushPin className="text-secondary text-[1vw] z-200"/> : <MdOutlinePushPin className="text-secondary z-200 text-[1vw]"/>}
              </div>
            </div>
          </div>
        </button>
      </div>
     
    ))}
  </div>
)} 
      </div>
    </div>
  );
};

export default Sidebar;

