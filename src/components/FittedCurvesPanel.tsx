import React from 'react';

interface FittedCurveProps {
  results: Array<{ x: number; y: number }>;
  equation: string;
}

const FittedCurvesPanel: React.FC<FittedCurveProps> = ({ results, equation }) => {
  return (
    <div>
      <h2>Fitted Curve Results</h2>
      <div>
        <h3>Equation: {equation}</h3>
        <svg width="400" height="300">
          {/* SVG logic to display fitted curves can be implemented here */}
          {/* This is a placeholder for the curve visualization */}
        </svg>
        <ul>
          {results.map((result, index) => (
            <li key={index}>x: {result.x}, y: {result.y}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FittedCurvesPanel;
