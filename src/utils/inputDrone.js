const { changeOrientation, move } = require("./processCommands");

const startingPosition = (limits, drone) => {
  const _drone = drone.split(" ");

  let x = _drone[0];
  let y = _drone[1];
  const orientation = _drone[2];

  if (x > limits.x) x = limits.x;
  if (x < -limits.x) x = -limits.x;
  if (y > limits.y) y = limits.y;
  if (y < -limits.x) y = -limits.y;

  return { x, y, orientation };
};

const commands = (drone, limits, commands) => {
  const _commands = commands.replace(/\s+/g, "").split("");
  let _drone;

  _commands.map(command => {
    switch (command.toUpperCase()) {
      case "L":
        _drone = changeOrientation(drone, "L");
        break;
      case "R":
        _drone = changeOrientation(drone, "R");
        break;
      case "M":
        _drone = move(limits, drone);
        break;
      default:
        break;
    }
  });

  return _drone;
};

module.exports = { startingPosition, commands };
