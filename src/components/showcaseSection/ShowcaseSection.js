import React from 'react';
import './ShowcaseSection.css';

import { TitleBar5, Card } from './../index';

const ShowcaseSection = (props) => {
  return (
    <div className='showcase_section'>
      <div className='showcase_section_container'>
        <TitleBar5 title={props.title} style={{ backgroundColor: props.backgroundColor }} />
        <div className='card-container'>
          {Array.from({ length: props.numCards }).map((_, index) => (
            <Card key={index} width={props.width} height={props.height} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
