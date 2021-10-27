/**
 * Sum All Number in a Range
 *
 * Passed an array of two numbers, return the sum of all
 * the numbers between them. The lowest number will not always
 * come first.
 *
 * Example:
 * arr = [4, 1]
 * should return 10, because sum off all the numbers between
 * 1 and 4 (both inclusive) is 10.
 *
 * (4 + 3 + 2 + 1) = 10
 * (1 + 2 + 3 + 4) = 10
 *
 * @param {number[]} arr - Array of two numbers
 * @returns {number} The sum of all the numbers between
 *                   arr[0] to ar[1] (both inclusive)
 */
function sumAll(arr) {
  let result = 0;
  // sort the array to easily iterate it.
  let sorted = arr.sort((a, b) => a - b);
  let min = sorted[0];
  let max = sorted[1];

  for (min; min <= max; min++) {
    result += min;
  }

  return result;
}

module.exports = sumAll;
