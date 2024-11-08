// page/module/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    console.log('搜索' + this.data.value);
  },
  onCancel() {
    console.log('取消' + this.data.value);
  },
})