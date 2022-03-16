const solveMeFirst = require("./main");

test.each([
  [2, 3, 5],
  [3, 3, 6],
  [10, 10, 20],
  [1250, 24, 1274],
  [3, 7, 10],
])("solveMeFirst(%i, %i) should return %i", (a, b, exp) => {
  expect(solveMeFirst(a, b)).toBe(exp);
});
