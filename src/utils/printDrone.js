module.exports = function(drones) {
  drones.map(({ x = 0, y = 0, orientation = "" }) => {
    console.log(
      `A drone has returned home, last position registered was [${x},${y}] {${orientation}}`
    );
  });
};
