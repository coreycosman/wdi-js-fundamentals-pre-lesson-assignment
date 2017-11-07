// pacman-arrays.js
var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

var inky = {};
inky.colour = 'Cyan';
inky.personality = 'Shadow';
console.log(inky);

var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };
console.log(ghosts);
/*
var name = 'Pac-Man';
var num_ghosts = 4;
var sentence = 'Our hero, ' + name + ', must eat ' + num_ghosts + ' ghosts for maximum points.';
*/
console.log('There are ' + ghosts.length + ' ghosts.');
console.log('Their names are: ');
console.log(ghosts[0]);
console.log(ghosts[1]);
console.log(ghosts[2]);
console.log(ghosts[3]);
console.log(ghosts.blinky);

for (var index = 0; index < ghosts.length; index++) {

  console.log('Pac-man eats ' + ghosts[index]);
}

/*
var powerPelletEaten = false;
var ghosts = 4;

while (true) {
  console.log('Ghosts remaining: ' + ghosts);

  if (powerPelletEaten == false) {
    console.log('Pac-Man eats the power pellet.');
    powerPelletEaten = true;
  } else if (ghosts > 0) {
    console.log('Pac-Man eats a ghost.');
    ghosts--;
  } else {
    break;
  }
}
console.log('Pac-Man returns home after a long day in the maze.');

var ghost = 'Blinky';
var colour;

switch (ghost) {
  case 'Inky':
    colour = 'Cyan';
    break;
  case 'Blinky':
    colour = 'Red';
    break;
  case 'Pinky':
    colour = 'Pink';
    break;
  case 'Clyde':
    colour = 'Orange';
    break;
}

console.log(ghost + ' is the colour ' + colour);

function eatDot() {
  console.log("MUNCH!");
}
var highScores = [];
function addHighScore(highScoreList, playerInitials, score) {
    var record = { player: playerInitials, score: score };
    highScoreList.push(record); // add record to array
  }
highScores
[] // empty array to start
addHighScore(highScores, 'SDL', 2000);
 highScores
[ { player: 'SDL', score: 2000 } ]
addHighScore(highScores, 'JSL', 10000);
highScores
[ { player: 'SDL', score: 2000 },
  { player: 'JSL', score: 10000 } ]


  function addScore(currentScore, eaten) {
    switch (eaten) {
    case 'dot':
      scoreToAdd = 10;
      break;
    case 'powerPellet':
      scoreToAdd = 50;
      break;
    case 'firstGhost':
      scoreToAdd = 200;
      break;
    case 'secondGhost':
      scoreToAdd = 400;
      break;
    }

    return currentScore + scoreToAdd;
  }

  var score = 0;

  score = addScore(score, 'dot');
  score = addScore(score, 'dot');
  score = addScore(score, 'dot');
  score = addScore(score, 'powerPellet');
  score = addScore(score, 'firstGhost');
  console.log('Your score: ' + score);
*/
