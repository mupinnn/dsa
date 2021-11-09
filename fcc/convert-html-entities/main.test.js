const convertHTML = require("./main");

test.each([
  ["Dolce & Gabbana", "Dolce &amp; Gabbana"],
  ["Hamburgers < Pizza < Tacos", "Hamburgers &lt; Pizza &lt; Tacos"],
  ["Sixty > twelve", "Sixty &gt; twelve"],
  ['Stuff in "quotation marks"', "Stuff in &quot;quotation marks&quot;"],
  ["Schindler's List", "Schindler&apos;s List"],
  ["<>", "&lt;&gt;"],
  ["abc", "abc"],
])("%s should converted to %s", (input, expected) => {
  expect(convertHTML(input)).toBe(expected);
});
