import React from 'react';
import './Card.css';

const Card = ({ width, height, title, image, link }) => {
  return (
    <div className='card' style={{ width: width, height: height }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className='card-title'>
          <p>{title}</p>
        </div>
        <div className='card-image-container'>
          <img src={image} alt={title} className='image' />
        </div>
      </a>
    </div>
  );
};

export default Card;
