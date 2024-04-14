import React from 'react';
import Terminal from './components/Terminal';
import Navigation from './components/Navigation';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Terminal />
    </div>
  );
}

export default App;
