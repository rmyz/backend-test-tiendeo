module.exports = function(drones) {
  try {
    drones.map(({ x = 0, y = 0, orientation = "" }) => {
      console.log(
        `A drone has returned home, last position registered was [${x},${y}] {${orientation}}`
      );
    });
  } catch (error) {
    console.error(error);
  }
};
