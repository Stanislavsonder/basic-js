import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (str === undefined) return ''
  if (!options.separator) options.separator = '+'
    else options.separator = options.separator + ''
  if (!options.additionSeparator) options.additionSeparator = '|'
    else options.additionSeparator = options.additionSeparator + ''
  if (!options.repeatTimes) options.repeatTimes = 0
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 0

  const result = []
  for (let i = 0; i < options.repeatTimes; i++) {
    const addition = []
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      addition.push(''+options.addition)
      console.log('addition: ', addition)
    }
    result.push(addition.length? str+addition.join(''+options.additionSeparator):options.addition?str+options.addition:str)
    console.log('result: ', result)
  }
  return result.length? result.join(options.separator): str+options.addition
}