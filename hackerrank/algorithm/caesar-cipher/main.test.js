const caesarCipher = require("./main");

test.each([
  // Test case 1
  [
    "There's-a-starman-waiting-in-the-sky",
    3,
    "Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb",
  ],

  // Test case 2
  ["middle-Outz", 2, "okffng-Qwvb"],

  // Test case 3
  ["Pz-/aI/J`EvfthGH", 66, "Dn-/oW/X`SjthvUV"],

  // Test case 4
  [
    "Always-Look-on-the-Bright-Side-of-Life",
    5,
    "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj",
  ],
])(
  `Caesar Cipher for %s with %i letter(s) rotated should return %s`,
  (original, rotateFactor, encrypted) => {
    expect(caesarCipher(original, rotateFactor)).toBe(encrypted);
  }
);
