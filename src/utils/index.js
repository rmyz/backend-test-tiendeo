const { startingPosition, commands } = require("./inputDrone");
const inputLimits = require("./inputLimits");
const printDrone = require("./printDrone");
const { changeOrientation, move } = require("./processCommands");

module.exports = {
  startingPosition,
  commands,
  changeOrientation,
  move,
  inputLimits,
  printDrone
};
