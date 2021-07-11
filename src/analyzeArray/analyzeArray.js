/**
 * Module containing and exporting analyzeArray function.
 * 
 * @module
 */


/**
 * Takes an array of numbers returns an object with the average, min, max, and
 * length of numbers in such array.
 * 
 * @param {Array} array Array of integers to be analyzed.
 * 
 * @returns {Object} Object with average, min, max, and length of numbers.
 * 
 * @example
 * let analyzedArray = analyzeArray([1,8,3,4,2,6]);
 * 
 * // Logs "{ average: 4, min: 1, max: 8, length: 6 }" in console.
 * console.log(analyzedArray);
 */
const analyzeArray = (array) => {
    return {
        'average': array.reduce((p, c) => p + c, 0) / array.length,
        'min': Math.min(...array),
        'max': Math.max(...array),
        'length': array.length,
    };
}


export { analyzeArray }