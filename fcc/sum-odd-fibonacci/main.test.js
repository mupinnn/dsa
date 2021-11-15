const sumOddFibs = require("./main");

test.each([
  [1, 1],
  [1000, 1785],
  [4000000, 4613732],
  [4, 5],
  [75024, 60696],
  [75025, 135721],
])("the sum of odd %i fibonacci sequence should be %i", (input, expected) => {
  expect(sumOddFibs(input)).toBe(expected);
});
