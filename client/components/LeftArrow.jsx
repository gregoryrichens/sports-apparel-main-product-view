import React from 'react';
import PropTypes from 'prop-types';

const LeftArrow = function LeftArrow() {
  return (
    <button>
      Left Arrow
      <svg>
      </svg>
    </button>
  );
};

LeftArrow.propTypes = {
  decrement: PropTypes.func,
};

export default LeftArrow;
