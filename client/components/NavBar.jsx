import React from 'react';
import PropTypes from 'prop-types';
import NavBarItem from './NavBarItem.jsx';

const NavBar = function NavBar({ variant }) {
  return (
    <div>
      {variant.images.map((image, index) => <NavBarItem
        image={image}
        key={index} />)}
    </div>
  );
};

NavBar.propTypes = {
  variant: PropTypes.object,
  setIndex: PropTypes.func,
};

export default NavBar;
