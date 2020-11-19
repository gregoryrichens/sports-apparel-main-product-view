import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App.jsx';

// const dummyData = require('../dummyData.js');

axios.get('/oneProduct')
  .then((response) => {
    ReactDOM.render(<App data={response.data[0]}/>, document.getElementById('app'));
  })
  .catch((error) => console.log(error));

// ReactDOM.render(<App data={dummyData}/>, document.getElementById('app'));
