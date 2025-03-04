import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
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
import Header from './KeenTheme/Parent/Header';
import Signin from './ApiTesting/Authentication/Parent/Signin';
import WebAuthnAuth from './Biometric/WebAuthnAuth'
import AttendanceForm from './Biometric/AttendanceForm';
import Biometric from './Biometric/Biometric';
import AttendanceLogs from './Biometric/AttendanceLogs';
import BiometricIntegration from './Biometric2/BiometricIntegration';
import Component1 from './Animation/Component1';
import Component2 from './Animation/Component2';
import Component3 from './Animation/Component3';
import Component4 from './Animation/Component4';
import Component5 from './Animation/Component5';
import Menu from './Animation2/Menu';
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>

            <Route exact path="/" element={<ParentComponent />} />
            <Route exact path="/form" element={<Form />} />
            <Route exact path="/hero" element={<Hero />} />
            <Route exact path="/form2" element={<Form2 />} />
            <Route exact path="/form3" element={<Form3 />} />
            <Route exact path="/gold" element={<Gold />} />
            <Route exact path="/otp" element={<Otp />} />
            <Route exact path="/aadhaar" element={<Aadhar />} />
            <Route exact path="/voterid" element={<VoterId />} />
            <Route exact path="/searchbox" element={<SearchBoxParent />} />
            <Route exact path="/header" element={<Header />} />
            <Route exact path="/apisignin" element={<Signin />} />
            <Route exact path="/web" element={<WebAuthnAuth />} />
            <Route exact path="/web2" element={<AttendanceForm />} />
            <Route exact path="/web3" element={<Biometric />} />
            <Route exact path="/web4" element={<AttendanceLogs />} />
            <Route exact path="/bio" element={<BiometricIntegration />} />

            <Route exact path="/an" element={<Component1 />} />
            <Route exact path="/an2" element={<Component2 />} />
            <Route exact path="/an3" element={<Component3 />} />
            <Route exact path="/an4" element={<Component4 />} />
            <Route exact path="/an5" element={<Component5 />} />
            <Route exact path="/ex1" element={<Menu />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
