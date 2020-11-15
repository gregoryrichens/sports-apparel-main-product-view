import React from 'react';
import PropTypes from 'prop-types';
import NavBarItem from './NavBarItem.jsx';

const NavBar = function NavBar(props) {
  return (
    <div>
      {props.variant.images.map((image, index) => <NavBarItem image={image} key={index} />)}
    </div>
  );
};

NavBar.propTypes = {
  variant: PropTypes.object,
};

export default NavBar;
