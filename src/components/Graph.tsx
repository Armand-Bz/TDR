import React from 'react';
import Plot from 'react-plotly.js';

const Graph = () => {
  const data = [
    {
      x: [1, 2, 3, 4, 5],
      y: [2, 3, 5, 4, 6],
      type: 'scatter',
      mode: 'lines+points',
      marker: {color: 'red'},
    },
  ];

  const layout = {
    title: 'Interactive Graph',
    xaxis: {
      title: 'X Axis',
    },
    yaxis: {
      title: 'Y Axis',
    },
  };

  return <Plot data={data} layout={layout} />;
};

export default Graph;