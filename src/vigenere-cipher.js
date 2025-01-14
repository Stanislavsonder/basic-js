import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

export default class VigenereCipheringMachine {
  encrypt(){throw new NotImplementedError('Not implemented');}
  decrypt(){throw new NotImplementedError('Not implemented');}

  /*#reverseMode = null
  #alph = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','v','w','x','y','z',' ']

  #toLetter(code) {
    code = code >= 0? code : code + this.#alph.length
    return this.#alph[code % this.#alph.length]
  }
  #toCode(str) {
    return str.toLowerCase().split('').map(e=>{
      const index = this.#alph.indexOf(e)
      if (index === -1) {
        this.#alph.push(e)
        return this.#alph.length-1
      }
      return index
    })
  }
  constructor(mode) {
    this.#reverseMode = mode === true || mode === undefined;
  }
  encrypt(message, key) {
    if (!(typeof message === 'string') || !(typeof key === 'string')) throw new Error('Incorrect arguments!')
    message = this.#toCode(message)
    key = this.#toCode(key)
    for (let i = 0, j = 0; i < message.length; i++, j = j >= key.length-1?0:j+1) {
      message[i] = this.#toLetter(message[i] + key[j])
    }
    return this.#reverseMode?message.reverse().join('').toUpperCase():message.join('').toUpperCase()
  }

  decrypt(message, key) {
    if (!(typeof message === 'string') || !(typeof key === 'string')) throw new Error('Incorrect arguments!')
    message =  this.#reverseMode?this.#toCode(message).reverse():this.#toCode(message)
    key = this.#toCode(key)
    for (let i = 0, j = 0; i < message.length; i++, j = j >= key.length-1?0:j+1) {
      message[i] = this.#toLetter(message[i] - key[j])
    }
    return message.join('').toUpperCase()
  }*/
}

