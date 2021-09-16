import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(...date) {
  if (date.length!==1) {
    return 'Unable to determine the time of year!'
  }
  if (date[0] instanceof Date) {
    if (new Date().toString() === date[0].toString()) throw new Error('Invalid date!')
    try {
      date[0].getMonth()
    } catch (e) {
      throw new Error('Invalid date!')
    }
    switch (date[0].getMonth()) {
      case 0: case 1: case 11: return 'winter'
      case 2: case 3: case 4: return 'spring'
      case 5: case 6: case 7: return 'summer'
      case 8: case 9: case 10: return 'fall'
      default: throw new Error('Invalid date!')
    }
  }
  else {
    throw new Error('Invalid date!')
  }
}