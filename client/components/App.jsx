import React from 'react';
import PropTypes from 'prop-types';
import MainView from './MainView.jsx';
import ColorPicker from './ColorPicker.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import NavBar from './NavBar.jsx';

// would need to add a fetch method
// state for index
// state for current variant
// state for products

const App = function App(props) {
  return (
    <div>
      <p>You have no chance to survive make your time</p>
      <div>
        {/* consumes current products[current variant][index] */}
        <MainView image={props.data.variants[0].images[0]}/>
        {/* consumes method for decrementing index state */}
        <LeftArrow />
        {/* consumes method for incrementing index state */}
        <RightArrow />
        {/* consumes products[current variant] && index */}
        <NavBar variant={props.data.variants[0]} index={0}/>
      </div>
      <div>
        {/* consumes prdoucts and displays image 0 for each */}
        <ColorPicker variants={props.data.variants}/>
      </div>
    </div>
  );
};

App.propTypes = {
  data: PropTypes.object,
};

export default App;
