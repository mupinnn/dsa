const missingLetters = require("./main");

test.each([
  ["d", "abce"],
  ["i", "abcdefghjklmno"],
  ["u", "stvwx"],
  ["e", "bcdf"],
  [undefined, "abcdefghijklmnopqrstuvwxyz"],
])("%s is missing from %s", (exp, input) => {
  expect(missingLetters(input)).toBe(exp);
});
