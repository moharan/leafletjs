import React from 'react';
import './App.css';
import Map from './map';

function App() {
  const main = new Date().toTimeString();
  return (
    <div className="App">
      {main}
      <Map/>
    </div>
  );
}

export default App;
