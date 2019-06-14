import React from 'react';
import './App.css';

function App() {
  const main = new Date().toTimeString();
  return (
    <div className="App">
      {main}
    </div>
  );
}

export default App;
