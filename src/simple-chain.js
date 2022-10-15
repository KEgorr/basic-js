const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  newArr: [],
  getLength() {
    return this.newArr.length
  },
  addLink(value) {
    this.newArr.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (this.newArr[position-1] != undefined) {
      this.newArr.splice(position-1, 1)
      return this
    }
    else {
      this.newArr = []
      throw new Error ("You can\'t remove incorrect link!")
    }
  },
  reverseChain() {
    this.newArr.reverse()
    return this
  },
  finishChain() {
    let finishedChain = this.newArr.slice()
    this.newArr = []
    return finishedChain.join("~~")
  }
};

module.exports = {
  chainMaker
};
