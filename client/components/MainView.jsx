import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  `;

// this is the image wrapper and needs the transition on it
// transition -100 * index %
const View = styled.div`
  overflow: hidden;
  height: 100%;
  min-width: 100%;
  background-color: #eceeef;
  visibility: visible;
  position: relative;
  text-align: center;
  transform: translateX(-${({ currIndex }) => (currIndex * 100)}%);
  transition: transform 1s;
`;

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
`;

// render all images
const MainView = function MainView({ images, currIndex }) {
  return (
  <Views>
    {images.map((image, i) => (
      <View key={i} currIndex={currIndex} index={i}>
        <MainImage
          src={image}
        />
      </View>
    ))}
  </Views>
  );
};

MainView.propTypes = {
  images: PropTypes.array,
  currIndex: PropTypes.number,
};

export default MainView;
