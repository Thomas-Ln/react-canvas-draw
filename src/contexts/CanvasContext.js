import React from 'react';

const CanvasContext = React.createContext({
  canvas: {},
  setCanvas: () => {}
});

export default CanvasContext;
