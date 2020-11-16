import React from 'react';
import PropTypes from 'prop-types';

const ColorPickerItem = function ColorPickerItem({ image, index, method }) {
  const changeVariant = function changeVariant(newVariant) {
    method(newVariant);
  };

  return (
    <button onClick={() => changeVariant(index)}>
      <img src={image}/>
    </button>
  );
};

ColorPickerItem.propTypes = {
  image: PropTypes.string,
  key: PropTypes.number,
  index: PropTypes.number,
  method: PropTypes.func,
};

export default ColorPickerItem;
