import React from 'react';
import { useState, useEffect } from 'react';
import CustomSidebar from './Components/Sidebar';
import MapYa from './Components/MapYa';


  
function App(){

    const [points, setPoints] = useState([]) //points
    console.log("points first: ", points)

    
    const handleChange = (value) => {
      setPoints(value)
      console.log("points: ", value)
    }

      return(
        <div>
          <CustomSidebar handleChangeProp={handleChange} />

          <MapYa points={points}/>
        </div>
      )
}

export default App