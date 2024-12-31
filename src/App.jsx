import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div id='dashboard-screen' className=' bg-primarybg relative min-h-screen w-screen overflow-x-hidden '>
        <Sidebar />
        <Navbar/>
    
      </div>

    </>
  );
}

export default App;
