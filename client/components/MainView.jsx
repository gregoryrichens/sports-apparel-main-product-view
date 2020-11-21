import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// conditionally render cursor based on zoom state
// add an onClick event to this component below that toggles zoom state
const Views = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    touch-action: pan-y;
    left: 0;
    top: 0;
    visibility: visible;
    cursor: ${({ zoom, inCursor, outCursor }) => (zoom
    ? `url(${outCursor})`
    : `url(${inCursor})`)}, auto;
  `;

// conditionally set overflow to scroll based on zoom
const View = styled.div`
  overflow: ${({ zoom }) => (zoom ? 'scroll' : 'hidden')};
  height: 100%;
  min-width: 100%;
  background-color: #eceeef;
  visibility: visible;
  position: relative;
  text-align: center;
  transform: translateX(-${({ currIndex }) => (currIndex * 100)}%);
  transition: transform 1s;
`;

// conditionally set based on zoom
// transform: scale(4);
// transform-origin: top left
const MainImage = styled.img`
  position: absolute;
  height: 100%;
  min-width: 600px;
  visibility: visible;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  ${({ zoom }) => zoom
  && `transform: scale(2.5);
  transform-origin: top left;
  `}
`;

// render all images
const MainView = function MainView({
  images,
  currIndex,
  zoom,
  setZoom,
}) {
  const toggleZoom = function toggleZoom() {
    setZoom(!zoom);
  };

  return (
  <Views inCursor={'/cursor-zoom.png'} outCursor={'/cursor-zoomed.png'} zoom={zoom} onClick={() => toggleZoom()}>
    {images.map((image, i) => (
      <View zoom={zoom} key={i} currIndex={currIndex} index={i}>
        <MainImage
          src={image}
          zoom={zoom}
        />
      </View>
    ))}
  </Views>
  );
};

MainView.propTypes = {
  images: PropTypes.array,
  currIndex: PropTypes.number,
  zoom: PropTypes.bool,
  setZoom: PropTypes.func,
};

export default MainView;
