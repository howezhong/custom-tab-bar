Component({
  properties: {
    selected: {
      type: Number,
      value: 0
    },
    color: {
      type: String,
      value: '#7A7E83'
    },
    selectedColor: {
      type: String,
      value: '#b4282d'
    },
    fontSize: {
      type: Number,
      value: 26
    },
    borderStyle: {
      type: String,
      value: '#f6f6f6'
    },
    backgroundColor: {
      type: String,
      value: '#fff'
    },
    list: {
      type: Array,
      value: [
        {
          "pagePath": "/pages/index/index",
          "iconPath": "/assets/image/tabbar/home.png",
          "selectedIconPath": "/assets/image/tabbar/home_fill.png",
          "text": "首页"
        },
        {
          "pagePath": "/pages/mine/index",
          "iconPath": "/assets/image/tabbar/mine.png",
          "selectedIconPath": "/assets/image/tabbar/mine_fill.png",
          "text": "我的"
        }
      ]
    }
  },
  methods: {
    switchTab(e) {
      const { index, path } = e.currentTarget.dataset
      if (index === this.properties.selected) return
      wx.switchTab({ url: path })
      this.showItem(index, path)
    },
    showItem(idx, path) {
      this.setData({
        selected: idx
      });
      const detail = { idx, path };
      const option = { bubbles: true, composed: true };
      this.triggerEvent('onTap', detail, option);
    }
  }
})