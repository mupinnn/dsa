/**
 * Array Chunking
 *
 * Splits an array {arr} into groups the length of {size}
 * and returns them as a two-dimensional array.
 *
 * @param {[]} arr Array of anything
 * @param {number} size Size of chunk you want to create
 * @returns {[][]} Chunked array as two-dimensional
 */
function chunkArrayIntoGroups(arr, size) {
  let chunk = [];

  if (size > arr.length) {
    return "can't perform chunking";
  }

  for (let i = 0; i < arr.length; i += size) {
    chunk.push(arr.slice(i, i + size));
  }

  return chunk;
}

module.exports = chunkArrayIntoGroups;
