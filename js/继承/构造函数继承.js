/*
 * @Author: Alex Shi
 * @Date: 2023-09-14 14:33:29
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-14 14:38:14
 * @Description: 构造函数继承
 * @FilePath: /vscode-workspace/web-study-notice/js/继承/构造函数继承.js
 */
// 构造函数继承
/*
 *  由于方法必须定义在构造函数中，所以会导致每次创建子类实例都会创建一遍方法。
 */
function Animal(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}
function Dog(name) {
  Animal.call(this, name);
}
Dog.prototype = new Animal();
const dog1 = new Dog("dog1");
const dog2 = new Dog("dog2");
console.log(dog1.getName()); // dog1
console.log(dog2.getName()); // dog2
