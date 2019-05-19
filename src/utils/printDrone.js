module.exports = function(drones) {
  drones.map(({ x, y, orientation }) => {
    console.log(
      `A drone has returned home, last position registered ${x} ${y} with an orientation of ${orientation}`
    );
  });
};
