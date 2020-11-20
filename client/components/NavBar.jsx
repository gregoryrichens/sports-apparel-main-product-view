import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBarItem from './NavBarItem.jsx';

const Pagination = styled.div`
  display: flex;
  align-items: baseline;
  visibility: visible;
  bottom: 40px;
  pointer-events: all;
  position: absolute;
  opacity: 1;
  transition: opacity .4s ease;
`;

const NavBar = function NavBar({ currIndex, variant, method }) {
  const changeIndex = function changeIndex(newIndex) {
    method(newIndex);
  };

  return (
    <Pagination>
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
};

export default NavBar;
