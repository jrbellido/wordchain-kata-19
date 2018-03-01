const isGreaterThan = require('./isGreaterThan')

module.exports = function findSmallestUnvisitedNode(paths, unvisited) {
  let smallest = null

  paths.mapKeys(k => {
    if (!unvisited.has(k))
      return

    if (smallest === null || isGreaterThan(paths.get(smallest).distance, paths.get(k).distance))
      smallest = k
  })

  return smallest
}
