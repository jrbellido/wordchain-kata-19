const elementExists = require('./arrayUtils').elementExists
const compareWords = require('./compareWords')

module.exports = function findUnvisitedNeighbors(words, unvisited, a) {
  let neighbors = []

  for (let n = 0; n < words.length; n++) {
    if (elementExists(unvisited, a) && compareWords(words[n], a))
      neighbors.push(words[n])
  }

  return neighbors
}
