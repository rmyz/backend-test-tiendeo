module.exports = function(limits) {
  const position = limits.replace(/\s+/g, "").split("");
  return {
    x: Number(position[0]),
    y: Number(position[1])
  };
};
