import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './accept/scss/app.scss'
import Contacts from './pages/Contacts';
import Login from './pages/Login';

function App() {


  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Login />}></Route>
          <Route path='/contact' element={<Contacts />}></Route>
          <Route path="*" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
