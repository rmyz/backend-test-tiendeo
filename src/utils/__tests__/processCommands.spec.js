const { changeOrientation, move } = require("../processCommands");

describe("[changeOrientation]", () => {
  it("should return a new orientation, O in this case", () => {
    const drone = { x: 2, y: 4, orientation: "N" };

    expect(changeOrientation(drone, "R")).toEqual({
      ...drone,
      orientation: "E"
    });
  });

  it("should return a new orientation, E in this case", () => {
    const drone = { x: 2, y: 4, orientation: "N" };

    expect(changeOrientation(drone, "L")).toEqual({
      ...drone,
      orientation: "O"
    });
  });

  it("should return a new orientation, N in this case", () => {
    const drone = { x: 2, y: 4, orientation: "E" };

    expect(changeOrientation(drone, "L")).toEqual({
      ...drone,
      orientation: "N"
    });
  });

  it("should return a new orientation, S in this case", () => {
    const drone = { x: 2, y: 4, orientation: "E" };

    expect(changeOrientation(drone, "R")).toEqual({
      ...drone,
      orientation: "S"
    });
  });

  it("should return a new orientation, S in this case", () => {
    const drone = { x: 2, y: 4, orientation: "S" };

    expect(changeOrientation(drone, "L")).toEqual({
      ...drone,
      orientation: "E"
    });
  });

  it("should return a new orientation, N in this case", () => {
    const drone = { x: 2, y: 4, orientation: "S" };

    expect(changeOrientation(drone, "R")).toEqual({
      ...drone,
      orientation: "O"
    });
  });

  it("should return a new orientation, S in this case", () => {
    const drone = { x: 2, y: 4, orientation: "O" };

    expect(changeOrientation(drone, "L")).toEqual({
      ...drone,
      orientation: "S"
    });
  });

  it("should return a new orientation, N in this case", () => {
    const drone = { x: 2, y: 4, orientation: "O" };

    expect(changeOrientation(drone, "R")).toEqual({
      ...drone,
      orientation: "N"
    });
  });
});

describe("[move]", () => {});
