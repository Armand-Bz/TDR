import React, { useState } from 'react';

const EquationInput = () => {
    const [equation, setEquation] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [helpText, setHelpText] = useState('');

    const validateEquation = (eq: string) => {
        // Add your validation logic here. This is a dummy validation.
        const isValidEquation = /^\d+([+\-*/]\d+)*$/.test(eq);
        setIsValid(isValidEquation);
        setHelpText(isValidEquation ? '' : 'Please enter a valid equation.');
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newEquation = event.target.value;
        setEquation(newEquation);
        validateEquation(newEquation);
    };

    return (
        <div>
            <textarea
                value={equation}
                onChange={handleChange}
                placeholder="Enter your equation here..."
            />
            {!isValid && <div style={{ color: 'red' }}>{helpText}</div>}
        </div>
    );
};

export default EquationInput;