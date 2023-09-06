/**
 * @description 判断奇偶数
 * @param {number} n
 * @returns {boolean} true: 奇数 false: 偶数
 */
function isOdd(n) {
  return n % 2 == 1 || n % 2 == -1;
}

console.log(isOdd(1)); // true
