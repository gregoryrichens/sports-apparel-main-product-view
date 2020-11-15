import React from 'react';
import PropTypes from 'prop-types';

const NavBarItem = function NavBarItem(props) {
  return (
    <button>
      <img src={props.image}/>
    </button>
  );
};

NavBarItem.propTypes = {
  image: PropTypes.string,
};

export default NavBarItem;
