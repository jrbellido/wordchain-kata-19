let fs = require('fs')
let cli = require('cli')

let findShortestPath = require('./src/findShortestPath')

const words = fs.readFileSync('dictionary.txt', 'utf8').split('\n')

let params = cli.parse({
  begin: ['begin', 'Begining word', 'string'],
  end: ['end', 'Ending word', 'string']
}, null)

if (params.begin === null || params.end === null) {
  console.error("ERROR: Invalid arguments")
  process.exit(1)
}

let t0 = new Date()
let result = findShortestPath(words, params.begin, params.end)

console.log('Input:', params)
console.log(result)
console.log(`Finished in ${(new Date() - t0) / 1000} seconds`)
