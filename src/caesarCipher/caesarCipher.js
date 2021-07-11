/**
 * Module holding and exporting caesarCipher function.
 * 
 * @module
 */


/**
 * Offsets an alphabetical character using a Caesar Cipher. Returns 
 * non-alphabetical character as is if such is passed in.
 * 
 * @param {char} character Character to encrypt.
 * @param {int} key Key of cipher. Offset applied to character.
 *  
 * @returns Character offset using a Caesar Cipher.
 * 
 * @example
 * let offsetCharacter = caesarCipherCharacter('a', 3);
 * console.log(offsetCharacter) // Logs 'd' in console.
 */
const caesarCipherCharacter = (character, key) => {
    if (character.match(/[a-z]/i)) {
        let code = character.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + key) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + key) % 26) + 97);
        }
    }
    return character;
}


/**
 * Encrypts a string using a Caesar Cipher.
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
    // If key negative, wrap it.
    if (key < 0) {
        return caesarCipher(string, key + 26);
    }

    // Encrypt characters in string.
    let output = "";
    for (let i = 0; i < string.length; i++) {
        output += caesarCipherCharacter(string[i], key);
    }

    return output;
}


export { caesarCipher }