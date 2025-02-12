import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gst from './Components/Gst';
import Form from './Sections/Form';
import VoterIDForm from './Components/VoterIDForm';
import ParentComponent from './Sections/ParentComponent';
import Pan from './Components/Pan';
import DL from './Components/DL';
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
            
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
