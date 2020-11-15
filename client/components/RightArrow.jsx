import React from 'react';
import PropTypes from 'prop-types';

const RightArrow = function RightArrow() {
  return (
    <button>
      Right Arrow
      <svg>
      </svg>
    </button>
  );
};

RightArrow.propTypes = {
  increment: PropTypes.func,
};

export default RightArrow;
