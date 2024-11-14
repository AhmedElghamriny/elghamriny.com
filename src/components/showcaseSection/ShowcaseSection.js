import React from 'react';
import './ShowcaseSection.css';

import { TitleBar5, Card } from './../index';

const ShowcaseSection = (props) => {
  return (
    <div className='showcase_section'>
      <div className='showcase_section_container'>
        <TitleBar5 title={props.title} style={{ backgroundColor: props.backgroundColor }} />
        <div className='card-container'>
        {props.cardData.map((card, index) => (
          <Card 
            key={index} 
            width={props.width} 
            height={props.height} 
            title={card.title} 
            image={card.image} 
            link={card.link}
          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
