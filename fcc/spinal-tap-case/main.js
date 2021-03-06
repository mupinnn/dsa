/**
 * Spinal Case
 *
 * Conver a string to spinal case. Spinal case is all-lowercase-words-
 * joined-by-dashes.
 *
 * @param {string} str A string that you want to convert to spinal-case
 * @returns {string} spinal-cased string
 */
function spinalCase(str) {
  return str
    .split(/(?=[A-Z])|_|\s/)
    .join("-")
    .toLowerCase();
}

module.exports = spinalCase;
