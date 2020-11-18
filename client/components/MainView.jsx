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

const View = styled.div`
  overflow: hidden;
  height: 100%;
  min-width: 100%;
  background-color: #edeff0;
  visibility: visible;
  position: relative;
  left: -100%;
  text-align: center;
`;

const MainImage = styled.img`
  position: absolute;
  height: 100%;
  visibility: visible;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;
`;

const MainView = function MainView(props) {
  return (
  <Views>
    <View>
      <MainImage
        src={props.image}
        sizes={'(max-width: 840px) 840px'}
        srcset={`${props.image} 840w`}
      />
    </View>
  </Views>
  );
};

MainView.propTypes = {
  image: PropTypes.string,
};

export default MainView;
