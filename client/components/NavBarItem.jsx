import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Thumbnail = styled.button`
  width: 24px;
  height: 24px;
  margin: 5px;
  border-left: none;
  border-top: none;
  border-right: none;
  border-bottom: 1px solid #000;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  touch-action: manipulation;
  box-sizing: border-box;
  visibility: visible;
`;

const ThumbnailImage = styled.img`
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  box-sizing: border-box;
  visibility: visible;
  pointer-events: all;
  transition: transform .2s ease;
  transform: translateY(100%);
  .Expander:hover &{
    transform: translateY(0);
  }
`;

const NavBarItem = function NavBarItem({ image, index, method }) {
  const changeIndex = function changeIndex(newIndex) {
    method(newIndex);
  };

  return (
    <Thumbnail onClick={() => changeIndex(index)}>
      <ThumbnailImage src={image}/>
    </Thumbnail>
  );
};

NavBarItem.propTypes = {
  image: PropTypes.string,
  index: PropTypes.number,
  method: PropTypes.func,
};

export default NavBarItem;
