# 问题背景
uniapp开发h5，在iOS环境打开，z-index失效问题

![](../../../images/a8bcbd773a80175ec18c64740f73c2ab.png)

# 问题原因
`-webkit-overflow-scrolling: touch;`可能会导致 position: fixed;、z-index 失效（浮层显示异常）

# 问题延伸
`-webkit-overflow-scrolling` 主要用于控制 **iOS设备** 上 overflow 为 scroll 或 auto 的元素的滚动行为，它有两个可选值：

| **属性值** | **作用** |
| --- | --- |
| auto | 默认行为，滚动时不会有 **惯性滚动**，滚动手势松开后立即停止 |
| touch | **启用惯性滚动**（smooth scrolling），手指滑动后页面会继续滚动一段距离，类似原生 UIScrollView |


## 使用方式
```javascript
/* 开启惯性滚动 */
.scroll-container {
  -webkit-overflow-scrolling: touch;
}

/* 关闭惯性滚动 */
.scroll-container {
  -webkit-overflow-scrolling: auto;
}
```

## 适用场景
+ **touch（惯性滚动）**
    - 适用于 uni-scroll-view 或 overflow: scroll 的容器
    - 让滚动更丝滑，贴近 iOS 原生体验
    - 可能会导致 position: fixed;、z-index 失效（浮层显示异常）
+ **auto（默认滚动）**
    - 滚动会更生硬，适合避免浮层 fixed 失效的情况
    - 适合 uni-scroll-view 内部有浮层（如 u-drawer）时

## 常见问题
1. **滚动卡顿或 fixed 元素错位**
+ **解决方案**：去掉 `-webkit-overflow-scrolling: touch;` 或者改成 `position: fixed; transform: translate3d(0,0,0);`
2. **滚动不流畅**
+ **解决方案**：使用 `-webkit-overflow-scrolling: touch;` 让滚动更丝滑

# 问题解决
+ `-webkit-overflow-scrolling: auto;`修改属性值`touch`为`auto`。



