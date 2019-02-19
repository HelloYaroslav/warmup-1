module.exports = function warmup(temperature) {
  return (temperature * 9/5) + 32
};


console.log(module.exports(22));