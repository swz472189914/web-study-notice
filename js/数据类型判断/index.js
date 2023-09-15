/*
 * @Author: Alex Shi
 * @Date: 2023-09-14 14:24:40
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-14 14:28:52
 * @Description: 数据类型判断
 * @FilePath: /vscode-workspace/web-study-notice/js/数据类型判断/index.js
 */
/**
 * @description 判断数据类型
 * @param {any} obj 任意类型
 */
function typeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
console.log(typeOf(1)); // number
console.log(typeOf("1")); // string
console.log(typeOf(true)); // boolean
console.log(typeOf(undefined)); // undefined
console.log(typeOf(null)); // null
console.log(typeOf({})); // object
console.log(typeOf([])); // array
console.log(typeOf(new Date())); // date
console.log(typeOf(function () {})); // function
