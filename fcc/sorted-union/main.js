/**
 *  Sorted Union
 *
 * Function that take two or more arrays and returns a new array of unique
 * values in the order of the original provided arrays.
 *
 * The unique numbers should be sorted by their original order, but the final
 * array should not be sorted in numerical order.
 *
 * Example:
 * `uniteUnique([1, 2, 3], [3, 6], [4, 5])`
 * will return [1, 2, 3, 6, 4, 5]
 *
 * @param  {...any[]} arr - Array of arguments.
 * @returns {[]} Uniqe value of each array from arguments.
 */
function uniteUnique(...arr) {
  // Merge all arguments into single array, then apply `Set()` to make it unique.
  return [...new Set(arr.reduce((acc, curr) => acc.concat(curr)))];
}

module.exports = uniteUnique;
