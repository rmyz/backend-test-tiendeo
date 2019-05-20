module.exports = function(limits) {
  try {
    const position = limits.replace(/\s+/g, "").split("");
    const x = position[0];
    const y = position[1];
    if (Number(x) && Number(y))
      return {
        x: Number(x),
        y: Number(y)
      };

    return undefined;
  } catch (error) {
    console.error(error);
  }
};
