import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Color = styled.a`
  margin-left: 20px;
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
`;

const ColorPic = styled.img`
  height: 100%;
  width: 100%;
`;

const ColorPickerItem = function ColorPickerItem({ image, index, method }) {
  const changeVariant = function changeVariant(newVariant) {
    method(newVariant);
  };

  return (
    <Color onClick={() => changeVariant(index)}>
      <ColorPic src={image}/>
    </Color>
  );
};

ColorPickerItem.propTypes = {
  image: PropTypes.string,
  key: PropTypes.number,
  index: PropTypes.number,
  method: PropTypes.func,
};

export default ColorPickerItem;
