const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const emp = [];

  if (!Array.isArray(members)) {

    return false
  } else {

  const memberNames = members.filter(name => typeof name === 'string');
  
  const firstLetters = memberNames.map((name) => {
    const noSpacesName = name.toUpperCase().replaceAll(' ', '');
    emp.push(noSpacesName[0])
  })

  const res = emp.sort().join('');
  
  return res
  }
}

module.exports = {
  createDreamTeam
};
