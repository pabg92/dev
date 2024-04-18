import React from 'react';
import Terminal from './components/Terminal';  // Correct path to Terminal.js
import Navigation from './components/Navigation';  // Correct path to Navigation.js
import './css/App.css';  // Assuming App.css is under the css directory within the same folder

function App() {
  return (
    <div className="App">
      <Navigation />
      <Terminal />
    </div>
  );
}

export default App;
#
