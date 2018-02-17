const assert = require('assert')
const it = require('mocha').it
const describe = require('mocha').describe
const findShortestPath = require('../src/findShortestPath')
const isGreaterThan = require('../src/isGreaterThan')
const findSmallestUnvisitedNode = require('../src/findSmallestUnvisitedNode')
const findUnvisitedNeighbors = require('../src/findUnvisitedNeighbors')
const calculateDistanceToNeighbor = require('../src/calculateDistanceToNeighbor')
const compareWords = require('../src/compareWords')

const words = [
  'cat',
  'mat',
  'cot',
  'cog',
  'pot',
  'dog',
  'man',
  'sss',
  'pan',
  'dot',
  'dut',
  'pen',
  'cut',
  'men',
  'len',
  'leg',
  'big',
  'log',
]

const paths = {
  cat: {distance: 0, prevNode: null},
  mat: {distance: 5, prevNode: 'cat'},
  cot: {distance: 4, prevNode: 'cat'},
  cog: {distance: 5, prevNode: 'cot'},
  pot: {distance: 1, prevNode: 'cot'},
  dog: {distance: null, prevNode: null},
  man: {distance: 3, prevNode: 'mat'}
}

describe('wordchain', () => {
  describe('findShortestPath', () => {
    it('should return the shortest path given a known case', () => {
      const result = findShortestPath(words, 'cat', 'dog')
      assert.equal(result.length, 4)
    })
  })

  describe('isGreaterThan', () => {
    it('should return true if only the first parameter is infinite (null)', () => {
      assert.equal(isGreaterThan(null, 5), true)
    })

    it('should return true if the first parameter is greater than the second one', () => {
      assert.equal(isGreaterThan(8, 5), true)
    })

    it('should return false if only the second parameter is infinite (null)', () => {
      assert.equal(isGreaterThan(5, null), false)
    })

    it('should return false if the first parameter is lesser than the second one', () => {
      assert.equal(isGreaterThan(5, 8), false)
    })

    it('should return false if both parameters are the same', () => {
      assert.equal(isGreaterThan(5, 5), false)
    })

    it('should return false if both parameters are infinite (null)', () => {
      assert.equal(isGreaterThan(null, null), false)
    })
  })

  describe('findSmallestUnvisitedNode', () => {
    it('should return the first unvisited node with the smallest distance', () => {
      const result = findSmallestUnvisitedNode(paths, ['dog', 'cat', 'man', 'pot'])
      assert.equal(result, 'cat')
    })
  })

  describe('findUnvisitedNeighbors', () => {
    it('should find all valid neighbors', () => {
      const result = findUnvisitedNeighbors(words, ['cat', 'dog'], 'dog')
      assert.deepEqual(result, ['cog', 'dot', 'log'])
    })
  })

  describe('compareWords', () => {
    it('should return true when there\'s only one different letter', () => {
      const result = compareWords('dog', 'cog')
      assert.equal(result, true)
    })

    it('should return false when there are more than one different letters', () => {
      const result = compareWords('dog', 'pot')
      assert.equal(result, false)
    })
  })
})
