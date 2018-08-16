import React from 'react';
require('./DiagramBlockComponent.css');

const DiagramBlockComponent = ({ width, height }) => {
  return (
    <div
      className="d-b-c"
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};

export default DiagramBlockComponent;
