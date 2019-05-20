const { changeOrientation, move } = require("./processCommands");

const startingPosition = (limits, drone) => {
  try {
    const _drone = drone.split(" ");

    let x = Number(_drone[0]);
    let y = Number(_drone[1]);
    const orientation = _drone[2].toUpperCase();

    if (x > limits.x) x = limits.x;
    if (x < -limits.x) x = -limits.x;
    if (y > limits.y) y = limits.y;
    if (y < -limits.x) y = -limits.y;

    return { x, y, orientation };
  } catch {
    return undefined;
  }
};

const commands = (drone, limits, commands) => {
  try {
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
  } catch {
    return undefined;
  }
};

module.exports = { startingPosition, commands };
