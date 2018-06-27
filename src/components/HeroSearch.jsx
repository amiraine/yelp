import React from 'react';

function HeroSearch(){
  const inline = {
    display: 'flex',
    alignItems: 'center',
    padding: '70px 0px 100px 0px',
  }
  const input = {
    fontSize: '1em',
    padding: '10px 40px 10px 10px',
    border: 'none'
  }
  const hTag = {
    background: 'white',
    lineHeight: '38px',
    padding: '0px 15px 0px 15px'
  }
  const hTagLeft = {
    background: 'white',
    lineHeight: '38px',
    padding: '0px 15px 0px 15px',
    borderRadius: "6px 0px 0px 6px"
  }
  const button = {
    lineHeight: '38px',
    background: '#cf3034',
    padding: '0px 30px 0px 30px',
    borderRadius: '0px 6px 6px 0px',
    color: 'white',
    fontSize: '1em'
  }
  return(
    <div style={inline}>
      <h4 style={hTagLeft}>Find</h4>
      <input style={input} className="find" type="text" placeholder="Bars, Restaurants, etc."></input>
      <h4 style={hTag}>Near</h4>
      <input style={input} className="near" type="text" placeholder="Downtown, Portland, OR"></input>
      <button style={button}>Search</button>
    </div>
  );
}

export default HeroSearch
