/*
 * @Author: Alex Shi
 * @Date: 2023-09-07 12:13:21
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-07 12:16:42
 * @Description: fetch添加超时
 * @FilePath: /vscode-workspace/web-study-notice/js/fetch添加超时/index.js
 */
// 给fetch添加超时功能

/**
 * @param {Number} timeout
 * @returns {Function} fetch
 */
function createFetchWithTimeout(timeout = 3000) {
  /**
   * @param {String} url
   * @param {Object} options
   * @returns {Promise} fetch
   */
  return function (url, options) {
    return new Promise((resolve, reject) => {
      const singleController = new AbortController();
      fetch(url, {
        ...options,
        signal: singleController.signal
      })
        .then((response) => resolve(response))
        .catch((error) => reject(error));
      setTimeout(() => {
        reject(new Error("fetch timeout"));
        // 取消请求
        singleController.abort();
      }, timeout);
    });
  };
}
