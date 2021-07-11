/**
 * Module containing and exporting calculator object.
 * 
 * @module
 */


/**
 * Namespace of calculator object in calculator.js.
 * 
 * @namespace
 */
const calculator = {
    /**
     * Returns the sum of two numbers.
     * 
     * @param {number} numberA First addend.
     * @param {number} numberB Second addend.
     * 
     * @returns {number} Sum of two numbers.
     */
    add: (numberA, numberB) => numberA + numberB,
    

    /**
     * Returns the difference of two numbers.
     * 
     * @param {number} numberA Minuend.
     * @param {number} numberB Subtrahend.
     * 
     * @returns {number} Difference of two numbers.
     */
    subtract: (numberA, numberB) => numberA - numberB,
    

    /**
     * Returns the product of two numbers.
     * 
     * @param {number} numberA First factor.
     * @param {number} numberB Second factor.
     * 
     * @returns {number} Product of two numbers.
     */
    multiply: (numberA, numberB) => numberA * numberB,
    
    
    /**
     * Returns the quotient of two numbers.
     * 
     * @param {number} numberA First quotient.
     * @param {number} numberB Second quotient.
     * 
     * @returns {number} Quotient of two numbers.
     */
    divide: (numberA, numberB) => numberA / numberB,
}


export { calculator }