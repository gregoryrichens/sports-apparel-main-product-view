import React from 'react';
import PropTypes from 'prop-types';

const NavBarItem = function NavBarItem({ image }) {
  return (
    <button>
      <img src={image}/>
    </button>
  );
};

NavBarItem.propTypes = {
  image: PropTypes.string,
  setIndex: PropTypes.func,
  index: PropTypes.number,
};

export default NavBarItem;
