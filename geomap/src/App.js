import React from 'react';
import Main from './Components/Main';
import Login from './Components/Auth/Login';
import { Routes, Route } from "react-router-dom";
import Registration from './Components/Auth/Registration';
import "bootstrap/dist/css/bootstrap.min.css"
 
function App(){
  return (
    <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
    </div>
  );
}

export default App