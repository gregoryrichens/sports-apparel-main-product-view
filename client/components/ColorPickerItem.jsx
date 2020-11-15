import React from 'react';
import PropTypes from 'prop-types';

const ColorPickerItem = function ColorPickerItem({ image }) {
  return (
    <button>
      <img src={image}/>
    </button>
  );
};

ColorPickerItem.propTypes = {
  image: PropTypes.string,
  index: PropTypes.number,
  setVariant: PropTypes.func,
};

export default ColorPickerItem;
