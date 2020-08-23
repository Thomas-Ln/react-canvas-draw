import React, { useContext } from 'react';
import CanvasContext         from '../contexts/CanvasContext';
import ColorContext          from '../contexts/ColorContext';
import playAudio             from '../helpers/playAudio';
import ColorPicker           from './ColorPicker';
import SizeRange             from './SizeRange';

const Nav = () => {
  const {canvas, setCanvas} = useContext(CanvasContext);
  const {color, setColor}   = useContext(ColorContext);

  return (
    <nav>
    {/*SIZE*/}
      <SizeRange />

    {/*COLOR*/}
      <ColorPicker />

    {/*UNDO*/}
      <button onClick={() => {
        canvas.undo();
        playAudio('undo.mp3')
      }}>undo</button>

    {/*CLEAR*/}
      <button onClick={() => {
        canvas.clear()
        playAudio('clear.mp3')
      }}>clear</button>

    {/*SAVE*/}
      <button
        onClick={() => {
          localStorage.setItem(
            "savedDrawing",
            canvas.getSaveData()
          );
          playAudio('save.wav')
        }}
      >save</button>

    {/*LOAD*/}
      <button
        onClick={() => {
          canvas.loadSaveData(
            localStorage.getItem("savedDrawing")
          );
          playAudio('load.wav')
        }}
      >load</button>

    {/*CREDITS*/}
      <span className="credits">built with <a href="https://github.com/embiem/react-canvas-draw">react-canvas-draw</a></span>
    </nav>
  );
}

export default Nav;
