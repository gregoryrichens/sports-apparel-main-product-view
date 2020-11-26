import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ExitButton = styled.button`
  visibility: ${({ zoom }) => (zoom ? 'visible' : 'hidden')};
  position: absolute;
  top: 30px;
  right: 20px;
  height: 50px;
  width: 50px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  box-sizing: border-box;
`;

const ExitZoom = function ExitZoomComponent({ setZoom, zoom }) {
  const toggleZoom = function toggleZoom() {
    setZoom(!zoom);
  };

  return (
    <ExitButton zoom={zoom} onClick={() => toggleZoom()}>
      <svg width='2rem' height='2rem' viewBox='0 0 14 24'>
        <path d='M13 6l-6 6 6 6M1 6l6 6-6 6' fill='none' stroke='currentColor' strokeMiterlimit='10' strokeWidth='2' />
      </svg>
    </ExitButton>
  );
};

ExitZoom.propTypes = {
  zoom: PropTypes.bool,
  setZoom: PropTypes.func,
};

export default ExitZoom;
