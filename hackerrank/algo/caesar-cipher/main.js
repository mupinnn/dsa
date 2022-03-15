function caesarCipher(originalText, rotateFactor) {
  const originalAlpha = "abcdefghijklmnopqrstuvwxyz";
  const rotatedAlpha = originalAlpha
    .slice(rotateFactor)
    .padEnd(originalAlpha.length, originalAlpha);
  let encrypted = "";

  for (let i = 0; i < originalText.length; i++) {
    const currentLetter = originalText[i];
    const isCurrentLetterUppercased =
      currentLetter === currentLetter.toUpperCase();
    const originalAlphaPos = originalAlpha.indexOf(currentLetter.toLowerCase());

    if (originalAlphaPos >= 0) {
      encrypted += isCurrentLetterUppercased
        ? rotatedAlpha[originalAlphaPos].toUpperCase()
        : rotatedAlpha[originalAlphaPos];
    } else {
      encrypted += currentLetter;
    }
  }

  return encrypted;
}

module.exports = caesarCipher;
