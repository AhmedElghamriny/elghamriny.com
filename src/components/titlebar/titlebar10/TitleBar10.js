import React from 'react';
import './TitleBar10.css';

const TitleBar10 = (props) => {
  return (
    <div className="titlebar10" style={{ backgroundColor: props.backgroundColor, color: props.color}}>
      <p>{props.title}</p>
    </div>
  );
};

export default TitleBar10;
