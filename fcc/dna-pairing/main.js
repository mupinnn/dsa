/**
 * DNA Pairing
 *
 * The DNA strand is missing the pairing element. Take each character,
 * get its pair, and return the results as a 2D array.
 *
 * Base pairs are a pair of AT and CG. Match the missing element to
 * the provided character.
 *
 * Return the provided character as the first element in each array.
 *
 * For example, for input "GCG" return [["G", "C"], ["C","G"], ["G", "C"]].
 * The character and its pair are paired up in an array, and all the arrays
 * are grouped into one encapsulating array.
 *
 * @param {string} str - Base pairs.
 * @returns {string} 2D array of character and its pair.
 */
function pairElement(str) {
  // One
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return str.split("").map((el) => [el, pairs[el]]);

  // Two
  // const elements = str.split("");
  // const paired = [];

  // for (let i = 0; i < elements.length; i++) {
  //   switch (elements[i]) {
  //     case "A":
  //       paired.push(["A", "T"]);
  //       break;
  //     case "T":
  //       paired.push(["T", "A"]);
  //       break;
  //     case "C":
  //       paired.push(["C", "G"]);
  //       break;
  //     case "G":
  //       paired.push(["G", "C"]);
  //       break;
  //   }
  // }

  // return paired;
}

module.exports = pairElement;
