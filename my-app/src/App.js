import React from 'react';
import './App.css';
import Title from './Title';
import Map from './Map/index';

function App() {
  const main = new Date().toTimeString();
  return (
    <div className="App">
      {main}
      <Title/>
      <Map/>
    </div>
  );
}

export default App;
