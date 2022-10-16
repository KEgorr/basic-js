const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct
  }
  encrypt(massage, key) {
    if (!massage || !key) {
      throw new Error ("Incorrect arguments!")
    }
    massage = massage.toLowerCase().split("")
    key = key.toLowerCase()
    let newKey = []
    for (let i =0, j=0; massage.length > newKey.length; i++, j++) {
      if (massage[j] === " ") {
        newKey.push(massage[j])
        i--
      }
      else {
        if (i >= key.length) {
          i=0
        }
        newKey.push(key[i])
      }
    }
    for (let i=0; i<massage.length; i++) {
      let currentLetter = massage[i].charCodeAt(0)
      let keyShift = newKey[i].charCodeAt(0)-97
      if (currentLetter>=97 && currentLetter<=122) {
        if (currentLetter + keyShift > 122) {
          massage[i] = String.fromCharCode(currentLetter + keyShift - 26)
        }
        else {
          massage[i] = String.fromCharCode(currentLetter + keyShift)
        }
      }
    }
    if (this.direct) {
      return massage.join("").toUpperCase()
    }
    else {
      return massage.reverse().join("").toUpperCase()
    }
  }
  decrypt(massage, key) {
    if (!massage || !key) {
      throw new Error ("Incorrect arguments!")
    }
    massage = massage.toLowerCase().split("")
    key = key.toLowerCase()
    let newKey = []
    for (let i =0, j=0; massage.length > newKey.length; i++, j++) {
      if (massage[j] === " ") {
        newKey.push(massage[j])
        i--
      }
      else {
        if (i >= key.length) {
          i=0
        }
        newKey.push(key[i])
      }
    }
    for (let i=0; i<massage.length; i++) {
      let currentLetter = massage[i].charCodeAt(0)
      let keyShift = newKey[i].charCodeAt(0)-97
      if (currentLetter>=97 && currentLetter<=122) {
        if (currentLetter - keyShift < 97) {
          massage[i] = String.fromCharCode(currentLetter - keyShift + 26)
        }
        else {
          massage[i] = String.fromCharCode(currentLetter - keyShift)
        }
      }
    }
    if (this.direct) {
      return massage.join("").toUpperCase()
    }
    else {
      return massage.reverse().join("").toUpperCase()
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
