var fireShot = require('../game_logic/ship_methods.js').fireShot;

function checkGameStatus(players) {
  return false;
}

function takeTurn(opposingPlayer, guessFunction) {
  var coordinates = guessFunction();
  fireShot(opposingPlayer, coordinates);
  var gameOver = checkGameStatus();

  return gameOver;
}

module.exports.checkGameStatus = checkGameStatus;
module.exports.takeTurn = takeTurn;
