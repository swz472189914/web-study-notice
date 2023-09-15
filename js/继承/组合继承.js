/*
 * @Author: Alex Shi
 * @Date: 2023-09-14 14:39:16
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-14 14:41:22
 * @Description: 组合继承
 * @FilePath: /vscode-workspace/web-study-notice/js/继承/组合继承.js
 */
// 组合继承
function Animal(name) {
  this.name = name;
  this.colors = ["black", "white"];
}
Animal.prototype.getName = function () {
  return this.name;
};
function Dog(name, age) {
  Animal.call(this, name);
  this.age = age;
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
const dog1 = new Dog("奶昔", 2);
dog1.colors.push("brown");
const dog2 = new Dog("哈赤", 1);
console.log(dog1, dog2);
