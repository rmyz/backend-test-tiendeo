const changeOrientation = (drone, orientation) => {
  try {
    switch (drone.orientation.toUpperCase()) {
      case "N":
        if (orientation.toUpperCase() === "L")
          return { ...drone, orientation: "O" };
        return { ...drone, orientation: "E" };
      case "O":
        if (orientation.toUpperCase() === "L")
          return { ...drone, orientation: "S" };
        return { ...drone, orientation: "N" };
      case "E":
        if (orientation.toUpperCase() === "L")
          return { ...drone, orientation: "N" };
        return { ...drone, orientation: "S" };
      case "S":
        if (orientation.toUpperCase() === "L")
          return { ...drone, orientation: "E" };
        return { ...drone, orientation: "O" };
      default:
        break;
    }
  } catch {
    return undefined;
  }
};

const move = (limits, drone) => {
  try {
    let _drone = drone;
    switch (drone.orientation.toUpperCase()) {
      case "N":
        if (drone.y < limits.y) _drone = { ...drone, y: drone.y + 1 };
        break;
      case "O":
        if (drone.x > -limits.x) _drone = { ...drone, x: drone.x - 1 };
        break;
      case "E":
        if (drone.x < limits.x) _drone = { ...drone, x: drone.x + 1 };
        break;
      case "S":
        if (drone.y > -limits.y) _drone = { ...drone, y: drone.y - 1 };
        break;
      default:
        break;
    }

    return _drone;
  } catch {
    return undefined;
  }
};

module.exports = { changeOrientation, move };
