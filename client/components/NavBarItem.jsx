import React from 'react';
import PropTypes from 'prop-types';

const NavBarItem = function NavBarItem({ image, index, method }) {
  const changeIndex = function changeIndex(newIndex) {
    method(newIndex);
  };

  return (
    <button onClick={() => changeIndex(index)}>
      <img src={image}/>
    </button>
  );
};

NavBarItem.propTypes = {
  image: PropTypes.string,
  index: PropTypes.number,
  method: PropTypes.func,
};

export default NavBarItem;
