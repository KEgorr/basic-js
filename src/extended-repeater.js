const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let tempoArrMain = []
  let tempoArrForAdd = []
  if (String(options.addition) != "undefined") {
    tempoArrForAdd.push(String(options.addition))
    if ("additionRepeatTimes" in options) {
      for (let j = 1; j<options.additionRepeatTimes; j++) {
        tempoArrForAdd.push(String(options.addition))
      }
  }
  }
  if ("additionSeparator" in options) {
    tempoArrForAdd = tempoArrForAdd.join(options.additionSeparator)
  }
  else {
    tempoArrForAdd = tempoArrForAdd.join("|")
  }
  if (String(str) != "undefined") {
    tempoArrMain.push([String(str)])
    tempoArrMain[0].push(tempoArrForAdd)
    tempoArrMain[0] = tempoArrMain[0].join("")
    if ("repeatTimes" in options) {
      for (let i = 1; i<options.repeatTimes; i++) {
        tempoArrMain.push([String(str)])
        tempoArrMain[i].push(tempoArrForAdd)
        tempoArrMain[i] = tempoArrMain[i].join("")
      }
    }
  }
  if ("separator" in options) {
    tempoArrMain = tempoArrMain.join(options.separator)
  }
  else {
    tempoArrMain = tempoArrMain.join("+")
  }
  return tempoArrMain
}

module.exports = {
  repeater
};
