import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(names) {
  if (!(names instanceof Array)) return false
  let team = []
  names.forEach(e => {
    if (typeof e === 'string' && e.trim().length > 0) team.push(e.trim()[0].toUpperCase())
  })
  return team.sort().join('')
}