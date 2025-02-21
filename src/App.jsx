import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Sections/Form';
import Form2 from './Sections/Form2';
import Form3 from './Sections/Form3';
import ParentComponent from './Sections/ParentComponent';
import Hero from './Sections/Hero';
import Gold from './Sections/Gold';
import Otp from './Sections/Otp';
import Aadhar from './IdParent/Aadhar';
import VoterId from './IdParent/VoterId';
import SearchBoxParent from './Sections/SearchBoxParent';

function App() {
  return (
    <>  
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ParentComponent/>} />
            <Route exact path="/form" element={<Form/>} />
            <Route exact path="/hero" element={<Hero/>} />
            <Route exact path="/form2" element={<Form2/>} />
            <Route exact path="/form3" element={<Form3/>} />
            <Route exact path="/gold" element={<Gold/>} />
            <Route exact path="/otp" element={<Otp/>} />
            <Route exact path="/aadhaar" element={<Aadhar/>} />
            <Route exact path="/voterid" element={<VoterId/>} />
            <Route exact path="/searchbox" element={<SearchBoxParent/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
