const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    sampleActivity = Number(sampleActivity)
    if (sampleActivity > 15 || sampleActivity <= 0) {
      return false
    }
    else if (!(Boolean(sampleActivity))) {
      return false
    }
    else {
      let years = (Math.log(sampleActivity/MODERN_ACTIVITY))/(Math.log(2)/HALF_LIFE_PERIOD)
      return Math.ceil(Math.abs(years))
    }
  }
  else {
    return false
  }
}

module.exports = {
  dateSample
};
