Kata19: Word Chains
==
Solution implemented in JavaScript ES6 using Mocha for unit testing

More info at: http://codekata.com/kata/kata19-word-chains/

Used resources:
* https://en.wikipedia.org/wiki/Shortest_path_problem
* https://medium.com/basecs/finding-the-shortest-path-with-a-little-help-from-dijkstra-613149fbdc8e

Usage
--

CLI:

    $ npm install
    $ node wordchain --begin cat --end dog

To run tests:

    $ npm test

First version
--
* cat-dog ≈ 17.724 seconds
* ruby-code ≈ 29509.683 seconds

Iteration #1
--
Using Immutable.js for some collections and iterating over them.

Improved performance:

* cat-dog ≈ 3.223 seconds
* ruby-code ≈ 33.001 seconds
