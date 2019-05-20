const inputLimits = require("../inputLimits");

describe("[inputLimits]", () => {
  it("should return correct limit if there are spaces between", () => {
    const input = "3    5";

    expect(inputLimits(input)).toEqual({ x: 3, y: 5 });
  });

  it("should return correct limit if there are no spaces between", () => {
    const input = "35";

    expect(inputLimits(input)).toEqual({ x: 3, y: 5 });
  });

  it("should return undefined if the input is wrong", () => {
    const input = "test123";

    expect(inputLimits(input)).toEqual(undefined);
  });
});
