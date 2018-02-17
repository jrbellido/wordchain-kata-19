module.exports = function compareWords(a, b) {
  let differences = 0

  if (typeof a === 'undefined' || typeof b === 'undefined')
    return false

  if (a.length !== b.length)
    return false

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i])
      differences++
  }

  return differences === 1
}
