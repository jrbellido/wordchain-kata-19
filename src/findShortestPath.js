const findSmallestUnvisitedNode = require('./findSmallestUnvisitedNode')
const calculateDistanceToNeighbor = require('./calculateDistanceToNeighbor')
const findUnvisitedNeighbors = require('./findUnvisitedNeighbors')
const isGreaterThan = require('./isGreaterThan')
const removeDuplicates = require('./arrayUtils').removeDuplicates
const arrayClone = require('./arrayUtils').arrayClone
const elementExists = require('./arrayUtils').elementExists
const removeItem = require('./arrayUtils').removeItem

module.exports = function findShortestPath(words, begin, end) {
  words = removeDuplicates(words.filter(word => word.length === begin.length).map(word => word.toLowerCase()))

  if (typeof begin !== 'string' || typeof end !== 'string' || begin.length !== end.length) {
    throw Error('Words are not of the same length')
  }

  if (!elementExists(words, begin) || !elementExists(words, end)) {
    throw Error('Please use words from the English dictionary')
  }

  let result = []
  let paths = []
  let visited = []
  let unvisited = arrayClone(words)

  for (let n = 0; n < words.length; n++) {
    let word = words[n]
    paths[word] = {distance: word === begin ? 0 : null, prevNode: null}
  }

  let node

  while (node = findSmallestUnvisitedNode(paths, unvisited)) {
    let neighbors = findUnvisitedNeighbors(words, unvisited, node)

    for (let n = 0; n < neighbors.length; n++) {
      let neighbor = neighbors[n]
      let path = paths[neighbor]

      if (neighbor === begin)
        continue

      let distance = calculateDistanceToNeighbor(paths, node)

      if (isGreaterThan(path.distance, distance)) {
        path.distance = distance
        path.prevNode = node
      }
    }
    removeItem(unvisited, node)
    visited.push(node)
  }

  let c = paths[end]
  result.push(end)

  for (let i = 0; i < 5; i++) {
    if (c.prevNode !== null) {
      result.push(c.prevNode)
      c = paths[c.prevNode]
    }
  }

  return result.reverse()
}
