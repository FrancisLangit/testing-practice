/**
 * Module containing and exporting reverseString function. Utilizes esrever
 * library as a development dependency.
 * 
 * @module
 */


import esrever from 'esrever';


/**
 * Returns a reversed version of the string passed to it.
 * 
 * @param {string} string String to reverse.
 * @returns {string} Reversed version of the string passed.
 * 
 * @example
 * let reversedString = reverseString("foo 𝌆 bar mañana mañana");
 * 
 * console.log(reversedString); // Logs "anañam anañam rab 𝌆 oof" in console.
 */
const reverseString = (string) => {
    return esrever.reverse(string);
}


export { reverseString }