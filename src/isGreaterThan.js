module.exports = function isGreaterThan(a, b) {
  return (b !== null && (a === null && typeof b === 'number' || a > b))
}
