const assert = require('assert')
const it = require('mocha').it
const describe = require('mocha').describe
const removeItem = require('../src/arrayUtils').removeItem
const removeDuplicates = require('../src/arrayUtils').removeDuplicates

describe('arrayUtils', () => {
  describe('removeItem', () => {
    it('should remove an item from the middle of an array', () => {
      const result = removeItem(['a', 'b', 'c', 'd'], 'c')
      assert.deepEqual(result, ['a', 'b', 'd'])
    })

    it('should remove an item from the beginning of an array', () => {
      const result = removeItem(['a', 'b', 'c', 'd'], 'a')
      assert.deepEqual(result, ['b', 'c', 'd'])
    })

    it('should remove an item from the end of an array', () => {
      const result = removeItem(['a', 'b', 'c', 'd'], 'd')
      assert.deepEqual(result, ['a', 'b', 'c'])
    })
  })

  describe('removeDuplicates', () => {
    it('should remove duplicated elements from an array', () => {
      assert.deepEqual(removeDuplicates(['a', 'b', 'b']), ['a', 'b'])
    })
  })
})
