var Scrabble = function() {};
//global variable letterscore
letterScore = {"A": 1, "B": 3, "C": 3, "D": 2, "E": 1, "F": 4, "G": 2, "H": 4, "I": 1, "J": 8, "K": 5, "L": 1, "M": 3, "N": 1, "O": 1, "P": 3, "Q": 10, "R": 1, "S": 1, "T": 1, "U": 1, "V": 4, "W": 4, "X": 8, "Y": 4, "Z": 10};

//function score that is prototype of Scrabble
Scrabble.prototype.score = function(word) {
  word = word.toLowerCase();
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

Scrabble.prototype.highestScoreFrom = function(arrayOfWords)
{
  this.arrayOfWords = arrayOfWords;
  var scoredWords = [];
  var highestScore = 0;

  for (var i = 0; i < arrayOfWords.length; i++) {
    var word = arrayOfWords[i];
    var scoredInt = this.score(word);
    if (highestScore <= scoredInt){
      highestScore = scoredInt;
    }
  }

  for (var i = 0; i < arrayOfWords.length; i++) {
    var word = arrayOfWords[i];
    var scoredInt = this.score(word);
    if(scoredInt == highestScore){
      scoredWords.push(word);
    }
  }

  if(scoredWords.length > 1)
  {
    scoredWords.sort(function(a, b ) {
      return b.length - a.length;
    });
    if ((scoredWords[0].length)==7) {
      return scoredWords[0];
    } else{
      return(scoredWords[scoredWords.length - 1]);
    }
  }
  else{
    return scoredWords[0];
  }
};

var Player = function(name){
  this.name = name;
  this.plays =[];
  scrabble = new Scrabble;
};
Player.prototype.play = function(word) {
  if (this.hasWon()===false){
    this.plays.push(word);
  }
  else {
    return false;
  }
  // console.log(this.plays)
};
// console.log(Player.play)

Player.prototype.totalScore = function() {
  var totalScore = 0;
  for(var i = 0; i < this.plays.length; i++){
    totalScore +=scrabble.score(this.plays[i]);
    // console.log(scrabble.score(this.plays[i]));
    // console.log(this.plays);
    // console.log(totalScore);
  }
  return totalScore;
  // console.log(totalScore);
};

Player.prototype.hasWon = function(){
  if (this.totalScore() > 100){
    return true;
  }
  else {
    return false;

  }
};

Player.prototype.highestScoringWord = function(){
  var highstWordScored = scrabble.highestScoreFrom(this.plays);
  return highstWordScored;
};

Player.prototype.highestWordScore = function(){
  var highstScore = scrabble.score(this.highestScoringWord);
  return highstScore;
  // console.log(highstScore);
};


var player = new Player("Beylul");
console.log(player.plays);
console.log(player.play("word"));
console.log(player.plays);
// console.log(player.totalScore());
// console.log(player.plays);
// console.log(player.hasWon());
// console.log(player.play("zzzzzzz"));
// console.log(player.play("zzzzzzz"));
// console.log(player.totalScore());
// console.log(player.hasWon());
// console.log(player.highestScoringWord());
// console.log(player.highestWordScore());




// //testing score highestScoreFrom
// var scrabble = new Scrabble();
// console.log(scrabble.highestScoreFrom(["iiiiiii","aaa", "asefr", "aer", "aserd", "aaaaaaa", "iiiiiid"]));
// console.log(scrabble.highestScoreFrom(["dd","iiii"]));
// console.log(scrabble.highestScoreFrom(["iiii","dd"]));
//
// console.log(scrabble.highestScoreFrom(["aaa", "asefr", "aer", "aserd", "iiiiiii", "aaaaaaa"]));
// console.log(scrabble.highestScoreFrom(["aaa", "asefr", "aer", "aserd","aaaaaaa", "iiiiiii"]));
// console.log(scrabble.highestScoreFrom(["aaa", "asefr", "aer", "aserd", "aaaaaaa", "zzzzz"]));
//
// //testing score
// console.log(scrabble.score("iiiiiid"));
// console.log(scrabble.score("iiiiiii"));
// console.log(scrabble.score("aaaaaaa"));
//   console.log(scrabble.score("zzzzz"));


// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };
// module.exports = Scrabble;
//
// scrabb = new Scrabble;
// console.log(scrabb.helloWorld());
