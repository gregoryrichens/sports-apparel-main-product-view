import React from 'react';
import PropTypes from 'prop-types';
import NavBarItem from './NavBarItem.jsx';

const NavBar = function NavBar({ variant, method }) {
  const changeIndex = function changeIndex(newIndex) {
    method(newIndex);
  };

  return (
    <div>
      {variant.images.map((image, index) => <NavBarItem
        image={image}
        key={index}
        index={index}
        method={changeIndex}/>)}
    </div>
  );
};

NavBar.propTypes = {
  variant: PropTypes.object,
  method: PropTypes.func,
};

export default NavBar;
