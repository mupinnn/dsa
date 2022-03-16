/**
 * Binary search.
 *
 * Repeatedly dividing in half the portion of the list that
 * could contain the item, until you've narrowed down the
 * possible locations to just one.
 *
 * (https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search)
 */

/**
 * @param {number[]} arr - Sorted array of number.
 * @param {number} target - Search target.
 * @returns {number} Return the index of the number when found
 *                 and return -1 if not found.
 */
function numberSearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  let mid;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return -1;
}

module.exports = {
  numberSearch,
};
