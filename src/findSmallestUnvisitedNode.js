const isGreaterThan = require('./isGreaterThan')
const elementExists = require('./arrayUtils').elementExists

module.exports = function findSmallestUnvisitedNode(paths, unvisited) {
  let smallest = null
  let n, keys = Object.keys(paths)

  for (n = 0; n < keys.length; n++) {
    let key = keys[n]
    if (!elementExists(unvisited, key))
      continue
    if (smallest === null || isGreaterThan(paths[smallest].distance, paths[key].distance))
      smallest = key
  }

  return smallest
}
