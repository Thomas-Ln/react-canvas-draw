import React, { useContext, useState } from 'react';
import ColorContext                    from '../contexts/ColorContext';
import playAudio                       from '../helpers/playAudio';
import { CompactPicker }               from 'react-color'
import { usePopper }                   from 'react-popper';

const ColorPicker = () => {
  const {color, setColor} = useContext(ColorContext);

  const [button, setButton] = useState(null);
  const [popper, setPopper] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(button, popper, {
    placement: "top",
    modifiers: [
      {
        name: "arrow",
        options: { element: arrowElement }
      },{
        name: 'offset',
        options: { offset: [0, 22] }
      }
    ]
  });

  // set arrow to context color
  const arrowColor = { "borderTopColor" : color };
  const arrowStyle = Object.assign(arrowColor, styles.arrow);

  const handleColorChange = (pickerColor) => {
    setColor(pickerColor.hex);
  }

  const handleToggle = () => {
    if (popper.getAttribute("data-toggle") === "hide") {
      playAudio('picker.wav');
      popper.setAttribute("data-toggle", "show");
      button.setAttribute("data-active", "true");
    } else {
      popper.setAttribute("data-toggle", "hide");
      button.setAttribute("data-active", "false");
    }
  }

  return (
    <div>
      <button
        ref={setButton}
        data-active="false"
        style={{"backgroundColor": color}}
        onClick={handleToggle}>
        color
      </button>

      <div
        className="tooltip-wrapper"
        data-toggle="hide"
        ref={setPopper}
        style={styles.popper} {...attributes.popper}>
        <div
          className="picker-wrapper">
          <CompactPicker
            onChange={handleColorChange}
            color={color}/>
        </div>
        <div
          className='arrow'
          ref={setArrowElement}
          style={arrowStyle}/>
      </div>

    </div>
  );
}

export default ColorPicker;
