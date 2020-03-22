import React from 'react';
import '../styles/App.css';
import LineChart from './LineChart';
import * as d3 from 'd3'
import Line from "./Line"

const data = d3.range(20).map((_, idx) => ({x: idx, y: Math.random()}));

function App() {
  console.log(data)
  return (
    <svg width={800} height={800}>
      <LineChart 
        x={40} 
        y={20} 
        height={200} 
        width={300} 
        data={data} 
        dataline={({d}) => <Line d={d}/>}
      />
    </svg>
  );
}

export default App;
