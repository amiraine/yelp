import React from 'react';
import { Link } from 'react-router-dom';
function Navbar(){
  const navStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    height: '72px',
    alignItems: 'center',
    padding: '0 50px 0 50px',
    background: '#cf3034',
  }
  const links = {
    textDecoration: 'none',
    fontFamily: 'Helvetica Neue',
    color: 'white'
  }
  return(
    <div style={navStyles}>
      <Link style={links} to= '/'>Home</Link>
      <Link style={links} to= '/browse'>Browse</Link>
      <Link style={links} to= '/search'>Search</Link>
      <Link style={links} to='/signup'>Sign up</Link>
      <Link style={links} to='/login'>Log in</Link>
    </div>
  );
}

export default Navbar
