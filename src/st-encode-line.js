import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
    let res = ''
    let tmpStr = ''
    for (let i = 0; i <= str.length; i++) {
      if (tmpStr.length) {
        if (tmpStr[0] === str[i]) tmpStr+=str[i]
        else {
          res += tmpStr.length>1? tmpStr.length+''+tmpStr[0]:tmpStr[0]
          tmpStr = str[i]
        }
      }
      else {
        tmpStr = str[i]
      }
    }
    return res
}
