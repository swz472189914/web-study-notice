/*
 * @Author: Alex Shi
 * @Date: 2023-09-14 15:09:32
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-14 15:17:12
 * @Description: 事件总线-发布订阅模式
 * @FilePath: /vscode-workspace/web-study-notice/js/事件总线/index.js
 */
class EventEmitter {
  constructor() {
    this.cache = {};
  }
  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn);
    }
    this.cache[name] = [fn];
  }
  off(name, fn) {
    let tasks = this.cache[name];
    if (tasks) {
      const index = findIndex((f) => f === fn || f.callback === fn);
      if (index >= 0) {
        tasks.splice(index, 1);
      }
    }
  }
  emit(name, once = false, ...args) {
    if (this.cache[name]) {
      let tasks = this.cache[name].slice();
      for (let fn of tasks) {
        fn(...args);
      }
      if (once) {
        delete this.cache[name];
      }
    }
  }
}

// 测试
const eventBus = new EventEmitter();
const fn1 = function (name, age) {
  console.log(`${name} ${age}`);
};
const fn2 = function (name, age) {
  console.log(`hello, ${name} ${age}`);
};

eventBus.on("aaa", fn1);
eventBus.on("aaa", fn2);
eventBus.emit("aaa", false, "布兰", 12);
