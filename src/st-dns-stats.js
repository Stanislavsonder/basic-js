import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

export default function getDNSStats(dns) {
   /* const map = new Map()
    dns.forEach(e=>e.split('.').reverse().forEach(el => {
      if (map.has(el)) map.set(el, map.get(el)+1)
      else map.set(el, 1)
    }))
    let res = {}
    let buf = ''
    let maxlen = 0
    let counter = 0
    for (let [key, value] of map) {
      if (maxlen < value) maxlen = value

      if (counter >= maxlen && counter > 2) {
        buf = buf.substr(0,buf.lastIndexOf('.'))
      }
      buf+='.'+key
      Object.defineProperty(res, buf, {value: value})
      counter++
    }
    return res*/
    throw new NotImplementedError('Not implemented')
}