import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ExitZoom from './ExitZoom.jsx';
// need to import an 'x' button;

const ImageZoom = styled.div`
  display: ${({ zoom }) => (zoom ? 'block' : 'none')};
  background-color: #eceeef;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 500;
  cursor: url(https://www.adidas.com/glass/react/2f4232c/assets/img/icon-adidas-cursor-zoomed.png) 24 24, auto;
`;

const Slider = styled.div`
  width: 2500px;
  height: 2500px;
  transform: ${({ xPos, yPos }) => `translate(-${xPos}%, -${yPos}%)`};
  transform-origin: top left;
`;

const ZoomImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Zoom = function ZoomComponent({
  images,
  zoom,
  currIndex,
  setZoom,
}) {
  const [xPos, setX] = useState(50);
  const [yPos, setY] = useState(50);
  const toggleZoom = function toggleZoom() {
    setZoom(!zoom);
  };

  return (
    <ImageZoom zoom={zoom}>
      <Slider xPos={xPos} yPos={yPos} onMouseMove={(e) => {
        const xPer = (e.nativeEvent.clientX / window.innerWidth) * 100;
        setX(xPer);
        const yPer = (e.nativeEvent.clientY / window.innerHeight) * 100;
        setY(yPer);
      }} onClick={() => toggleZoom()}>
        <ZoomImage src={images[currIndex]} />
      </Slider>
      <ExitZoom zoom={zoom} setZoom={setZoom}/>
    </ImageZoom>
  );
};

Zoom.propTypes = {
  images: PropTypes.array,
  currIndex: PropTypes.number,
  zoom: PropTypes.bool,
  setZoom: PropTypes.func,
};

export default Zoom;
