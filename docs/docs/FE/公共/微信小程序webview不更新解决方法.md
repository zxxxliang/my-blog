### 解决方法
#### 强制更新 `webview` 的 `src`:  
你可以通过在返回页面之前先将 `webview` 的 `src` 设置为空值或临时值，然后再设置为最终的 `url`，从而强制让 `webview` 重新加载。具体代码如下：
```javascript
const pages = getCurrentPages();
const prevPage = pages[pages.length - 2];
const url = `${this.data.href}${this.data.hash}?returncode=${type}`;

// 先将 path 设置为空或一个临时值
prevPage.setData({
  path: ''
});

// 设置最终的 url
setTimeout(() => {
  prevPage.setData({
    path: url
  });
}, 50);

// 返回上一页
wx.navigateBack();
```

这样做的目的是为了确保 `webview` 的 `src` 确实发生了变化，从而强制其重新加载。

#### 使用 `onShow` 生命周期方法更新 `webview`：  
也可以在返回前一页面后，通过前一页面的 `onShow` 方法来重新设置 `webview` 的 `src`。
```javascript
// 在前一个页面的 onShow 方法中重新设置 webview 的 src
onShow() {
  if (this.data.path) {
    this.setData({
      path: this.data.path
    });
  }
}
```

这种方式在页面每次显示时都会检查并重新加载 `webview`。

### 注意事项
+ 在修改 `webview` 的 `src` 时，确保 URL 确实有所不同，这样才能触发 `webview` 的重新加载。
+ 如果 `setTimeout` 中的延迟时间过短，可能会导致页面没有足够时间检测到 `src` 的变化，可以适当调整延迟时间。

通过这些方法，应该能解决 `webview` 返回后不刷新的问题。





```javascript
backToResult(type) {
  // 支付成功 type: SUCCESS
  // 支付失败 type: FAIL
  const pages = getCurrentPages()
  const prevPage = pages[pages.length - 2]
  const url = `${this.data.href}${this.data.hash}?returncode=${type}`
  prevPage.setData({
    // 先将 path 设置为空或一个临时值
    path: ''
  })
  setTimeout(() => {
    prevPage.setData({
      // 此处path为webview页面src对应的参数名
      path: url
    })
  }, 1000)
  wx.navigateBack()
}
```

