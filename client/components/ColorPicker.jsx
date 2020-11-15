import React from 'react';
import PropTypes from 'prop-types';
import ColorPickerItem from './ColorPickerItem.jsx';

const ColorPicker = function ColorPicker(props) {
  return (
  <div>
    <h5>{props.variants.length} Colors Available</h5>
    <div>
      {props.variants.map((variant, index) => <ColorPickerItem
        image={variant.images[0]} key={index} />)}
    </div>
  </div>
  );
};

ColorPicker.propTypes = {
  variants: PropTypes.array,
};

export default ColorPicker;
