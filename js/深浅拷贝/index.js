/*
 * @Author: Alex Shi
 * @Date: 2023-09-14 14:58:29
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-14 15:08:01
 * @Description: 深浅拷贝
 * @FilePath: /vscode-workspace/web-study-notice/js/深浅拷贝/index.js
 */
// 浅拷贝
function shallowCopy(obj) {
  if (typeOf(obj) !== "object") {
    return;
  }
  // instanceof用于判断一个变量是否某个对象的实例
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    // hasOwnProperty()用于判断一个对象是否有指定的自身属性
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// 简单版深拷贝
function deepClone(obj) {
  if (typeOf(obj) !== "object") {
    return;
  }
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}

// 完整版深拷贝
const isObject = (target) => {
  return (target === "function" || typeof target === "object") && target !== null;
};
function deepClone(target, map = new WeakMap()) {
  if (map.get(target)) {
    return target;
  }
  // 获取当前值的构造函数：获取它的类型
  let constructor = target.constructor;
  // 检测当前target是否与正则、日期格式对象匹配
  if (/^(RegExp|Date)$/i.test(constructor.name)) {
    return new constructor(target);
  }
  if (isObject(target)) {
    map.set(target, true);
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = deepClone(target[prop], map);
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}
