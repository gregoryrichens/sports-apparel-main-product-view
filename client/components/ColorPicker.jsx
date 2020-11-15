import React from 'react';
import PropTypes from 'prop-types';
import ColorPickerItem from './ColorPickerItem.jsx';

const ColorPicker = function ColorPicker({ variants }) {
  return (
  <div>
    <h5>{variants.length} Colors Available</h5>
    <div>
      {variants.map((variant, index) => <ColorPickerItem
        image={variant.images[0]} key={index} />)}
    </div>
  </div>
  );
};

ColorPicker.propTypes = {
  variants: PropTypes.array,
  setVariant: PropTypes.func,
};

export default ColorPicker;
