import React from 'react';
import CustomSidebar from './Components/Sidebar';
import MapYa from './Components/MapYa';


  
function App(){
    const points = [
    {
      id: "1",
      coordinates: [61.703602, 30.680139],
      title: "Железнодорожная станция"
    },
    {
      id: "2",
      coordinates: [61.699623, 30.690952],
      title: "Пристань Метеоров"
    },
    {
      id: "3",
      coordinates: [61.705707, 30.672616],
      title: "Парк Ваккасалми"
    }
  ];

      return(
        <div>
          <CustomSidebar />
          <MapYa points={points}/>
        </div>
      )
}

export default App