const uniteUnique = require("./main");

test.each([
  // test case 1
  [
    [
      [1, 3, 2],
      [5, 2, 1, 4],
      [2, 1],
    ],
    [1, 3, 2, 5, 4],
  ],

  // test case 2
  [
    [
      [1, 2, 3],
      [5, 2, 1],
    ],
    [1, 2, 3, 5],
  ],

  // test case 3
  [
    [
      [1, 2, 3],
      [5, 2, 1, 4],
      [2, 1],
      [6, 7, 8],
    ],
    [1, 2, 3, 5, 4, 6, 7, 8],
  ],
])("uniteUnique(%j) should return %j", (input, expected) => {
  expect(uniteUnique(...input)).toEqual(expected);
});
