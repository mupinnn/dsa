/**
 * Pig Latin is a way of altering english words. The rules as follows:
 * - If a word begins with consonant, take the first consonant or consonant
 *   cluster, move it to the end of the word, and add `ay` to it.
 * - If a word begins with a vowel, just add `way` at the end.
 *
 * Example:
 * - "calinfornia" -> "aliforniacay".
 *   Begins with a consonant (c) or consonant cluster,
 *   move it to the end and add `ay`.
 *
 * @param {string} str - English words that want to be translated.
 * @returns {string} Translated `str` to Pig Latin string.
 */
function translatePigLatin(str) {
  const lowercased = str.toLowerCase();
  let pigLatin = lowercased;

  // check if a word begins with a vowel
  if (/[aiueo]/.test(lowercased[0])) {
    pigLatin += "way";
  }

  // check if a word begins with a consonant or consonant cluster
  if (/^([^aiueo]+)/g.test(lowercased)) {
    const matchConsonant = lowercased.match(/^([^aiueo]+)/g);
    const consonant = matchConsonant[0];
    const sliced = pigLatin.slice(consonant.length) + consonant + "ay";

    pigLatin = sliced;
  }

  return pigLatin;
}

module.exports = translatePigLatin;
