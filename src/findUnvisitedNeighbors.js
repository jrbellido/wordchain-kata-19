const {Seq, Map, Set} = require('immutable')

const elementExists = require('./arrayUtils').elementExists
const compareWords = require('./compareWords')

module.exports = function findUnvisitedNeighbors(words, unvisited, a) {
  let neighbors = new Seq([])

  if (unvisited.includes(a)) {
    return new Seq(words.filter(word => compareWords(word, a)).reverse().toArray())
  }

  return neighbors
}
