import React from 'react';
import PropTypes from 'prop-types';

function FRestaurant(props){
  const gridItem = {
    border: '1px solid black'
  }
  return(
    <div style={gridItem}>
      
    </div>
  );
}
FRestaurant.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string
}

export default FRestaurant;
