import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MainView from './MainView.jsx';
import ColorPicker from './ColorPicker.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import NavBar from './NavBar.jsx';

// would need to add a fetch method
// state for index
// state for current variant
// state for products

const App = function App({ data }) {
  const [currIndex, setCurrIndex] = useState(0);
  const [variant, setVariant] = useState(0);

  // const fetchProduct = function fetchProduct() {
  //   axios.get('/oneProduct')
  //     .then((response) => {
  //       setProduct(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <div>
      <p>you have no chance to survive make your time ha ha ha</p>
      <div>
        {/* consumes current products[current variant][index] */}
        <MainView image={data.variants[variant].images[currIndex]}/>
        {/* consumes method for decrementing index state */}
        <LeftArrow />
        {/* consumes method for incrementing index state */}
        <RightArrow />
        {/* consumes products[current variant] && index */}
        <NavBar variant={data.variants[variant]} index={currIndex}/>
      </div>
      <div>
        {/* consumes prdoucts and displays image 0 for each */}
        <ColorPicker variants={data.variants}/>
      </div>
    </div>
  );
};

App.propTypes = {
  data: PropTypes.object,
};

export default App;
