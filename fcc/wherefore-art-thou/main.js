/**
 * Wherefore art thou
 *
 * Looks through and array of objects (`collection`) and returns
 * an array of all objects that have matching name and value pairs
 * with the object provided (`source`).
 *
 * Each name and value pair of the `source` object has to be present
 * in the object from `collection` if it is to be included in the
 * returned array.
 *
 * Example:
 * collection = [
 *  { first: "Romeo", last: "Montague" }, { first: "Tybalt", last: "Capulet" }
 * ]
 * source = { last: "Capuet" }
 * then, you must return the second object from `collection` because
 * it contains the name and its value that was passed on as the `source`.
 *
 * @param {Object[]} collection
 * @param {Object} source
 * @returns {Object[]}
 */
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  // Declarative way
  return collection.filter((c) => {
    return sourceKeys.every((s) => {
      return c.hasOwnProperty(s) && c[s] === source[s];
    });
  });
}

module.exports = whatIsInAName;
