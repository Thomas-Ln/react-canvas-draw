import React, { useState } from 'react';
// components
import CanvasDraw   from "react-canvas-draw";
import Nav          from "./components/Nav";
// contexts
import ColorContext  from "./contexts/ColorContext";
import SizeContext   from "./contexts/SizeContext";
import CanvasContext from "./contexts/CanvasContext";
// styles
import './App.css';


const App = () => {
  const [canvas, setCanvas] = useState();
  const [color, setColor]   = useState("dodgerblue");
  const [size, setSize]     = useState(5);
  const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  return (
    <>
    <ColorContext.Provider value={{color, setColor}}>
    <SizeContext.Provider value={{size, setSize}}>
      <CanvasDraw
        ref={setCanvas}
        canvasWidth={width}
        canvasHeight={height}
        brushRadius={size}
        brushColor={color}
        lazyRadius={0}
        gridColor="rgba(150,150,150,0.17)"
        hideGrid={false}
        hideInterface={false}
        immediateLoading={false}
      />
    <CanvasContext.Provider value={{canvas, setCanvas}}>
      <Nav/>
    </CanvasContext.Provider>
    </SizeContext.Provider>
    </ColorContext.Provider>
    </>
  );
}

export default App;
