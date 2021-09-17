import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  if (arr instanceof Array) {
    const keyWords = ['--discard-next','--discard-prev','--double-next','--double-prev']
    let arrCopy = arr.slice()
    let newArr = []
    for (let i = 0; i < arrCopy.length; i++) {
      switch(keyWords.indexOf(arrCopy[i])){
        case 0:
          if (i + 1 < arrCopy.length) {
            arrCopy[i+1] = undefined
          }
          arrCopy.splice(i, 1)
          break
        case 1:
          if (i - 1 >= 0 && arrCopy.length) {
            arrCopy[i-1] = undefined
          }
          arrCopy.splice(i, 1)
          break
        case 2:
          if (i + 1 < arrCopy.length) {
            arrCopy.splice(i, 1, arrCopy[i+1])
          }
          else {
            arrCopy.splice(i, 1)
          }
          break
        case 3:
          if (i - 1 >= 0 && arrCopy.length && arrCopy[i-1]) {
            arrCopy.splice(i, 1, arrCopy[i-1])
          }
          else {
            arrCopy.splice(i, 1)
          }
          break
      }
    }
    arrCopy.forEach(e=>{
      if (e) newArr.push(e)
    })
    return newArr
  }
  else throw new Error("'arr' parameter must be an instance of the Array!")
}
