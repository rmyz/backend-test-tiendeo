const printDrone = require("../printDrone");

describe("[printDrone]", () => {
  beforeEach(() => {
    global.console.log = jest.fn();
  });

  it("should print a single drone", () => {
    const drones = [
      {
        x: 4,
        y: 2,
        orientation: "N"
      }
    ];

    printDrone(drones);

    expect(global.console.log).toHaveBeenCalledWith(
      "A drone has returned home, last position registered was [4,2] {N}"
    );
  });

  it("should print all the nodes", () => {
    const drones = [
      {
        x: 4,
        y: 2,
        orientation: "N"
      },
      {
        x: 6,
        y: 1,
        orientation: "S"
      },
      {
        x: 7,
        y: 4,
        orientation: "E"
      }
    ];

    printDrone(drones);
    drones.map(({ x, y, orientation }) => {
      expect(global.console.log).toHaveBeenCalledWith(
        `A drone has returned home, last position registered was [${x},${y}] {${orientation}}`
      );
    });
  });

  it("should not print drones if there is none", () => {
    expect(global.console.log).not.toHaveBeenCalled();
  });
});
