const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encode = []
  if (str === "") {
    return str
  }
  encode.push([1, str[0]])
  for (let i=1; i<str.length; i++) {
    if (!encode[encode.length-1].includes(str[i])) {
      encode.push([1,str[i]])
    }
    else {
      encode[encode.length-1][0]++
    }
  }
  for (let i=0; i<encode.length;i++) {
    if (encode[i][0] == 1) {
      encode[i].splice(0,1)
    }
    encode[i] = encode[i].join("")
  }
  return encode.join("")
}

module.exports = {
  encodeLine
};
