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
  let array = str.split('');
  let res = [];
  let count = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      count++
    } else {
      count == 1? res.push(array[i]) : res.push(count+array[i]);
      count = 1;
    }
  }

  return res.join('');
}

module.exports = {
  encodeLine
};
