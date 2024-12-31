import React, { useState ,useRef, useEffect} from "react";
import { Icons } from "../icons";
const { MdOutlinePushPin, MdPushPin, GoHome, GrProjects, PiChatCircleLight, CiViewTimeline, FaRegPenToSquare, IoMdList, CiCalendar, GoChecklist,HiOutlineDocumentReport,MdDashboardCustomize, MdAddTask  } = Icons;
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
    { name: "Home", icon:<GoHome  className="text-gray-600 text-[.9vw]"/> },
    { name: "Projects", icon: <GrProjects className="text-gray-600 text-[.7vw]"/>},
    { name: "Chat", icon: <PiChatCircleLight className="text-gray-600 text-[.vw]"/> },
    { name: "More", icon: "⋮" },
  ];

  const moreOptions = [
    { name: "Timeline", icon: <CiViewTimeline className="text-gray-600 text-[1vw]"/> },
    { name: "Board", icon: <FaRegPenToSquare className="text-gray-500 text-[.8vw]"/> },
    { name: "Backlog", icon: <MdAddTask className="text-gray-500 text-[1vw]"/> },
    { name: "Sprint", icon: <IoMdList className="text-gray-500 text-[1vw]"/> },
    { name: "Calender", icon: <CiCalendar className="text-gray-600 text-[1vw]"/> },
    { name: "Lists", icon: <GoChecklist className="text-gray-500 text-[1vw]"/> },
    { name: "Reports", icon: <HiOutlineDocumentReport className="text-gray-500 text-[1vw]"/> },
    { name: "Dashboards", icon: <MdDashboardCustomize className="text-gray-400 text-[1vw]"/> },
  ];

  return (
    <div className="w-64 mt-[5vw] h-full bg-primarybg text-black font-robotoLight  p-4 fixed">
      <ul>
        {sidebarItems.slice(0, 3).map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-start  p-3 hover:bg-gray-200 hover:transition-all ease-in-out duration-[.2s] rounded-md cursor-pointer"
          >
            <div>
              {item.icon}
            </div>
            <div className="px-5">
              {item.name}
            </div>
          </li>
        ))}
         <ul className="">
        {extraItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center p-3 hover:bg-gray-200 rounded-md cursor-pointer"
          >
            <div className="text-[1vw]">
              {item.icon}
            </div>
            <div className="px-4 mr-[5vw]">
              {item.name}
            </div>
          </li>
        ))}
      </ul>
      </ul>
      {/* More Dropdown */}
      <div ref={dropdownref}>
        <button
          onClick={toggleDropdown}
          className="flex items-center p-4  hover:bg-gray-200 rounded-md cursor-pointer w-full"
        >
         <div className="flex ml- w-full">
         <span className="mr-7">{sidebarItems[3].icon}</span>
         {sidebarItems[3].name}
         </div>
        </button>
        {isOpen && (
  <div className=" mt-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)]  bg-primarybg z-30 text-black p-2 rounded-md">
    {moreOptions.map((option, index) => (
      <div className="flex flex-col justify-center items-center" key={index}>
        <button
          className="flex items-center w-full p-2 hover:bg-gray-200 hover:transition-all ease-in-out duration-[.2s] font-robotoLight rounded-md"
        >
          <div className="flex items-center w-full">
        
            <span className="mr-3">{option.icon}</span>
            
           
            <div className="flex items-center justify-between w-full">
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
                {isPinned[index] ? <MdPushPin className="text-gray-500 text-[1vw]"/> : <MdOutlinePushPin className="text-gray-500 text-[1vw]"/>}
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

