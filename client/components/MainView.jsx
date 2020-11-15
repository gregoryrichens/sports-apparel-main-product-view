import React from 'react';
import PropTypes from 'prop-types';

const MainView = function MainView(props) {
  return (
  <div>
    <img src={props.image}/>
  </div>
  );
};

MainView.propTypes = {
  image: PropTypes.string,
};

export default MainView;
