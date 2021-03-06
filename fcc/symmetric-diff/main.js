/**
 * Diff Two Arrays - Symmetric Difference
 *
 * Compare two arrays and a new array with any items only found
 * in one of the two given arrays, but not both. In other words,
 * return the symmetric difference of the two arrays.
 *
 * Example:
 * arr1 = [1, 2, 3, 4]
 * arr2 = [1, 2, 5, 7]
 * return [3, 4, 5, 7]
 *
 * @param {[]} arr1 - Array of items.
 * @param {[]} arr2 - Array of items.
 * @returns {[]} The symmetric difference between those two arrays.
 */
function symmetricDiff(arr1, arr2) {
  const diff = [];

  // Solution 1
  // This is the first and the best solution so far
  // that I can think of. Still finding another best
  // solution that more simple and efficient.
  // for (let i = 0; i < arr1.length; i++) {
  //   if (!arr2.includes(arr1[i])) {
  //     diff.push(arr1[i]);
  //   }
  // }

  // for (let j = 0; j < arr2.length; j++) {
  //   if (!arr1.includes(arr2[j])) {
  //     diff.push(arr2[j]);
  //   }
  // }

  // Solution 2
  // Merge both array and filter it by checking
  // if the original first and second array not
  // contain the item. Using .filter() will
  // automatically return an filtered array.
  return arr1.concat(arr2).filter((item) => {
    // Both of these will work
    // return arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1;
    return !arr1.includes(item) || !arr2.includes(item);
  });

  // return diff;
}

module.exports = symmetricDiff;
