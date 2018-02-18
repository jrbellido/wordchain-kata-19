function arrayClone(arr) {
  let i, len = arr.length,
    arr_clone = new Array(len)
  for (i = 0; i < len; i += 1) {
    arr_clone[i] = arr[i]
  }
  return arr_clone
}

function removeDuplicates(a) {
  const seen = {}
  const out = []
  const len = a.length
  let j = 0
  for (let i = 0; i < len; i++) {
    const item = a[i]
    if (seen[item] !== 1) {
      seen[item] = 1
      out[j++] = item
    }
  }
  return out
}

function removeItem(list, element) {
  for (let i = 0, l = list.length; i < l; i++) {
    if (list[i] === element) {
      list.splice(i, 1)
      break
    }
  }
  return list
}

function elementExists(list, element) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      return true
    }
  }
  return false
}

function firstElement(list) {
  return list[0]
}

function lastElement(list) {
  return list[list.length - 1]
}

exports.arrayClone = arrayClone
exports.removeItem = removeItem
exports.elementExists = elementExists
exports.firstElement = firstElement
exports.lastElement = lastElement
exports.removeDuplicates = removeDuplicates
