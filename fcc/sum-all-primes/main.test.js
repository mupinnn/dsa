const sumPrimes = require("./main");

test.each([
  [10, 17],
  [50, 328],
  [977, 73156],
])(
  "sum all prime numbers that less than or equal to %i resulting %i",
  (input, expected) => {
    expect(sumPrimes(input)).toBe(expected);
  }
);
