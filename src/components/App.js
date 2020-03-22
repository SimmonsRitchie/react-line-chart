import React from 'react';
import '../styles/App.css';
import LineChart from './LineChart';

function App() {
  return (
    <svg width={800} height={800}>
      <LineChart height={200} width={300} />
    </svg>
  );
}

export default App;
