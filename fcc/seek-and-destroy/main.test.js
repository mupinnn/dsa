const destroyer = require("./main");

test.each([
  // test case 1
  [
    [1, 2, 3, 1, 2, 3],
    [2, 3],
    [1, 1],
  ],

  // test case 2
  [
    [1, 2, 3, 5, 1, 2, 3],
    [2, 3],
    [1, 5, 1],
  ],

  // test case 3
  [[2, 3, 2, 3], [2, 3], []],

  // test case 4
  [["tree", "hamburger", 53], ["tree", 53], ["hamburger"]],

  // test case 5
  [
    [
      "possum",
      "trollo",
      12,
      "safari",
      "hotdog",
      92,
      65,
      "grandma",
      "bugati",
      "trojan",
      "yacht",
    ],
    [
      "yacht",
      "possum",
      "trollo",
      "safari",
      "hotdog",
      "grandma",
      "bugati",
      "trojan",
    ],
    [12, 92, 65],
  ],
])("%j elements that same as %j elements should be removed", (a, b, exp) => {
  expect(destroyer(a, ...b)).toEqual(exp);
});
