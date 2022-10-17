const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s1 = s1.split("")
  s2 = s2.split("")
  let count = 0
  while (s1.length) {
    if (s2.includes(s1[0])) {
      count++
      let commonChar = s2.indexOf(s1[0])
      s2.splice(commonChar, 1)
    }
    s1.splice(0, 1)
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
