import React from 'react';

function Search(){
  const searchGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr'
  }
  const map = {
    background: 'url(https://briffly.com/wp-content/uploads/Google-Maps.jpg)',
    width: '66vw',
    height: '90vh'
  }
  return(
    <div>
      //filters and stuff go here
      <div style={searchGrid}>
        <div>
          //Restaurant info goes here
        </div>
        <div style={map}>
        </div>
      </div>
    </div>
  );
}

export default Search;
