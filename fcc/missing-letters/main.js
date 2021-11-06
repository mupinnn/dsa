/**
 * Missing Letters
 *
 * Find the missing letters in the passed letter range and return it.
 *
 * If all letters are present in the range, return undefined.
 *
 * @param {string} str - Letter range.
 * @returns {string} The missing letter if found. If all letters are present,
 *                   return `undefined`.
 */
function missingLetters(str) {
  // Solution 1
  // const aToZ = [...Array(26).keys()].map((n) =>
  //   String.fromCharCode(n + 65).toLowerCase()
  // );
  // const start = aToZ.indexOf(str[0]);
  // const end = aToZ.indexOf(str[str.length - 1]) + 1;
  // const range = aToZ.slice(start, end);

  // for (let i = 0; i < range.length; i++) {
  //   if (range[i] !== str[i]) {
  //     return range[i];
  //   }
  // }

  // return undefined;

  // Solution 2 (more simple)
  // Utilizing `String.prototype.charCodeAt()` and `String.fromCharCode()`.
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }

  return undefined;
}

module.exports = missingLetters;
