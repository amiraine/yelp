import React from 'react';
import HeroSearch from './HeroSearch';

function Hero(){
  const heroStyle = {
    background: 'url(http://www.asuntospublicos.org/upload/2018/05/02/spanish-vocabulary-to-use-at-the-restaurant-table-spanishnyc-restaurant-table-setting-pictures-l-572fe30f02921b1b.jpg)',
    backgroundSize: '120vw',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '5px solid #cf3034'
  }
  const yelp = {
    height: '302px',
    width: '302px'
  }
  return(
    <div style={heroStyle}>
      <img style={yelp} src="https://contentservice.mc.reyrey.net/image_v1.0.0/128662998" />
      <HeroSearch/>
    </div>
  );
}

export default Hero;
