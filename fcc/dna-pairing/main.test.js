const pairElement = require("./main");

test.each([
  // test case 1
  [
    "ATCGA",
    [
      ["A", "T"],
      ["T", "A"],
      ["C", "G"],
      ["G", "C"],
      ["A", "T"],
    ],
  ],

  // test case 2
  [
    "TTGAG",
    [
      ["T", "A"],
      ["T", "A"],
      ["G", "C"],
      ["A", "T"],
      ["G", "C"],
    ],
  ],

  // test case 3
  [
    "CTCTA",
    [
      ["C", "G"],
      ["T", "A"],
      ["C", "G"],
      ["T", "A"],
      ["A", "T"],
    ],
  ],
])("pairElement(%s) should return %j", (a, exp) => {
  expect(pairElement(a)).toEqual(exp);
});
