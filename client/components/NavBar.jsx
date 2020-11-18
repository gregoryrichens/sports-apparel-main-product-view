import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBarItem from './NavBarItem.jsx';

const Pagination = styled.div`
  visibility: visible;
  bottom: 40px;
  pointer-events: all;
  position: absolute;
  opacity: 1;
  transition: opacity .4s ease;
`;

const NavBar = function NavBar({ variant, method }) {
  const changeIndex = function changeIndex(newIndex) {
    method(newIndex);
  };

  return (
    <Pagination>
      {variant.images.map((image, index) => <NavBarItem
        image={image}
        key={index}
        index={index}
        method={changeIndex}/>)}
    </Pagination>
  );
};

NavBar.propTypes = {
  variant: PropTypes.object,
  method: PropTypes.func,
};

export default NavBar;
