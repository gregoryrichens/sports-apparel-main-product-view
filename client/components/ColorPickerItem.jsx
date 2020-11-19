import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Color = styled.a`
  margin-left: ${({ index }) => ((index === 0) && '20px')};
  height: 60px;
  width: 60px;
  margin-right: 10px;
  background-color: #ebedee;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  text-decoration: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  touch-action: manipulation;
  &::after {
    content: "";
    width: 100%;
    position: absolute;
    background: #000;
    bottom: 0;
    left: 0;
    height: ${({ index, currentVariant }) => ((currentVariant === index) && '3px')};
  }
`;

const ColorPic = styled.img`
  height: 100%;
  width: 100%;
  }
`;

const Selected = styled.div`
  dispaly: flex;
  position: absolute;
  right: -6px;
  top: -6px;
  width: 24px;
  height 24px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Check = styled.svg`
  display: inline-block;
  height: 24px;
  vertical-align: text-top;
  width: 24px;
`;

const ColorPickerItem = function ColorPickerItem({
  currentVariant, image, index, method,
}) {
  const changeVariant = function changeVariant(newVariant) {
    method(newVariant);
  };

  return (
    <Color index={index} currentVariant={currentVariant} className='color' onClick={() => changeVariant(index)}>
      { index === currentVariant
        && <Selected>
            <Check id="checkbox-checkmark" viewBox="0 0 16 24">
              <title>checkbox-checkmark</title>
              <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M1 13l4 4L15 7"></path>
            </Check>
          </Selected>
      }
      <ColorPic src={image} className={ index === currentVariant ? 'selected' : 'normal' }/>
    </Color>
  );
};

ColorPickerItem.propTypes = {
  image: PropTypes.string,
  index: PropTypes.number,
  method: PropTypes.func,
  currentVariant: PropTypes.number,
};

// &:after {
//   content: "";
//   width: 100%;
//   position: absolute;
//   background: #000;
//   bottom: 0;
//   left: 0;
//   height: 3px;
// }

export default ColorPickerItem;
