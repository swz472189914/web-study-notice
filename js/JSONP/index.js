/*
 * @Author: Alex Shi
 * @Date: 2023-09-15 09:46:58
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-15 09:47:07
 * @Description: JSONP
 * @FilePath: /vscode-workspace/web-study-notice/js/JSONP/index.js
 */
// JSONP
function jsonp(url, params, callback) {
  const script = document.createElement("script");
  window[callback] = function (data) {
    document.body.removeChild(script);
    callback(data);
  };
  params = { ...params, callback };
  const arrs = [];
  for (let key in params) {
    arrs.push(`${key}=${params[key]}`);
  }
  script.src = `${url}?${arrs.join("&")}`;
  document.body.appendChild(script);
}
