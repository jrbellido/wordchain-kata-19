const {Seq, Map, Set} = require('immutable')

const compareWords = require('./compareWords')

module.exports = function findUnvisitedNeighbors(words, unvisited, node) {
  let result = new Seq()

  if (unvisited.has(node)) {
    result = words.keySeq().filter(word => compareWords(word, node)).reverse()
  }

  return result
}
