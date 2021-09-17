import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let files = {}
  for(let i = 0; i < names.length; i++) {
    if (files.hasOwnProperty(names[i])){
      const index = Object.getOwnPropertyDescriptor(files, names[i]).value
      Object.defineProperty(files, names[i], {
        value: index + 1,
        writable: true,
        enumerable: true,
        configurable: true
      })
      Object.defineProperty(files, `${names[i]}(${index+1})`, {
        value: 0,
        writable: true,
        enumerable: true,
        configurable: true
      })
    }
    else {
      Object.defineProperty(files, names[i], {
        value: 0,
        writable: true,
        enumerable: true,
        configurable: true
      })
    }

  }
  return Object.keys(files)
}
