import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainView from './MainView.jsx';
import ColorPicker from './ColorPicker.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import NavBar from './NavBar.jsx';
import Breadcrumbs from './Breadcrumbs.jsx';
import Badge from './Badge.jsx';
import Zoom from './Zoom.jsx';
import GlobalStyle from './GlobalStyles.jsx';

const Content = styled.div`
    width: 100%;
    min-height: 90vh;
    min-width: 0;
    position: relative;
  `;

const TrackPinch = styled.div`
    display: block;
    * {
      box-sizing: border-box;
    }
  `;

const GallerySection = styled.div`
    width: 100%;
    position: relative;
  `;

const TargetGallery = styled.div`
    display: block;
  `;

const ImageViewer = styled.section`
    height: calc(100vh - 300px);
    min-height: 600px;
    max-height: 2000px;
    width: 100%;
    position: relative;
    user-select: none;
  `;

const Expander = styled.div`
    height: calc(100vh - 300px);
    min-height: 600px;
    max-height: 2000px;
    width: 100%;
    overflow-x: inherit;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #eceeef;
    display: flex;
    justify-content: center;
    overflow: hidden;
  `;

const FixedWidth = styled.div`
  width: 100%;
  backface-visibility: hidden;
  position: relative;
`;

const App = function App({ data }) {
  const [currIndex, setCurrIndex] = useState(0);
  const [variant, setVariant] = useState(0);
  const [zoom, setZoom] = useState(false);

  const changeIndex = function changeIndex(newIndex) {
    setCurrIndex(newIndex);
  };

  const changeVariant = function changeVariant(newVariant) {
    setVariant(newVariant);
  };

  return (
    <Content>
      <GlobalStyle/>
      <TrackPinch>
        <GallerySection>
          <Breadcrumbs/>
          <TargetGallery>
            <ImageViewer>
              <Expander className="Expander">
                <MainView
                  images={data.variants[variant].images}
                  currIndex={currIndex}
                  zoom={zoom}
                  setZoom={setZoom}
                />
                <LeftArrow
                  method={changeIndex}
                  index={currIndex}
                  length={data.variants[variant].images.length}
                  zoom={zoom}
                />
                <RightArrow
                  method={changeIndex}
                  index={currIndex}
                  length={data.variants[variant].images.length}
                  zoom={zoom}
                />
                <NavBar
                  variant={data.variants[variant]}
                  currIndex={currIndex}
                  method={changeIndex}
                  zoom={zoom}
                />
                <Badge />
              </Expander>
            </ImageViewer>
          </TargetGallery>
        </GallerySection>
        <Zoom
          images={data.variants[variant].images}
          currIndex={currIndex}
          zoom={zoom}
          setZoom={setZoom}
        />
      </TrackPinch>
      <FixedWidth>
        <ColorPicker variants={data.variants} method={changeVariant} currentVariant={variant}/>
      </FixedWidth>
    </Content>
  );
};

App.propTypes = {
  data: PropTypes.object,
};

export default App;

// const incrementIndex = useCallback(() => {
//   let newIndex;
//   // if index + 1 equals the length of the images array set it to 0
//   if ((currIndex + 1) === data.variants[variant].images.length) {
//     newIndex = 0;
//   } else {
//     newIndex = currIndex + 1;
//   }
//   setCurrIndex(newIndex);
// }, [currIndex]);

// const decrementIndex = useCallback(() => {
//   let newIndex;
//   // if index + 1 equals the length of the images array set it to 0
//   if ((currIndex - 1) < 0) {
//     newIndex = data.variants[variant].images.length - 1;
//   } else {
//     newIndex = currIndex - 1;
//   }
//   setCurrIndex(newIndex);
// }, [currIndex]);

// const changeIndex = useCallback((index) => {
//   setCurrIndex(index);
// }, []);

// const changeVariant = useCallback((index) => {
//   setVariant(index);
// }, []);
