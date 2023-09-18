/*
 * @Author: Alex Shi
 * @Date: 2023-09-15 09:39:56
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-15 09:41:05
 * @Description: 函数节流
 * @FilePath: /vscode-workspace/web-study-notice/js/函数节流/index.js
 */
// 函数节流
function throttle(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn();
      timer = null;
    }, delay);
  };
}
