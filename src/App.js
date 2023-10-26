import React, { useState } from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';
import Navbar from './navbar';
import Pop from './components/pop';

function App() {
  const [id,setId]=useState(null)
  function handleId(id){
setId(id)
  }
  return (
    <div>
       
     
      <BrowserRouter>
      <Navbar/>
      <div className='main'>React crud Operations</div>
      <Routes>
      <Route path='/create' element={<Create/>} />
        <Route path='/read' element={<Read handleId={handleId}/>} />
        <Route path='/pop' element={<Pop id={id}/>}/>
      </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
