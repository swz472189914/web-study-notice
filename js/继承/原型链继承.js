/*
 * @Author: Alex Shi
 * @Date: 2023-09-14 14:27:42
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-14 14:37:14
 * @Description: 继承
 * @FilePath: /vscode-workspace/web-study-notice/js/继承/原型链继承.js
 */
// 原型链继承
/*
 *  1、原型中包含的引用类型属性将被所有实例共享；
 *  2、子类在实例化的时候不能给父类构造函数传参；
 */
class Animal {
  constructor() {
    this.colors = ["black", "white"];
  }
  getColor() {
    return this.colors;
  }
}
function Dog() {}
Dog.prototype = new Animal();
const dog1 = new Dog();
dog1.colors.push("brown");
const dog2 = new Dog();
console.log(dog2.colors); // ["black", "white", "brown"]
