import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} booleanMatrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (booleanMatrix) {
  function addBomb(matrix, i, j) {
    const lenI = matrix.length
    const lenJ = matrix[0].length

    if (i + 1 < lenI) matrix[i+1][j]++
    if (i - 1 >= 0) matrix[i-1][j]++
    if (j + 1 < lenJ) matrix[i][j+1]++
    if (j - 1 >= 0) matrix[i][j-1]++

    if (i + 1 < lenI && j + 1 < lenJ) matrix[i+1][j+1]++
    if (i + 1 < lenI && j - 1 >= 0) matrix[i+1][j-1]++
    if (i - 1 >= 0 && j + 1 < lenJ) matrix[i-1][j+1]++
    if (i - 1 >= 0 && j - 1 >= 0) matrix[i-1][j-1]++
  }
  const matrix = []
  for (let i = 0; i < booleanMatrix.length; i++) {
    matrix[i] = []
    for (let j = 0; j < booleanMatrix[i].length; j++) {
      matrix[i][j] = 0
    }
  }
  for (let i = 0; i < booleanMatrix.length; i++) {
    for (let j = 0; j < booleanMatrix[i].length; j++) {
      if (booleanMatrix[i][j]) addBomb(matrix, i, j)
    }
  }
  return matrix
}
