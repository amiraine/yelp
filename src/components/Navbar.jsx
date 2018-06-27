import React from 'react';
import { Link } from 'react-router-dom';
function Navbar(){
  const navStyles = {
    display: 'flex',
    justifyContent: 'space-between'
  }
  return(
    <div style={navStyles}>
      <Link to= '/'>Home</Link>
      <Link to= '/browse'>Browse</Link>
      <Link to= '/search'>Search</Link>
    </div>
  );
}

export default Navbar
