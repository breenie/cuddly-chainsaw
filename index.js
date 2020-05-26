const wordSearchSolver = require("word-search-solver");
const fs = require("fs");

const matrix = fs
  .readFileSync(__dirname + "/matrix.txt")
  .toString()
  .split("\n");

const dictionary = fs
  .readFileSync(__dirname + "/dictionary.txt")
  .toString()
  .split("\n");

const solution = wordSearchSolver(matrix, dictionary)
  .filter(word => word.found)
  .map(word => `${word.word} (${word.firstLetter}, ${word.lastLetter})`);

console.log(`Found ${solution.length} countries`);
console.log(solution);
