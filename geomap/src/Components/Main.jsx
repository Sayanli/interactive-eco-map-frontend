import React from 'react';
import { useState } from 'react';
import CustomSidebar from './Sidebar';
import MapYa from './MapYa';
import LogRegButtons from './LogRegButtons';

function Main(){

    const [points, setPoints] = useState([]) //points
    
    const handleChange = (value) => {
      setPoints(value)
      console.log("points: ", value)
    }

      return(
        <div>
          <LogRegButtons/>
          <CustomSidebar handleChangeProp={handleChange} />

          <MapYa points={points}/>
        </div>
      )
}

export default Main