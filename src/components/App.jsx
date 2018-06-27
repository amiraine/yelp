import React from 'react';
import Router from './Router';
import Navbar from './Navbar';

function App(){
  return(
    <div>
      <style jsx global>{`
          * {
            padding: 0;
            margin: 0;
            font-family: 'Helvetica Neue';
          }
          *:focus{
            outline: none;
          }
      `}</style>
      <Navbar />
      <Router/>
    </div>
  );
}

export default App
