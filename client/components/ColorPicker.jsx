import React from 'react';
import PropTypes from 'prop-types';
import ColorPickerItem from './ColorPickerItem.jsx';

const ColorPicker = function ColorPicker({ variants, method }) {
  const changeVariant = function changeVariant(newVariant) {
    method(newVariant);
  };

  return (
  <div>
    <h5>{variants.length} Colors Available</h5>
    <div>
      {variants.map((variant, index) => <ColorPickerItem
        image={variant.images[0]} key={index} index ={index} method={changeVariant}/>)}
    </div>
  </div>
  );
};

ColorPicker.propTypes = {
  variants: PropTypes.array,
  method: PropTypes.func,
};

export default ColorPicker;
