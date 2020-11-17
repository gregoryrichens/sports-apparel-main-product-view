import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainView = function MainView(props) {
  const ImageDiv = styled.div`
  height: 100%;
  position: absolute;
  z-index: 0;

  `;

  return (
  <ImageDiv>
    <img src={props.image}/>
  </ImageDiv>
  );
};

MainView.propTypes = {
  image: PropTypes.string,
};

export default MainView;
