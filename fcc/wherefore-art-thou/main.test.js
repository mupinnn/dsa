const whatIsInAName = require("./main");

test.each([
  // test case 1
  [
    // a
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],

    // b
    { last: "Capulet" },

    // expected
    [{ first: "Tybalt", last: "Capulet" }],
  ],

  // test case 2
  [
    // a
    [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }],

    // b
    { "apple": 1 },

    // expected
    [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }],
  ],

  // test case 3
  [
    // a
    [
      { "apple": 1, "bat": 2 },
      { "bat": 2 },
      { "apple": 1, "bat": 2, "cookie": 2 },
    ],

    // b
    { "apple": 1, "bat": 2 },

    // expected
    [
      { "apple": 1, "bat": 2 },
      { "apple": 1, "bat": 2, "cookie": 2 },
    ],
  ],

  // test case 4
  [
    // a
    [
      { "apple": 1, "bat": 2 },
      { "apple": 1 },
      { "apple": 1, "bat": 2, "cookie": 2 },
    ],

    // b
    { "apple": 1, "cookie": 2 },

    // expected
    [{ "apple": 1, "bat": 2, "cookie": 2 }],
  ],

  // test case 5
  [
    // a
    [{ "a": 1, "b": 2, "c": 3 }],

    // b
    { "a": 1, "b": 9999, "c": 3 },
    // expected
    [],
  ],
])("whatIsInAName(%j, %o) should return %j", (a, b, exp) => {
  expect(whatIsInAName(a, b)).toEqual(exp);
});
