import React from 'react';
import Main from './Components/Main';
import Login from './Components/Auth/Login';
import { Routes, Route } from "react-router-dom";
import Registration from './Components/Auth/Registration';
import "bootstrap/dist/css/bootstrap.min.css"
import { useSelector } from 'react-redux';
 
function App(){
  const isAuth = useSelector(state => state.user.isAuth)

  return (
    <div>
        <Routes>
          <Route path="/" element={<Main />} />
          if (!isAuth) {<Route path="/login/" element={<Login />} />}
          if (!isAuth) {<Route path="/registration" element={<Registration />} />}
        </Routes>
    </div>
  );
}

export default App