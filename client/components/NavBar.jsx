import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBarItem from './NavBarItem.jsx';

// toggle visibility based on zoom
const Pagination = styled.div`
  display: ${({ zoom }) => (zoom === true ? 'none' : 'flex')};
  align-items: baseline;
  visibility: visible;
  bottom: 40px;
  pointer-events: all;
  position: absolute;
  opacity: 1;
  transition: opacity .4s ease;
`;

const NavBar = function NavBar({
  zoom,
  currIndex,
  variant,
  method,
}) {
  const changeIndex = function changeIndex(newIndex) {
    method(newIndex);
  };

  return (
    <Pagination zoom={zoom}>
      {variant.images.map((image, index) => <NavBarItem
        image={image}
        key={index}
        index={index}
        currIndex={currIndex}
        method={changeIndex}/>)}
    </Pagination>
  );
};

NavBar.propTypes = {
  variant: PropTypes.object,
  method: PropTypes.func,
  currIndex: PropTypes.number,
  zoom: PropTypes.bool,
};

export default NavBar;
