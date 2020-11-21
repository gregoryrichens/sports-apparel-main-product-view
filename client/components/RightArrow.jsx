import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// toggle visibility based on zoom;
const RightScroll = styled.button`
  position: absolute;
  right: 30px;
  height: 50px;
  width: 50px;
  top: 50%;
  margin-top: -25px;
  justify-content: center;
  align-items: center;
  color: #000;
  display: flex;
  visibility: ${({ zoom }) => (zoom ? 'hidden' : 'visible')};
  background-color: #fff;
  border: 1px solid #000;
  margin: 0;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  touch-action: manipulation;
  opacity: 1;
  transition: opacity .4s ease;
  user-select: none;
  cursor: pointer;
`;

const RightArrow = function RightArrow({
  zoom,
  method,
  index,
  length,
}) {
  const increment = function increment() {
    if (index === (length - 1)) {
      method(0);
    } else {
      method(index + 1);
    }
  };

  return (
    <RightScroll zoom={zoom} onClick={() => increment()}>
      <svg id='arrow-right-long' width='1.5rem' height='1.5rem' viewBox='0 0 24 24'>
        <title>arrow-right-long</title>
        <path d='M17.59 7l5 5-5 5M0 12h22' fill='none' stroke='currentColor' strokeMiterlimit='10' strokeWidth='2'>
        </path>
      </svg>
    </RightScroll>
  );
};

RightArrow.propTypes = {
  method: PropTypes.func,
  index: PropTypes.number,
  length: PropTypes.number,
  zoom: PropTypes.bool,
};

export default RightArrow;
