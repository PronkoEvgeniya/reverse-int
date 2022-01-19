module.exports = function reverse (n) {
  let reverseNumer = Math.abs(n).toString().split('').reverse().join('');
  return reverseNumer;
}
