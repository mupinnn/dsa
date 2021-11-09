/**
 * Convert HTML Entities
 *
 * Convert the characters `&, <, >, ", '` in a string to their
 * corresponding HTML entities.
 *
 * @param {string} str - A string with `&, <, >, ", '` that want to be converted.
 * @returns {string} Converted string with `&, <, >, ", '` to HTML entities.
 */
function convertHTML(str) {
  // Looooooooooooooonggggg solution
  // let temp = str.split("");

  // for (let i = 0; i < temp.length; i++) {
  //   switch (temp[i]) {
  //     case "&":
  //       temp[i] = "&amp;";
  //       break;
  //     case "<":
  //       temp[i] = "&lt;";
  //       break;
  //     case ">":
  //       temp[i] = "&gt;";
  //       break;
  //     case '"':
  //       temp[i] = "&quot;";
  //       break;
  //     case "'":
  //       temp[i] = "&apos;";
  //       break;
  //   }
  // }

  // temp = temp.join("");

  // return temp;

  // Straight forward
  // Object lookup to declare as many HTML entities as needed. (bad idea actually).
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot;",
  };

  return str.replace(/([&<>\'"])/g, (match) => htmlEntities[match]);
}

module.exports = convertHTML;
