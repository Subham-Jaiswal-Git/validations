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
import Gold from './Sections/Gold'
import Otp from './Sections/Otp'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="bg-orange-900 card">
        <button className='bg-red-500' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

        
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
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App;
