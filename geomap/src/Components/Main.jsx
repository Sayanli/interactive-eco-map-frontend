import React from 'react';
import { useState } from 'react';
import CustomSidebar from './Sidebar';
import MapYa from './MapYa';
import {LogRegButtons, LogoutButton} from './LogRegButtons';

function Main(){
    
    const isAuth = localStorage.getItem('token')
    const [points, setPoints] = useState([]) //points
    
    const handleChange = (value) => {
      setPoints(value)
      console.log("points: ", value)
    }

      return(
        <div>
          {!isAuth && <LogRegButtons />}
          {isAuth && <LogoutButton />}
          <CustomSidebar handleChangeProp={handleChange} />

          <MapYa points={points}/>
        </div>
      )
}

export default Main