/**
 * Seek and Destroy
 *
 * Remove all elements from the inital array that are of
 * the same value as the rest of the arguments.
 *
 * @param {[]} arr - Initial array.
 * @param  {...any} args - Arguments, list of element that want
 *                         to be removed from `arr`.
 * @returns {[]} Array of element that not removed in `arr`.
 */
function destroyer(arr, ...args) {
  // Imperative way
  const diff = [];

  for (let i = 0; i < arr.length; i++) {
    // Below can be written as `!args.includes(arr[i])`.
    if (args.indexOf(arr[i]) === -1) {
      diff.push(arr[i]);
    }
  }

  return diff;

  // Declarative way
  // return arr.filter((ar) => !args.includes(ar));
}

module.exports = destroyer;
