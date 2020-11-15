import React from 'react';
import PropTypes from 'prop-types';

const RightArrow = function RightArrow() {
  return (
    <button>
      {/* method for decrementing index inserted into button's onClick */}
      Right Arrow
      <svg>
      </svg>
    </button>
  );
};

RightArrow.propTypes = {
  increment: PropTypes.function,
};

export default RightArrow;
