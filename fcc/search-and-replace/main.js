/**
 * Search and Replace
 *
 * Perform a search and replace on the sentence using the arguments provided
 * and return the new sentence.
 *
 * Note: Preserve the case of the first character in the original word when
 * replacing it. For example, if we mean to replace the word `Book` with `dog`,
 * it should be replaced as `Dog`.
 *
 * @param {string} str - Sentence to perform the search and replace on.
 * @param {string} before - Word that want to be replaced.
 * @param {string} after - Word that will replace `before`.
 * @returns {string} String that conatin `str` that have a word been replaced
 *                   from `before` to `after`.
 */
function replace(str, before, after) {
  let newAfter = after;

  // Check `before` first letter case
  if (/^[A-Z]/.test(before[0])) {
    newAfter = after[0].toUpperCase() + after.slice(1);
  } else {
    newAfter = after[0].toLowerCase() + after.slice(1);
  }

  return str.replace(before, newAfter);
}

module.exports = replace;
