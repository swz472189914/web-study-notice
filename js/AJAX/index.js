/*
 * @Author: Alex Shi
 * @Date: 2023-09-15 09:49:01
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-15 09:50:43
 * @Description: AJAX
 * @FilePath: /vscode-workspace/web-study-notice/js/AJAX/index.js
 */
// AJAX
function ajax(url, method, data, success) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      success(xhr.responseText);
    } else {
      console.log(xhr.readyState, xhr.status);
    }
  };
  if (method === "GET") {
    xhr.send(null);
  } else {
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  }
}
