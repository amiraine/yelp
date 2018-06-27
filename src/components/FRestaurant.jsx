import React from 'react';
import PropTypes from 'prop-types';

function FRestaurant(props){
  const gridContainer ={
    height: '300px',
    width: '300px'
  }
  const gridItem = {
    width: '300px',
    height: '300px',
    clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
  }
  const text = {
    zIndex: '2',
    position: 'relative',
    height: 'inherit',
    width: 'inherit',
    top: '-60%',
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '2px 2px 10px black'
  }
  return(
    <div style={gridContainer}>
      <img style={gridItem} src= {props.img}/>
      <div style={text}>
        {props.name}
      </div>
    </div>
  );
}
FRestaurant.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string
}

export default FRestaurant;
