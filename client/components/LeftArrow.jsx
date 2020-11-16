import React from 'react';
import PropTypes from 'prop-types';

const LeftArrow = function LeftArrow({ method, index, length }) {
  const decrement = function decrement() {
    if (index === 0) {
      method(length - 1);
    } else {
      method(index - 1);
    }
  };

  return (
    <button onClick={() => decrement()}>
      Left Arrow
      <svg>
      </svg>
    </button>
  );
};

LeftArrow.propTypes = {
  method: PropTypes.func,
  index: PropTypes.number,
  length: PropTypes.number,
};

export default LeftArrow;
