const { changeOrientation, move } = require("./processCommands");

const startingPosition = (limits, drone) => {
  const _drone = drone.split(" ");

  let x = Number(_drone[0]);
  let y = Number(_drone[1]);
  const orientation = _drone[2].toUpperCase();

  if (x > limits.x) x = limits.x;
  if (x < -limits.x) x = -limits.x;
  if (y > limits.y) y = limits.y;
  if (y < -limits.x) y = -limits.y;

  return { x, y, orientation };
};

const commands = (drone, limits, commands) => {
  const _commands = commands.replace(/\s+/g, "").split("");
  let _drone = drone;

  _commands.map(command => {
    switch (command.toUpperCase()) {
      case "L":
        _drone = changeOrientation(_drone, "L");
        break;
      case "R":
        _drone = changeOrientation(_drone, "R");
        break;
      case "M":
        _drone = move(limits, _drone);
        break;
      default:
        break;
    }
  });

  return _drone;
};

module.exports = { startingPosition, commands };
