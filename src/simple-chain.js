import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
   return this.chain.length
  },
  addLink(value) {
    if (value === undefined) value = ''
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (position-1 < 0 || position-1 >= this.chain.length || !Number.isInteger(position) || !Number.isFinite(position)) {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    }
    this.chain.splice(position-1,1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const answ = this.chain.join('~~')
    this.chain = []
    return answ
  }
};
