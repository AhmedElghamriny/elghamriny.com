import React from 'react';
import './Card.css';

const Card = ({ width, height }) => {
  return (
    <div className='card' style={{ width: width, height: height }}>
      {/* Card content can go here */}
      <img src=''></img>
      <div className='card-title'>
        <p>placeholder</p>
      </div>
    </div>
  );
};

export default Card;
