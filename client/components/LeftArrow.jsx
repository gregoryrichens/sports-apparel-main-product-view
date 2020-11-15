import React from 'react';
import PropTypes from 'prop-types';

const LeftArrow = function LeftArrow() {
  return (
    <button>
      {/* method for decrementing index inserted into button's onClick */}
      Left Arrow
      <svg>
      </svg>
    </button>
  );
};

LeftArrow.propTypes = {
  decrement: PropTypes.function,
};

export default LeftArrow;
