import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Base from './components/Base';


function App() {
  return (
    <>
      <div id='dashboard-screen' className=' bg-white relative overflow-x-hidden  h-screen w-screen  '>
        <Sidebar />
        <Navbar/>
        <Base/>
       
       
      </div>

    </>
  );
}

export default App;
