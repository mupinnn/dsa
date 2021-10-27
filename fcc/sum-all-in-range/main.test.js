const sumAll = require("./main");

describe.each([
  [[1, 4], 10],
  [[4, 1], 10],
  [[5, 10], 45],
  [[10, 5], 45],
])("sumAll(%j)", (a, exp) => {
  test(`should returns ${exp}`, () => {
    expect(sumAll(a)).toBe(exp);
  });

  test(`returned value must be a number`, () => {
    expect(typeof sumAll(a)).toBe("number");
  });
});
