// import React from 'react';
// import work from './components/work';
// function App() {
//   return (
//  <>
//     <div>
//      <h1 className='font-poppinsExtraLight text-8xl text-se'>helloo</h1>
//      <work
//       title='work'
   
//      />
//         <p>hi i am child</p>
//     </div>

//     <work title="My Work">
//   <p>This is the content of the My work card.</p>
// </work>


//  </>


//   );
// }

// export default App;
import React from 'react';
import Work from './components/work';

function App() {
  return (
    <>
      <div>
        <h1 className="font-poppinsExtraLight text-8xl text-se">hello</h1>
        
      <Work title="My Work">
        <p>This is the content of the My work card.</p>
      </Work>

      <Work title='hi'>
        <p>thisis 2nd comp</p>

       </Work>
      </div>

    </>
  );
}

export default App;
