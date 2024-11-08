// components/custom-nav-bar/custom-nav-bar.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    safeAreaTop: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    searchValue: '',
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    onFocus(val) {
      wx.navigateTo({
        url: '/page/module/pages/search/search',
      })
    }
  }
})