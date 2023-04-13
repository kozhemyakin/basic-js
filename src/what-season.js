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
  if (!date) {

    return 'Unable to determine the time of year!';
  }

  if (Object.keys(date).length > 0) {
    throw new Error('Invalid date!');
  }
  
  try {

    date.getMonth()
  }catch {

    throw new Error('Invalid date!')
  }
  
  let currentMonth = date.getMonth()

  if(currentMonth === 0 || currentMonth === 11 || currentMonth === 1 ) {
    return 'winter'
  }else if(currentMonth === 2 || currentMonth === 3 || currentMonth === 4) {
    return 'spring'
  }else if(currentMonth === 5 || currentMonth === 6 || currentMonth === 7) {
    return 'summer'
  }else if(currentMonth === 8 || currentMonth === 9 || currentMonth === 10) {
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
