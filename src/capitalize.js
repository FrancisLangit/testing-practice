/**
 * @module
 */

/**
 * Returns a string with its first character capitalized.
 * 
 * @param {string} string String to capitalize first character of. 
 * @returns {string} String passed with first character in uppercase.
 * 
 * @example 
 * let eminem = capitalize("slim shady");
 * console.log(eminem); // Will log "Slim shady" in console.
 */
const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
}


export { capitalize }