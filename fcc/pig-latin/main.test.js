const translatePigLatin = require("./main");

test.each([
  ["california", "aliforniacay"],
  ["paragraphs", "aragraphspay"],
  ["glove", "oveglay"],
  ["algorithm", "algorithmway"],
  ["eight", "eightway"],
  ["schwartz", "artzschway"],
  ["rhythm", "rhythmay"],
])("translatePigLatin(%s) should return %s", (a, exp) => {
  expect(translatePigLatin(a)).toBe(exp);
});
