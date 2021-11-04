const replace = require("./main");

/**
 * First: String before replacement
 * Second: Word that want to be replaced
 * Third: Will replace the second.
 * Fourth: Expected result
 */
test.each([
  // test case 1
  ["Let us go to the store", "store", "mall", "Let us go to the mall"],

  // test case 2
  [
    "He is Sleeping on the couch",
    "Sleeping",
    "sitting",
    "He is Sitting on the couch",
  ],

  // test case 3
  [
    "I think we should look up there",
    "up",
    "Down",
    "I think we should look down there",
  ],

  // test case 4
  [
    "This has a spellngi error",
    "spellngi",
    "spelling",
    "This has a spelling error",
  ],

  // test case 5
  ["His name is Tom", "Tom", "john", "His name is John"],

  // test case 6
  [
    "Let us get back to more Coding",
    "Coding",
    "algorithms",
    "Let us get back to more Algorithms",
  ],
])("replace(%s, %s, %s) should return %s", (a, b, c, exp) => {
  expect(replace(a, b, c)).toBe(exp);
});
