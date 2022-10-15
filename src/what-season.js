const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (typeof date == 'undefined') {
    return 'Unable to determine the time of year!'
  }
  else {
    if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length) {
      throw new Error ("Invalid date!")
    }
    else {
      let month = date.getMonth() 
      if (Number.isNaN(month)) {
        console.error('Invalid date!')
        return 'Invalid date!'
      }
      else {
        if (month > 7 && month < 11) {
          return 'autumn (fall)'
        }
        else if (month > 1 && month < 5) {
          return 'spring'
        }
        else if (month > 4 && month < 8) {
          return 'summer'
        }
        else {
          return 'winter'
        }
      }
    }
  }
}

module.exports = {
  getSeason
};
