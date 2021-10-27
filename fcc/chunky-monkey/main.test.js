const chunkArrayIntoGroups = require("./main");

const testArray = ["a", "b", "c", "d", "e"];
const chunkIntoOne = [["a"], ["b"], ["c"], ["d"], ["e"]];
const chunkIntoTwo = [["a", "b"], ["c", "d"], ["e"]];
const chunkIntoThree = [
  ["a", "b", "c"],
  ["d", "e"],
];
const chunkIntoFour = [["a", "b", "c", "d"], ["e"]];
const chunkIntoFive = [["a", "b", "c", "d", "e"]];

test.each([
  [testArray, 1, chunkIntoOne],
  [testArray, 2, chunkIntoTwo],
  [testArray, 3, chunkIntoThree],
  [testArray, 4, chunkIntoFour],
  [testArray, 5, chunkIntoFive],
])(`chunkArrayIntoGroups(%s, %i) should return %j`, (a, b, exp) => {
  expect(chunkArrayIntoGroups(a, b)).toEqual(exp);
});

test(`should return "can't perform chunking" when chunkSize > arr.length`, () => {
  expect(chunkArrayIntoGroups(testArray, 100)).toBe("can't perform chunking");
});
