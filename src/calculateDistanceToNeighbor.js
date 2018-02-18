module.exports = function calculateDistanceToNeighbor(paths, origin) {
  let previous = paths[origin]
  let sum = 1

  if (previous.distance !== null)
    sum += previous.distance

  return sum
}
