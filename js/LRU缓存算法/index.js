/*
 * @Author: Alex Shi
 * @Date: 2023-09-07 12:31:13
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-07 12:35:31
 * @Description: LRU缓存算法
 * @FilePath: /vscode-workspace/web-study-notice/js/LRU缓存算法/index.js
 */
class LRUCache {
  #map;
  #length;
  /**
   * @param {any} length
   */
  constructor(length) {
    this.#length = length;
    this.#map = new Map();
  }
  /**
   * @param {any} key
   * @returns {any}
   */
  get(key) {
    if (!this.#map.has(key)) {
      return;
    }
    const value = this.#map.get(key);
    this.#map.delete(key);
    this.#map.set(key, value);
    return value;
  }
  /**
   * @param {any} key
   * @param {any} value
   * @returns {void}
   */
  set(key, value) {
    if (this.#map.has(key)) {
      this.#map.delete(key);
    }
    this.#map.set(key, value);
    if (this.#map.size > this.#length) {
      this.#map.delete(this.#map.keys().next().value);
    }
  }
}
