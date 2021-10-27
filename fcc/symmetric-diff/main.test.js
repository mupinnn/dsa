const symmetricDiff = require("./main");

describe.each([
  // test case 1
  [[1, 2, 3, 5], [1, 2, 3, 4, 5], [4]],

  // test case 2
  [
    [1, "calf", 3, "piglet"],
    [1, "calf", 3, 4],
    ["piglet", 4],
  ],

  // test case 3
  [
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"],
    ["pink wool"],
  ],

  // test case 4
  [
    ["andesite", "grass", "dirt", "dead shrub"],
    ["andesite", "grass", "dirt", "dead shrub"],
    [],
  ],

  // test case 5
  [
    [1, "calf", 3, "piglet"],
    [7, "filly"],
    [1, "calf", 3, "piglet", 7, "filly"],
  ],
])("symmetric diff between %j and %j", (a, b, exp) => {
  test(`should return ${JSON.stringify(exp)}`, () => {
    expect(symmetricDiff(a, b)).toEqual(exp);
  });

  test(`returned value must be an array`, () => {
    expect(symmetricDiff(a, b) instanceof Array).toBe(true);
  });
});
