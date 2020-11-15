import React from 'react';
import PropTypes from 'prop-types';

const ColorPickerItem = function ColorPickerItem(props) {
  return (
    <button>
      <img src={props.image}/>
    </button>
  );
};

ColorPickerItem.propTypes = {
  image: PropTypes.string,
};

export default ColorPickerItem;
