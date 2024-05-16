const db = wx.cloud.database()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    screenHeight: 0,
    active: 0,
    categoryData:['美国','英国','加拿大','日本','韩国','泰国','巴基斯坦','丹麦'],
    articleListData:[],
  },
  
  onTabChange(e) {
    console.log(e.detail)
  },

  getActricleList() {
    db.collection('article-list').get().then((res) => {
      // 将获取到的数据赋值给 articleListData
      this.setData({
        articleListData: res.data
      });
    }).catch((err) => {
      // 错误处理
      console.error('错误:', err);
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const sysInfo = wx.getSystemInfoSync()
    this.setData({
      screenHeight: sysInfo.screenHeight
    });
    this.getActricleList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})