/*
 * @Author: Alex Shi
 * @Date: 2023-09-14 14:50:43
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-14 14:57:22
 * @Description: 数组扁平化
 * @FilePath: /vscode-workspace/web-study-notice/js/数组扁平化/index.js
 */
// ES5 递归
function flatten(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// ES6
function flatten(arr) {
  while (
    arr.some((item) => {
      return Array.isArray(item);
    })
  ) {
    arr = [].concat(...arr);
  }
  return arr;
}
