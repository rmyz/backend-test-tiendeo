const { startingPosition, commands } = require("../inputDrone");

describe("[startingPosition]", () => {
  const limits = { x: 10, y: 10 };

  it("should return the drone with the correct values", () => {
    const input = "5 7 E";

    expect(startingPosition(limits, input)).toEqual({
      x: 5,
      y: 7,
      orientation: "E"
    });
  });

  it("should return the drone with modified values if they are bigger than the limit", () => {
    const input = "12 -15 N";

    expect(startingPosition(limits, input)).toEqual({
      x: 10,
      y: -10,
      orientation: "N"
    });
  });

  it("should return undefined if input is wrong", () => {
    const wrongInput = "TEST";

    expect(startingPosition(limits, wrongInput)).toEqual(undefined);
  });
});

describe("[commands]", () => {
  const limits = { x: 7, y: 7 };
  const _commands = "RLMMM";
  const drone = { x: 3, y: 2, orientation: "N" };

  it("should return drone with new position", () => {
    expect(commands(drone, limits, _commands)).toEqual({ ...drone, y: 5 });
  });

  it("should return the drone with the same position if no commands", () => {
    expect(commands(drone, limits, "")).toEqual(drone);
  });

  it("should ignore commands if they are not valid", () => {
    expect(commands(drone, limits, "emmtp")).toEqual({
      x: 3,
      y: 4,
      orientation: "N"
    });
  });

  it("should return undefined if no drone", () => {
    expect(commands(undefined, limits, _commands)).toEqual(undefined);
  });

  it("should return undefined if no limits", () => {
    expect(commands(drone, undefined, _commands)).toEqual(undefined);
  });
});
