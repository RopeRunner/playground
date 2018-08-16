import React from 'react';
require('./RectangleComponent.css');
const RectangleComponent = ({ width, height, numberToDisplay }) => {
  return (
    <div
      className="rect"
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
    >
      {numberToDisplay}
    </div>
  );
};

export default RectangleComponent;
