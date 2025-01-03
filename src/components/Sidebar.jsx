// import React, { useState ,useRef, useEffect} from "react";
// import { Icons } from "../icons";
// const { MdOutlinePushPin, MdPushPin,IoIosMore, IoMdHome,GrProjects, IoChatbubbleSharp, MdViewTimeline, FaRegPenToSquare, IoMdList, IoCalendarClear, GoChecklist,HiDocumentReport,MdDashboardCustomize, MdAddTask  } = Icons;
// import { MdMoreHoriz } from "react-icons/md";


// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [extraItems, setExtraItems] = useState([]);
//   const [isPinned, setIsPinned] = useState({}); 

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
//   const togglepin=(index)=>{
//     setIsPinned((prevState) => ({
//         ...prevState,
//         [index]: !prevState[index], 
//       }));
//   }
//   const dropdownref = useRef(null);

// useEffect(() => {
//   const handleclosingofdropdown=(event)=>{
//     if(dropdownref.current && !dropdownref.current.contains(event.target)){
//       setIsOpen(false);
//     }

//   }
//   document.addEventListener("mousedown",handleclosingofdropdown);
//   return ()=>{
//     document.removeEventListener("mousedown",handleclosingofdropdown);
//   }

// },[])

//   const addItem = (item) => {
//     setExtraItems([...extraItems, item]);
//   };
//   const removeItem = (itemToRemove) => {
//     setExtraItems(extraItems.filter((item) => item.name !== itemToRemove.name));
//   };

//   const sidebarItems = [
//     { name: "Home", icon:<IoMdHome  className="text-secondary text-[1.3vw]"/> },
//     { name: "Projects", icon: <GrProjects className="text-secondary text-[.9vw]"/>},
//     { name: "Chat", icon: <IoChatbubbleSharp className="text-secondary text-[1.1vw]"/> },
//     { name: "More", icon: <MdMoreHoriz className="text-secondary text-[1vw]"/> },
//   ];

//   const moreOptions = [
//     { name: "Timeline", icon: <MdViewTimeline className="text-secondary text-[1.2vw]"/> },
//     { name: "Board", icon: <FaRegPenToSquare className="text-secondary text-[.9vw]"/> },
//     { name: "Backlog", icon: <MdAddTask className="text-secondary text-[1.1vw]"/> },
//     { name: "Sprint", icon: <IoMdList className="text-secondarytext-[1.3vw]"/> },
//     { name: "Calender", icon: <IoCalendarClear className="text-secondary-600 text-[1.1vw]"/> },
//     { name: "Lists", icon: <GoChecklist className="text-secondary text-[1.1vw]"/> },
//     { name: "Reports", icon: <HiDocumentReport className="text-secondary text-[1.2vw]"/> },
//     { name: "Dashboards", icon: <MdDashboardCustomize className="text-secondary text-[1.2vw]"/> },
//   ];

