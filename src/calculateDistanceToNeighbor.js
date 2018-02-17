module.exports = function calculateDistanceToNeighbor(paths, origin) {
  let previous = paths[origin]
  let sum = 0

  if (previous.distance !== null)
    sum += previous.distance
  sum = sum + 1

  return sum
}
