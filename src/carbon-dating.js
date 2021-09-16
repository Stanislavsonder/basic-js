import { NotImplementedError } from '../extensions/index.js';
import {assert} from "chai";

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(finalActivity) {
  if (typeof finalActivity !== 'string' || !isFinite(finalActivity) || +finalActivity <= 0) return false
  const t = Math.log(MODERN_ACTIVITY / +finalActivity)/(Math.log(2) / HALF_LIFE_PERIOD)
  return t <= 0 ? false : Math.ceil(t)
}