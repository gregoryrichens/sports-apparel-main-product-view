import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// toggle visibility based on zoom
const LeftScroll = styled.button`
  position: absolute;
  left: 30px;
  height: 50px;
  width: 50px;
  top 50%;
  margin-top: -25px;
  justify-content: center;
  align-items: center;
  color: #000;
  dispaly: flex;
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

const LeftArrow = function LeftArrow({
  zoom,
  method,
  index,
  length,
}) {
  const decrement = function decrement() {
    if (index === 0) {
      method(length - 1);
    } else {
      method(index - 1);
    }
  };

  return (
    <LeftScroll zoom={zoom} onClick={() => decrement()}>
      <svg width='1.5rem' height='1.5rem' id='arrow-left-long' viewBox='0 0 24 24'>
        <title>arrow-left-long</title>
        <path fill='none' stroke='currentColor' strokeMiterlimit='10' strokeWidth='2' d='M6.4 17l-5-5 5-5M2 12h22'></path>
      </svg>
    </LeftScroll>
  );
};

LeftArrow.propTypes = {
  method: PropTypes.func,
  index: PropTypes.number,
  length: PropTypes.number,
  zoom: PropTypes.bool,
};

export default LeftArrow;
