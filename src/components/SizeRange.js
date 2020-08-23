import React, { useContext } from 'react';
import SizeContext           from '../contexts/SizeContext';
import RangeSlider           from 'react-bootstrap-range-slider';

const SizeRange = () => {
  const {size, setSize} = useContext(SizeContext);

  return (
    <div className="wrapper">
      <label htmlFor="size">SIZE</label>
      <RangeSlider
        min={1}
        max={50}
        value={size}
        onChange={changeEvent => setSize(changeEvent.target.value)}
      />
    </div>
  );
}

export default SizeRange;
