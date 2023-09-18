<!--
 * @Author: Alex Shi
 * @Date: 2023-09-18 10:02:27
 * @LastEditors: Alex Shi
 * @LastEditTime: 2023-09-18 10:24:39
 * @Description: CSS.md
 * @FilePath: /vscode-workspace/web-study-notice/docs/面试/CSS.md
-->

# CSS

1. 盒模型
   1. 盒模型有四个部分组成`margin`、`padding`、`border`、`content`
   2. 标准盒模型和 IE 盒模型的区别在于设置`height`、`width`时，对应的范围不同
      1. 标准盒模型的`height`、`width`只包含`content`
      2. IE 盒模型 的`height`、`width`除了包含`content`，还包含了`border`、`padding`
   3. 通过修改元素的`box-sizing`属性来改变元素的盒模型
      1. `box-sizing:content-box`表示标准盒模型（默认值）
      2. `box-sizing:border-box`表示 IE 盒模型
2. CSS 选择器和优先级
   1. 选择器
      | 选择器 | 权重 |
      | --- | --- |
      | id 选择器 `#id` | 100 |
      | 类选择器 `.classname` | 10 |
      | 属性选择器 `div[class="foo"]` | 10 |
      | 伪类选择器 `div::last-child` | 10 |
      | 标签选择器 `div` | 1 |
      | 伪元素选择器 `div:after` | 1 |
      | 兄弟选择器 `div+span` | 0 |
      | 子选择器 `lu>li` | 0 |
      | 后代选择器 `div span` | 0 |
      | 通配符选择器 `*` | 0 |
   2. 优先级
      1. `!important`
      2. 内联样式
      3. ID 选择器
      4. 类选择器、伪类选择器、属性选择器
      5. 标签选择器、伪元素选择器
      6. 关系选择器、通配符选择器
3. CSS 的可继承和不可继承属性
   1. 可继承
      1. `font-weight`
      2. `color`
      3. `font-size`
      4. `line-height`
      5. `cursor`
   2. 不可继承
      1. `margin`、`padding`、`border`
      2. `display`
      3. `background`
      4. `overflow`
      5. `width`、`height`
      6. `pisition`
4. display 的属性和作用
   | 属性 | 作用 |
   | --- | --- |
   | `block` | 块类型。默认宽度为父元素宽度，可设置宽高，换行显示 |
   | `inline` | 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示 |
   | `inline-block` | 行内块元素。默认宽度为内容宽度，可设置宽高，同行显示 |
   | `table` | 块级表格 |
   | `flex` | flex 容器布局 |
   | `none` | 隐藏元素 |
   | `inherit` | 从父元素继承 display 类型 |
5. 隐藏元素的方式
    1. `display:none`元素在文档中不存在看，不会占据位置
    2. `visibility:hidden`元素在文档中的位置保留，仍然占据空间
    3. `opactity:0`将透明度设置为0
    4. `z-inbox`负值，直接将元素放置在最下层，利用其他元素遮盖
    5. `position:absolute`将元素定位到可视区域外
6. 