//   return (
//     <div className="w-[12.5vw] ml-5 mt-[3.4vw] text-[1vw] h-full  text-black font-robotoLight fixed p-2  ">
//       <ul className=' '>
//         {sidebarItems.slice(0, 3).map((item, index) => (
//           <li
//             key={index}
//             className="flex items-center w-[10.7vw] ml-1 h-[2.3vw] text-secondary justify-start  p-2 hover:bg-gray-200 hover:transition-all ease-in-out duration-[.2s] rounded-md cursor-pointer"
//           >
//             <div >
//               {item.icon}
//             </div>
//             <div className="px-4  text-left">
//               {item.name}
//             </div>
//           </li>
//         ))}
//          <ul className="">
//         {extraItems.map((item, index) => (
//           <li
//             key={index}
//             className="flex items-center p-2  h-[2.3vw] ml-1  w-[10.7vw] text-left  text-secondary  hover:bg-gray-200 rounded-md cursor-pointer"
//           >
//             <div className="text-[1vw]">
//               {item.icon}
//             </div>
//             <div className="px-4  ">
//               {item.name}
//             </div>
//           </li>
//         ))}
//       </ul>
//       </ul>
//       {/* More Dropdown */}
//       <div ref={dropdownref}  className="relative">
//         <button
//           onClick={toggleDropdown}
//           className="flex items-center   p-[1vw] hover:bg-gray-200 rounded-md cursor-pointer w-[11vw] text-secondary  h-[2.2vw]"
//         >
//          <div className="  flex  gap-4 flex-1 justify-start items-center   text-secondary ">
//          <div className="  text-[2vw]    text-secondary">{sidebarItems[3].icon}</div>
//        <div  className="  text-[1vw]   text-secondary">  {sidebarItems[3].name}</div>
//          </div>
//         </button>
//         {isOpen && (
//   <div className="   w-[12.5vw] absolute top-0 left-full mt-2 z-50  border-black shadow-[0_0_10px_rgba(0,0,0,0.5)]   bg-primarybg  text-black p-2  rounded-md ">
//     {moreOptions.map((option, index) => (
     
//         <div className="flex h-[2.2vw]  items-center bg-primarybg text-secondary " key={index}>
//         <button
//           className="flex items-center h-[2.2vw] w-full  hover:bg-gray-200 hover:transition-all ease-in-out duration-[.2s] font-robotoLight rounded-sm"
//         >
//           <div className="flex items-center  w-full">
        
//             <span className="mr-2">{option.icon}</span>
            
           
//             <div className="flex items-center text-left  w-full">
//               <span className=" flex-1">{option.name}</span>
//               <div  onClick={(e) => {
//     e.stopPropagation(); 
//     if (!isPinned[index]) {
//       addItem(option); 
//     } else {
//       removeItem(option); 
//     }
//     togglepin(index); 
//   }} className="ml-2">
//                 {isPinned[index] ? <MdPushPin className="text-secondary text-[1vw] "/> : <MdOutlinePushPin className="text-secondary  text-[1vw]"/>}
//               </div>
//             </div>
//           </div>
//         </button>
//       </div>
     
