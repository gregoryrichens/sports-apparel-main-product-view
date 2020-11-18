import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LeftScroll = styled.button`
  position: absolute;
  height: 50px;
  width: 50px;
  top 50%;
  margin-top: -25%
  justify-content: center;
  align-items: center;
  color: #000;
  dispaly: flex;
  left: 30px;
  visibility: visible;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  touch-action: manipulation;
  box-sizing: border-box;
  opacity: 1;
  transition: opacity .4s ease;
  user-select: none;
`;

const LeftArrow = function LeftArrow({ method, index, length }) {
  const decrement = function decrement() {
    if (index === 0) {
      method(length - 1);
    } else {
      method(index - 1);
    }
  };

  return (
    <LeftScroll onClick={() => decrement()}>
      Left Arrow
      <svg>
      </svg>
    </LeftScroll>
  );
};

LeftArrow.propTypes = {
  method: PropTypes.func,
  index: PropTypes.number,
  length: PropTypes.number,
};

export default LeftArrow;
