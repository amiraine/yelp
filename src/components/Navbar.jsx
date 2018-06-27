import React from 'react';
import { Link } from 'react-router-dom';
function Navbar(){
  const navStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100px',
    alignItems: 'center',
    padding: '0 50px 0 50px'
  }
  const links = {
    <scope>
      <style jsx>{.link { text-decoration: none;}}</style>
    </scope>
  }
  return(
    <div style={navStyles}>
      <Link to= '/' className={`link ${links.className}`}>Home</Link>
    <Link to= '/browse' className={`link ${links.className}`}>Browse</Link>
  <Link to= '/search' className={`link ${links.className}`}>Search</Link>
<Link to='/signup' className={`link ${links.className}`}>Sign up</Link>
      <Link to='/login' className={`link ${links.className}`}>Log in</Link>
    </div>
  );
}

export default Navbar
