<!--
 * @Author: Alex Shi
 * @Date: 2023-09-18 09:23:05
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-18 10:00:14
 * @Description: HTML
 * @FilePath: /vscode-workspace/web-study-notice/docs/面试/HTML.md
-->

# HTML

1. `src`和`href`的区别
   1. `src`当浏览器解析到该元素时，会暂停其他元素的加载和处理，直到改元素加载完成。会将资源内容全入到当前标签所在位置，将其指向的资源下载应用到文档内，如 js 脚本等。常用于`img`、`script`、`iframe`等标签。
   2. `href`指向外部资源所在的位置，和当前元素位置建立连接，当浏览器解识到它指定的位置，将其下载的时候不会阻止其他资源的加载解析，常用于`a`、`link`标签。
2. HTML5 新增特性
   1. 新增语义化标签，`head`、`footer`、`nav`、`main`、`section`；
   2. 新增表单类型属性`email`、`number`、`时间控件`、`color颜色选择器`、`placeholder`、`autofocus`；
   3. 新增音视频标签`video`、`audio`；
   4. 新增`canvas`画布、websocket 通信、拖拽；
   5. 新增本地存储`localStorage`、`sessionStorage`。
3. 对 HTML 语义化的理解
   1. 方便浏览器爬虫更好的识别内容；
   2. 有利于代码可读性，开发者能清晰的看出网页结构，便于开发和维护。
4. DOCTYPE 的作用
   1. 是 HTML5 中一种标准通用标记语言的文档申明类型，用来告诉浏览器的解析器，该用什么样的方式识别文档。
5. iframe 的缺点与优点
   1. 通常用来加载外部链接，不会印象网页内容的加载；
   2. 优点
      1. 可一件官网也原封不动的加载进来；
      2. 增加代码可用性；
      3. 用来加载显示比较慢的内容，如广告、视频等。
   3. 缺点
      1. 加载的内容无法被浏览器引擎识别，对`SEO`不友好；
      2. 会阻塞`onload`事件加载；
      3. 会产生很多页面，不利于管理。
6. `Canvas`与`SVG`的区别
   1. `canvas`是通过 JavaScript 来绘制 2D 图，是逐像素进行渲染；
   2. `SVG`矢量图是基于 XML 描述的 2D 图形语言，每个元素都是可用的，可以为其添加事件。
7. `script`标签中的`defer`和`async`的异同
   1. 相同
      1. 均表示异步加载外部 JS 脚本，不会阻塞页面的加载解析。
   2. 不同
      1. 执行顺序：有多个`async`标签不能保证先后加载顺序，而多个`defer`标签可以按先后顺序加载；
      2. 是否立即执行：`async`加载完脚本后立即执行，`defer`等文档解析完成后才执行。
8. 行内元素、块级元素、空
   1. 行内：`a`、`b`、`span`、`input`、`img`、`select`、`strong`；
   2. 块：`p`、`div`、`h1`、`ul`、`ol`、`li`、`dl`、`dt`、`dd`；
   3. 空：`hr`、`br`、`img`、`input`、`link`、`meta`。
9. 添加、移除、移动、复制、创建、查找节点
   1. 添加`document.appendChild(dom)`；
   2. 移除`document.removeChild(dom)`；
   3. 移动`document.appendChild(targetDom)`；
   4. 复制`dom.cloneNode(true)` `true`表示是否复制子节点
   5. 创建`document.createElement(dom)`;
   6. 查找
      1. `document.getElementById("id")`
      2. `document.getElementByClassName("className")`
      3. `document.getElementByTagName("tagName")`
      4. `document.querySelector("selector")`
      5. `document.querySelectorAll("selector")`
