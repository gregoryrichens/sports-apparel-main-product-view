import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainView from './MainView.jsx';
import ColorPicker from './ColorPicker.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import NavBar from './NavBar.jsx';

const Content = styled.div`
    width: 100%;
    min-height: 100vh;
    min-width: 0;
    position: relative;
  `;

const TrackPinch = styled.div`
    display: block;
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
    max-heigth: 2000px;
    width: 100%;
    position: relative;
    user-select: none;
  `;

const Expander = styled.div`
    height: calc(100vh - 300px);
    min-height: 600px;
    max-heigth: 2000px;
    width: 100%;
    overflow-x: inherit;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #edeff0;
    display: flex;
    justify-content: center;
  `;

const App = function App({ data }) {
  const [currIndex, setCurrIndex] = useState(0);
  const [variant, setVariant] = useState(0);

  const changeIndex = function changeIndex(newIndex) {
    setCurrIndex(newIndex);
  };

  const changeVariant = function changeVariant(newVariant) {
    setVariant(newVariant);
  };

  return (
    <Content>
      <TrackPinch>
        <GallerySection>
          <p>you have no chance to survive make your time ha ha ha</p>
          <TargetGallery>
            <ImageViewer>
              <Expander>
                <MainView image={data.variants[variant].images[currIndex]}/>
                <LeftArrow
                  method={changeIndex}
                  index={currIndex}
                  length={data.variants[variant].images.length}
                />
                <RightArrow
                  method={changeIndex}
                  index={currIndex}
                  length={data.variants[variant].images.length}
                />
                <NavBar
                  variant={data.variants[variant]}
                  index={currIndex}
                  method={changeIndex}
                />
              </Expander>
            </ImageViewer>
          </TargetGallery>
        </GallerySection>
      </TrackPinch>
      <div>
        <ColorPicker variants={data.variants} method={changeVariant}/>
      </div>
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
