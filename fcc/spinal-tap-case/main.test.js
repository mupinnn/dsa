const spinalCase = require("./main");

test.each([
  ["This Is Spinal Tap", "this-is-spinal-tap"],

  ["thisIsSpinalTap", "this-is-spinal-tap"],

  ["The_Andy_Griffith_Show", "the-andy-griffith-show"],

  ["Teletubbies say Eh-oh", "teletubbies-say-eh-oh"],

  ["AllThe-small Things", "all-the-small-things"],
])("spinalCase(%s) should return %s", (input, expected) => {
  expect(spinalCase(input)).toBe(expected);
});
