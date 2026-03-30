import { create, all } from 'mathjs';

const math = create(all);

/**
 * Parses a mathematical equation and returns its expression.
 * @param equation - The mathematical equation as a string.
 * @returns The parsed expression.
 */
export const parseEquation = (equation) => {
    return math.parse(equation);
};

/**
 * Evaluates a mathematical equation and returns the result.
 * @param equation - The mathematical equation as a string.
 * @returns The evaluated result.
 */
export const evaluateEquation = (equation) => {
    return math.evaluate(equation);
};

/**
 * Generates points for a given equation in a specified range.
 * @param equation - The mathematical equation as a string.
 * @param start - The start of the range.
 * @param end - The end of the range.
 * @param step - The step increment for generating points.
 * @returns An array of points representing the equation's values in the range.
 */
export const generateEquationPoints = (equation, start, end, step) => {
    const points = [];
    for (let x = start; x <= end; x += step) {
        points.push({ x: x, y: evaluateEquation(equation.replace('x', x)) });
    }
    return points;
};