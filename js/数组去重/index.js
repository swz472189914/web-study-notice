/*
 * @Author: Alex Shi
 * @Date: 2023-09-14 14:47:16
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-14 14:48:21
 * @Description: 数组去重
 * @FilePath: /vscode-workspace/web-study-notice/js/数组去重/index.js
 */
// ES5
function unique(arr) {
  var res = arr.filter(function (item, index, array) {
    return array.indexOf(item) === index;
  });
  return res;
}

// ES6
var unique = (a) => [...new Set(a)];
