Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    categoryData:['美国','英国','加拿大'],
    articleListData:[
      {
        username: '好价',
        avatar: '/assets/article/avatar1.png',
        title: 'Cevico集团：5000个农户持股的合作社有...',
        cover: '/assets/article/cover1.png',
        describe: '说到意大利的酒庄，大名鼎鼎的TERRE  CEVICO其维科集团，不得不提，它可是意大利最有代表性且重要的葡萄酒生...',
        commentCount: 32,
        shareCount: 15,
      },
      {
        username: '好价',
        avatar: '/assets/article/avatar2.png',
        title: '新冠状病毒疫情再升级，葡萄酒进出口会...',
        cover: '/assets/article/cover2.png',
        describe: '很多人说2020年是天崩的开局，各种噩耗接踵而至，一波未平一波又起。国内的新冠病毒在日趋好转的情况下，意大利又...',
        commentCount: 32,
        shareCount: 15,
      }
    ]
  },
  
  onTabChange(e) {
    console.log(e.detail)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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