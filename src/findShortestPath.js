const {Map, Seq, Set} = require('immutable')

const findSmallestUnvisitedNode = require('./findSmallestUnvisitedNode')
const calculateDistanceToNeighbor = require('./calculateDistanceToNeighbor')
const findUnvisitedNeighbors = require('./findUnvisitedNeighbors')
const isGreaterThan = require('./isGreaterThan')
const removeDuplicates = require('./arrayUtils').removeDuplicates
const removeItem = require('./arrayUtils').removeItem

module.exports = function findShortestPath(words, begin, end) {
  words = new Set(removeDuplicates(words.filter(word => word.length === begin.length).map(word => word.toLowerCase())))

  if (typeof begin !== 'string' || typeof end !== 'string' || begin.length !== end.length) {
    throw Error('Words are not of the same length')
  }

  if (!words.has(begin) || !words.has(end)) {
    throw Error('Please use words from the English dictionary')
  }

  let result = new Set()
  let paths = new Map()
  let visited = new Map()
  let unvisited = new Map(words.toSeq().map((k, v) => ([k, 1])))

  words.forEach(word => {
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

  let c = paths.get(end)
  result = result.add(end)

  for (let i = 0; i < 5; i++) {
    if (c.prevNode !== null) {
      result = result.add(c.prevNode)
      c = paths.get(c.prevNode)
    }
  }

  return result.reverse()
}
