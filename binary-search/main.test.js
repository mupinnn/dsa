const { numberSearch } = require("./main");

const sortedNums = [...Array(100).keys()].map((n) => n + 1);

test.each([
  [sortedNums, 1500, -1],
  [sortedNums, 100, 99],
  [sortedNums, 50, 49],
  [sortedNums, 33, 32],
  [sortedNums, 79, 78],
])("numberSearch(%j, %i) should return %i", (a, b, exp) => {
  expect(numberSearch(a, b)).toBe(exp);
});
