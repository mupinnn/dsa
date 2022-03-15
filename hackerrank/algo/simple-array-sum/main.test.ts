import simpleArraySum from "./main";

test.each([
  [[1, 2, 3, 4, 10, 11], 31],
  [[1, 2, 3, 4, 5, 6, 7], 28],
])(`Sum of all %j elements should return %i`, (array, expected) => {
  expect(simpleArraySum(array)).toBe(expected);
});
