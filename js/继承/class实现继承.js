/*
 * @Author: Alex Shi
 * @Date: 2023-09-14 14:44:34
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-14 14:45:39
 * @Description: Class实现继承
 * @FilePath: /vscode-workspace/web-study-notice/js/继承/class实现继承.js
 */
class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
const dog1 = new Dog("dog1", 1);
console.log(dog1);
