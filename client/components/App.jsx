import React from 'react';
import MainView from './MainView.jsx';
import ColorPicker from './ColorPicker.jsx';

const App = function App(props) {
  return (
    <div>
      <p>Is this your {props.data}?!</p>
      <div>
        <MainView />
      </div>
      <div>
        <ColorPicker />
      </div>
    </div>
  );
};

export default App;
