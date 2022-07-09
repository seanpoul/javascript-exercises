const ftoc = function (ftoc) {
  let cel = (ftoc - 32) * 5 / 9
  return Math.round(cel * 10) / 10
};

const ctof = function (ctof) {
  let far = ctof  / 5 * 9 +32
  return Math.round(far * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
