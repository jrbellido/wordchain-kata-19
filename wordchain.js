const fs = require('fs')
const cli = require('cli')

const findShortestPath = require('./src/findShortestPath')
const removeDuplicates = require('./src/arrayUtils').removeDuplicates

let words = fs.readFileSync('dictionary.txt', 'utf8').split('\n')

let params = cli.parse({
  begin: ['begin', 'Begining word', 'string'],
  end: ['end', 'Ending word', 'string']
}, null)

if (params.begin === null || params.end === null) {
  console.error("ERROR: Invalid arguments")
  process.exit(1)
}

console.log('Input:', params)

let t0 = new Date()
let result = findShortestPath(words, params.begin, params.end)
console.log(`Finished in ${(new Date() - t0) / 1000} seconds`)

console.log(result)
