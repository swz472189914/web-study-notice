/*
 * @Author: Alex Shi
 * @Date: 2023-09-15 09:38:35
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-15 09:38:37
 * @Description: 函数防抖
 * @FilePath: /vscode-workspace/web-study-notice/js/函数防抖/index.js
 */
// 函数防抖
function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  };
}
