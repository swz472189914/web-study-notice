/*
 * @Author: Alex Shi
 * @Date: 2023-09-14 15:23:14
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-14 15:26:20
 * @Description: 解析URL参数为对象
 * @FilePath: /vscode-workspace/web-study-notice/js/解析URL参数为对象/index.js
 */
function parseParam(url) {
  // 提取?后面的字符串
  const paramStr = /\?([^#]+)/.exec(url)[1];
  // 将字符串以&分割后存到数组中
  const paramArr = paramStr.split("&");
  let paramsObj = {};
  // 将params存到对象中
  paramArr.forEach((params) => {
    // 处理有value的参数
    if (/=/.test(params)) {
      // 将参数以=分割后存到数组中
      let [key, val] = params.split("=");
      // 处理中文
      val = decodeURIComponent(val);
      // 处理数字
      val = /^\d+$/.test(val) ? parseFloat(val) : val;
      // 判断是否已经存在对象中
      if (paramsObj.hasOwnProperty(key)) {
        // 如果存在则转换为数组存进去
        paramsObj[key] = [].concat(paramsObj[key], val);
      } else {
        // 如果不存在直接存
        paramsObj[key] = val;
      }
    } else {
      // 处理没有value的参数
      paramsObj[params] = true;
    }
  });
  return paramsObj;
}
