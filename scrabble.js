var Scrabble = function() {};
//global variable letterscore
letterScore = {"A":1, "B":3, "C":3, "D":2, "E":1, "F":4, "G":2, "H":4, "I":1, "J":8, "K":5, "L":1, "M":3, "N":1, "O":1, "P":3, "Q":10, "R":1, "S":1, "T":1, "U":1, "V":4, "W":4, "X":8, "Y":4, "Z":10};

//function score that is prototype of Scrabble
Scrabble.prototype.score = function(word) {
  word = word.toUpperCase();
  this.word = word.split("");
   var score = 0;
  if (this.word.length == 7) {
    score = 50;
  }
  this.word.forEach(function(i) {
    score += letterScore[i];
  });
  return score;
};

//new scrabble object
var scrabble = new Scrabble();

//testing
console.log(scrabble.score("abc"));


// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };
// module.exports = Scrabble;
//
// scrabb = new Scrabble;
// console.log(scrabb.helloWorld());
