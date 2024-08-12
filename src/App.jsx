import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';
import Button from './Button';
import Hero from './Hero';

function App() {
  
  return (
   
    <div>
       <Navbar/>
   <Hero/>
     
      <Button title='Contact me' style="orange" icon="contact"/>
      <Button title='My projects' style="blue" icon="github"/>
      
      </div>
     
  );
}

export default App
