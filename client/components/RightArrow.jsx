import React from 'react';
import PropTypes from 'prop-types';

const RightArrow = function RightArrow({ method, index, length }) {
  const increment = function increment() {
    if (index === (length - 1)) {
      method(0);
    } else {
      method(index + 1);
    }
  };

  return (
    <button onClick={() => increment()}>
      Right Arrow
      <svg>
      </svg>
    </button>
  );
};

RightArrow.propTypes = {
  method: PropTypes.func,
  index: PropTypes.number,
  length: PropTypes.number,
};

export default RightArrow;