//     ))}
//   </div>
// )} 
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState, useRef, useEffect } from "react";
import { Icons } from "../icons";
const { MdOutlinePushPin, MdPushPin, IoIosMore, IoMdHome, GrProjects, IoChatbubbleSharp, MdViewTimeline, FaRegPenToSquare, IoMdList, IoCalendarClear, GoChecklist, HiDocumentReport, MdDashboardCustomize, MdAddTask } = Icons;
import { MdMoreHoriz } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [extraItems, setExtraItems] = useState([]);
  const [isPinned, setIsPinned] = useState({});
  const [dropdownPosition, setDropdownPosition] = useState("down"); // 'down' or 'up'
  const dropdownRef = useRef(null);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // If the dropdown extends beyond the viewport height, move it up
      if (dropdownRect.bottom > viewportHeight) {
        setDropdownPosition("up");
      } else {
        setDropdownPosition("down");
      }
    }
  }, [isOpen]);

  const togglepin = (index) => {
    setIsPinned((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
      
     
    }));
    
  };

  const dropdownref = useRef(null);

  useEffect(() => {
    const handleclosingofdropdown = (event) => {
      if (dropdownref.current && !dropdownref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleclosingofdropdown);
    return () => {
      document.removeEventListener("mousedown", handleclosingofdropdown);
    };
  }, []);

  const addItem = (item) => {
    setExtraItems([...extraItems, item]);
  };

  const removeItem = (itemToRemove) => {
    setExtraItems(extraItems.filter((item) => item.name !== itemToRemove.name));
  };

  const sidebarItems = [
    { name: "Home", icon: <IoMdHome className="text-secondary text-[1.3vw]" /> },
    { name: "Projects", icon: <GrProjects className="text-secondary text-[.9vw]" /> },
    { name: "Chat", icon: <IoChatbubbleSharp className="text-secondary text-[1.1vw]" /> },
    { name: "More", icon: <MdMoreHoriz className="text-secondary text-[1vw]" /> },
  ];

  const moreOptions = [
    { name: "Timeline", icon: <MdViewTimeline className="text-secondary text-[1.2vw]" /> },
    { name: "Board", icon: <FaRegPenToSquare className="text-secondary text-[.9vw]" /> },
    { name: "Backlog", icon: <MdAddTask className="text-secondary text-[1.1vw]" /> },
    { name: "Sprint", icon: <IoMdList className="text-secondary text-[1.3vw]" /> },
    { name: "Calender", icon: <IoCalendarClear className="text-secondary-600 text-[1.1vw]" /> },
    { name: "Lists", icon: <GoChecklist className="text-secondary text-[1.1vw]" /> },
    { name: "Reports", icon: <HiDocumentReport className="text-secondary text-[1.2vw]" /> },
    { name: "Dashboards", icon: <MdDashboardCustomize className="text-secondary text-[1.2vw]" /> },
  ];

  return (
    <div className="w-[12.5vw] ml-5 mt-[3.4vw] z-50 text-[1vw] h-full text-black font-robotoLight p-2 fixed">
      <ul className=' '>
        {sidebarItems.slice(0, 3).map((item, index) => (
          <li
            key={index}
            className="flex items-center w-[10.7vw] ml-1 h-[2.3vw] text-secondary justify-start p-2 hover:bg-gray-200 hover:transition-all ease-in-out duration-[.2s] rounded-md cursor-pointer"
          >
            <div>
              {item.icon}
            </div>
            <div className="px-4 text-left">
              {item.name}
            </div>
          </li>
        ))}
        <ul className="">
          {extraItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center p-2 h-[2.3vw] ml-1 w-[10.7vw] text-left text-secondary hover:bg-gray-200 rounded-md cursor-pointer"
            >
              <div className="text-[1vw]">
                {item.icon}
              </div>
              <div className="px-4">
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </ul>
      {/* More Dropdown */}
      <div ref={dropdownref} className="relative ">
        <button
          onClick={toggleDropdown}
          className="flex items-center  p-[1vw] hover:bg-gray-200 rounded-md cursor-pointer w-[11vw] text-secondary h-[2.2vw]"
        >
          <div className="flex gap-4 flex-1 justify-start items-center text-secondary">
            <div className="text-[2vw] text-secondary">{sidebarItems[3].icon}</div>
            <div className="text-[1vw] text-secondary">{sidebarItems[3].name}</div>
          </div>
        </button>
        {isOpen && (
    <div
    ref={dropdownRef}
    className={`absolute ${
      dropdownPosition === "down" ? "top-[2.5vw]" : "bottom-[2.5vw]"
    } left-[12vw] w-[14vw] border-black shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-primarybg text-black p-3 rounded-md`}
  >
            {moreOptions.map((option, index) => (
              <div className="flex   h-[2.2vw]  items-center bg-primarybg text-secondary" key={index}>
                <button
                  className="flex items-center h-[2.2vw] w-full hover:bg-gray-200 hover:transition-all ease-in-out duration-[.2s] font-robotoLight rounded-sm"
                >
                  <div className="flex items-center w-full">
                    <span className="mr-2">{option.icon}</span>
                    <div className="flex items-center text-left w-full">
                      <span className="flex-1">{option.name}</span>
                      <div onClick={(e) => {
                        e.stopPropagation();
                        if (!isPinned[index]) {
                          addItem(option);
                          setIsOpen(false);
                        } else {
                          removeItem(option);
                          setIsOpen(false);
                        }
                        togglepin(index);
                      }} className="ml-2">
                        {isPinned[index] ? <MdPushPin className="text-secondary text-[1vw]" /> : <MdOutlinePushPin className="text-secondary text-[1vw]" />}
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