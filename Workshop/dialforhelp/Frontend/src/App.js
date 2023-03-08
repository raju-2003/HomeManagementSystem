//routing for all components
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './Components/Customer/Home';
import CustLogin from './Components/Customer/CustLogin';
import Profile from './Components/Customer/Profile';
import CustSignup from './Components/Customer/CustSignup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/custlogin" element={<CustLogin/>} />
        <Route exact path="/custsignup" element={<CustSignup />} />
        <Route exact path="/custprofile" element={<Profile />} />
       
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;