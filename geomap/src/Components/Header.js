import React from 'react';
import MultiRangeSlider from './MultiRangeSlider';


class Header extends React.Component{
    render(){
      return(
        <>
          <header>Шапка сайта</header>
          <MultiRangeSlider min={0} max={1000} onChange={({ min, max }) => console.log(`mint = ${min}, maxt = ${max}`)} />
          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) => console.log(`minx = ${min}, maxx = ${max}`)}
          />
          </>
      )
    }
}

export default Header