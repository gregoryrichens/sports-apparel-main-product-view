import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RightScroll = styled.button`
  right: 30px;
  visibility: visible;
  background-color: #fff;
  border: 1px solid #000;
  position: absolute;
  height: 50px;
  width: 50px;
  top: 50%;
  margin-top: -25px;
  justify-content: center;
  align-items: center;
  color: #000;
  display: flex;
  margin: 0;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  touch-action: manipulation;
  opacity: 1;
  transition: opacity .4s ease;
`;

const RightArrow = function RightArrow({ method, index, length }) {
  const increment = function increment() {
    if (index === (length - 1)) {
      method(0);
    } else {
      method(index + 1);
    }
  };

  return (
    <RightScroll onClick={() => increment()}>
      Right Arrow
      <svg>
      </svg>
    </RightScroll>
  );
};

RightArrow.propTypes = {
  method: PropTypes.func,
  index: PropTypes.number,
  length: PropTypes.number,
};

export default RightArrow;
