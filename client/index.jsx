import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const dummyData = require('../dummyData.js');

ReactDOM.render(<App data={dummyData}/>, document.getElementById('app'));
