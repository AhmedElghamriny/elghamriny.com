import React from 'react';
import './TitleBar5.css';

const TitleBar5 = (props) => {
  return (
    <div className="titlebar5" style={{ backgroundColor: props.backgroundColor }}>
      <p>{props.title}</p>
    </div>
  );
};

export default TitleBar5;
