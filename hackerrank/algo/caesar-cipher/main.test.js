const caesarCipher = require("./main");

test.each([
  ["There's-a-starman-waiting-in-the-sky", 3, "Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb"],
  ["middle-Outz", 2, "okffng-Qwvb"]
])(`Caesar Cipher for %s with %i letter(s) rotated should return %s`, (original, rotateFactor, encrypted) => {
  expect(caesarCipher(original, rotateFactor)).toBe(encrypted);
});
