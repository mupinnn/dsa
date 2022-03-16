function caesarCipher(originalText, rotateFactor) {
  const originalAlpha = "abcdefghijklmnopqrstuvwxyz";

  function rotatingAlpha() {
    let newRotateFactor = rotateFactor;

    while (newRotateFactor > originalAlpha.length) {
      newRotateFactor -= originalAlpha.length;
    }

    return originalAlpha
      .slice(newRotateFactor)
      .padEnd(originalAlpha.length, originalAlpha);
  }

  const rotatedAlpha = rotatingAlpha();
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
