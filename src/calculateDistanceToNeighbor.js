module.exports = function calculateDistanceToNeighbor(paths, origin) {
  let previous = paths.get(origin)
  let sum = 1

  if (previous.distance !== null)
    sum += previous.distance

  return sum
}
