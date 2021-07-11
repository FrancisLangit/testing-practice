/**
 * Module holding and exporting caesarCipher function.
 * 
 * @module
 */


/**
 * Encrypts a string using a caesar cipher.
 * 
 * @param {string} string String to encrypt. 
 * @param {int} key Key of cipher. Offset applied to each letter in string.
 * 
 * @returns String encrypted using a caesar cipher.
 * 
 * @example
 * let string = "I'm the real slim shady.";
 * let encryptedString = caesarCipher(string, 13);
 * 
 * // Logs "v'z gur erny fyvz funql." in console.
 * console.log(encryptedString); 
 */
const caesarCipher = (string, key) => {
    // Wrap the amount
    if (key < 0) {
        return caesarCipher(string, key + 26);
    }

    // Make an output variable
    var output = "";

    // Go through each character
    for (var i = 0; i < string.length; i++) {
        // Get the character we'll be appending
        var c = string[i];

        // If it's a letter...
        if (c.match(/[a-z]/i)) {
            // Get its code
            var code = string.charCodeAt(i);

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + key) % 26) + 65);
            }

            // Lowercase letters
            else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + key) % 26) + 97);
            }
        }

        // Append
        output += c;
    }

    // All done!
    return output;
}


export { caesarCipher }