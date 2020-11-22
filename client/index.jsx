import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App.jsx';

// const dummyData = require('../dummyData.js');
const url = (document.URL);
const parseURL = url.split('/');
const itemID = parseURL[parseURL.length - 1];

const addressBarID = Number(itemID);

const productID = addressBarID || 21;

axios.get(`/api/products/${productID}/trackpinch`)
  .then((response) => {
    ReactDOM.render(<App data={response.data[0]}/>, document.getElementById('TrackPinch'));
  })
  .catch((error) => console.log(error));

// ReactDOM.render(<App data={dummyData}/>, document.getElementById('app'));
