import React from 'react';

function Browse(){
  const center = {
    textAlign: 'center',
    padding: '45px'
  }
  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    margin: '0 5vw 0 5vw'
  }
  return(
    <div>
      <h1 style={center}>Featured restaurants near you</h1>
      <div style={grid}>
        
      </div>
    </div>
  );
}

export default Browse;
