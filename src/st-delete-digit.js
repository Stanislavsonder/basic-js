import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
    const arr = []
    const nums = ('' + n).split('')
    for (let i = 0; i < nums.length; i++) {
        const n = nums.slice()
        n.splice(i,1)
        arr.push(n.join(''))
    }
    return Math.max(...arr)
}
