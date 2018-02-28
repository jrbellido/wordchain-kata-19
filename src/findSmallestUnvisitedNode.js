const isGreaterThan = require('./isGreaterThan')
const elementExists = require('./arrayUtils').elementExists

module.exports = function findSmallestUnvisitedNode(paths, unvisited) {
  let smallest = null

  return paths.findLastKey((v, k) => {
      return unvisited.has(k) && (smallest === null || isGreaterThan(paths.get(smallest).distance, paths.get(k).distance))
    }
  )
}
