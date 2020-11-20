# 自定义小程序导航栏组件custom-tab-bar

> 借鉴了 `Lin UI` 组件库，`Lin UI` 是一套基于 **微信小程序原生语法** 实现的高质量 UI 组件库。遵循简洁、易用、美观的设计规范（[文档](https://doc.mini.talelin.com/)，[Github](https://github.com/TaleLin/lin-ui)）

## 使用步骤

```sh
# 1. app.json 添加
"tabBar": {
  "custom": true,
}

# 2. page页面添加选中逻辑
onShow: function () {
  if (typeof this.getTabBar === 'function' && this.getTabBar()) {
    this.getTabBar().setData({
      selected: 1
    })
  }
}
```

## 异常

```sh
# tabbar切换会抖动, 未解决
```