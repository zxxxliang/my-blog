# 微信浏览器
micromessenger

```javascript
document.addEventListener('WeixinJSBridgeReady', function() {
  WeixinJSBridge.call('closeWindow');
}, false);
WeixinJSBridge.call('closeWindow');
```

# 微信小程序
micromessenger && miniprogram

```javascript
wx.miniProgram.navigateBack()
```

```javascript
// uni-app中使用
const wx = require('jweixin-module');
```

```html
<!-- 直接引用js -->
<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
```

# 飞书
feishu

```javascript
window.h5sdk.ready(() => { // ready方法不需要每次都调用
  tt.closeWindow({
    fail(res) {
      console.log(`closeWindow fail: ${JSON.stringify(res)}`);
    }
  });
});
```

# 钉钉
dingtalk

```javascript
dd.biz.navigation.close({
  onSuccess : function(result) {
    /*result结构
        {}
        */
  },
  onFail : function(err) {}
})
```

# 企业微信
wxwork

同微信？

# h5
```javascript
if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") !=-1) {
  window.location.href="about:blank";
}
else {
  window.opener = null;
  window.open("about:blank", "_self");
  window.close();
}
```

