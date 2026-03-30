import React from 'react';

const PointManager: React.FC = () => {
    const [points, setPoints] = React.useState<Array<{ x: number; y: number }>>([]);

    const addPoint = (x: number, y: number) => {
        setPoints([...points, { x, y }]);
    };

    const fitCurve = () => {
        // Implement curve fitting logic here...
        console.log('Fitting curve to points:', points);
    };

    return (
        <div>
            <h2>Point Manager</h2>
            <button onClick={() => addPoint(Math.random(), Math.random())}>Add Random Point</button>
            <button onClick={fitCurve}>Fit Curve</button>
            <ul>
                {points.map((point, index) => (
                    <li key={index}>({point.x.toFixed(2)}, {point.y.toFixed(2)})</li>
                ))}
            </ul>
        </div>
    );
};

export default PointManager;