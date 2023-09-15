/*
 * @Author: Alex Shi
 * @Date: 2023-09-14 14:43:06
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-14 14:43:08
 * @Description: 寄生式组合继承
 * @FilePath: /vscode-workspace/web-study-notice/js/继承/寄生式组合继承.js
 */
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
function prototype(child, parent) {
  const prototype = object(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}
inheritPrototype(Dog, Animal);
