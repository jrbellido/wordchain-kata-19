const {Map, Seq, Set} = require('immutable')

const findSmallestUnvisitedNode = require('./findSmallestUnvisitedNode')
const calculateDistanceToNeighbor = require('./calculateDistanceToNeighbor')
const findUnvisitedNeighbors = require('./findUnvisitedNeighbors')
const isGreaterThan = require('./isGreaterThan')

module.exports = function findShortestPath(dictionary, begin, end) {
  let words = new Map(dictionary.filter(word => word.length === begin.length).map((k, v) => ([k, 1])))

  if (typeof begin !== 'string' || typeof end !== 'string' || begin.length !== end.length) {
    throw Error('Words are not of the same length')
  }

  if (!words.has(begin) || !words.has(end)) {
    throw Error('Please use words from the English dictionary')
  }

  let paths = new Map()
  let visited = new Map()
  let unvisited = words.mapKeys(k => k)

  words.mapKeys(word => {
    paths = paths.set(word, {distance: word === begin ? 0 : null, prevNode: null})
  })

  let node
  while (node = findSmallestUnvisitedNode(paths, unvisited)) {
    let neighbors = findUnvisitedNeighbors(words, unvisited, node)

    neighbors.filter(n => n !== begin).forEach(neighbor => {
      let path = paths.get(neighbor)
      let distance = calculateDistanceToNeighbor(paths, node)

      if (isGreaterThan(path.distance, distance)) {
        path.distance = distance
        path.prevNode = node
        paths = paths.set(neighbor, path)
      }
    })

    unvisited = unvisited.remove(node)
    visited = visited.set(node, 1)
  }

  let result = new Set([end])
  let word = paths.get(end)

  while (word.prevNode !== null) {
    result = result.add(word.prevNode)
    word = paths.get(word.prevNode)
  }

  return result.reverse()
}
