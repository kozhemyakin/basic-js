const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const emptyArr = [...arr];

  if (!Array.isArray(arr)) {
    // throw new Error("'\'arr\' parameter must be an instance of the Array!'")
    return false
  } else if (arr.length == 0) {

    return []
  } else {
    emptyArr.forEach((el, index) => {
      if (el === '--double-next') {
        emptyArr[index] = emptyArr[index + 1];
      }
      if (el === '--double-prev' && index == 0) {
        delete emptyArr[0];
      }
      if (el === '--double-prev' && index != 0) {
        emptyArr[index] = emptyArr[index - 1];
      }
      if (el === '--discard-next') {
        delete emptyArr[index + 1];
        delete emptyArr[index];
      }
      if (el === '--discard-prev' && index == 0) {
        delete emptyArr[0];
      }
      if (el === '--discard-prev' && index != 0) {

        delete emptyArr[index - 1];
        delete emptyArr[index - 1];
      }

    })

    // console.debug(emptyArr)
    // // const doubleNext = emptyArr.findIndex(el => el === '--double-next');
    // const doublePrev = emptyArr.findIndex(el => el === '--double-prev');
    // const discardNext = emptyArr.findIndex(el => el === '--discard-next');
    // const discardPrev = emptyArr.findIndex(el => el === '--discard-prev');


    // console.debug(doubleNext, doublePrev, discardNext, discardPrev)
    // console.debug('doubleNext', doubleNext)
    // if (doubleNext >= 0) emptyArr[doubleNext] = emptyArr[doubleNext + 1];
    // if (doublePrev >= 0) emptyArr[doublePrev] = emptyArr[doublePrev - 1];
    // if (discardNext >= 0) emptyArr = emptyArr.toSpliced(discardNext, 1);
    // if (discardPrev >= 0) emptyArr = emptyArr.toSpliced(discardPrev, 1);

    // toSpliced(1, 1, "Feb", "Mar");


    return emptyArr
  }
}

module.exports = {
  transform
};
