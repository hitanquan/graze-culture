Page({
  /**
   * 页面的初始数据
   */
  data: {
    safeAreaTop: 0,
    screenHeight: 0,
    active: 2,
    categoryData:['美国','英国','加拿大','日本','韩国','泰国','巴基斯坦','丹麦'],
    background: ['/assets/swiper/swiper1.png', 'demo-text-2', 'demo-text-3'],
    swiperImg: [
      {
        img: '/assets/swiper/swiper1.png'
      },
      {
        img: '/assets/swiper/swiper2.png'
      }
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    articleListData:[
      {
        id: "1111",
        username: '好价',
        avatar: '/assets/article/avatar1.png',
        title: 'Cevico集团：5000个农户持股的合作社有...',
        cover: '/assets/article/cover1.png',
        description: '说到意大利的酒庄，大名鼎鼎的TERRE  CEVICO其维科集团，不得不提，它可是意大利最有代表性且重要的葡萄酒生...',
        commentCount: 32,
        shareCount: 15,
      },
      {
        id: '2',
        username: '好价',
        avatar: '/assets/article/avatar2.png',
        title: '新冠状病毒疫情再升级，葡萄酒进出口会...',
        cover: '/assets/article/cover2.png',
        description: '很多人说2020年是天崩的开局，各种噩耗接踵而至，一波未平一波又起。国内的新冠病毒在日趋好转的情况下，意大利又...',
        commentCount: 32,
        shareCount: 15,
      },
      {
        id: '3',
        username: '张三',
        avatar: '/assets/article/avatar2.png',
        title: '新冠状病毒疫情再升级，葡萄酒进出口会...',
        cover: '/assets/article/cover2.png',
        description: '很多人说2020年是天崩的开局，各种噩耗接踵而至，一波未平一波又起。国内的新冠病毒在日趋好转的情况下，意大利又...',
        commentCount: 32,
        shareCount: 15,
      },
      {
        id: '4',
        "username": "李四",
        "avatar": "/assets/article/avatar1.png",
        "title": "全球经济复苏的挑战与机遇",
        "cover": "/assets/article/cover1.png",
        "description": "2021年全球经济面临的挑战与机遇并存，各国如何通过合作来应对不确定性。",
        "commentCount": 22,
        "shareCount": 11
      },
      {
        id: '5',
        "username": "王五",
        "avatar": "/assets/article/avatar2.png",
        "title": "探索宇宙的奥秘：最新的天文发现",
        "cover": "/assets/article/cover2.png",
        "description": "天文学家最近发现了一颗新的行星，这可能对我们理解宇宙的起源有重大意义。",
        "commentCount": 45,
        "shareCount": 28
      },
      {
        id: '6',
        "username": "赵六",
        "avatar": "/assets/article/avatar1.png",
        "title": "科技前沿：人工智能的未来发展",
        "cover": "/assets/article/cover1.png",
        "description": "人工智能技术正迅速发展，本文将探讨它对未来社会可能产生的影响。",
        "commentCount": 36,
        "shareCount": 21
      },
      {
        id: '7',
        "username": "钱七",
        "avatar": "/assets/article/avatar2.png",
        "title": "环保新趋势：可持续发展的实践案例",
        "cover": "/assets/article/cover2.png",
        "description": "可持续发展是当今社会的重要议题，本文介绍几个成功的环保实践案例。",
        "commentCount": 18,
        "shareCount": 9
      },
      {
        id: '8',
        "username": "王八",
        "avatar": "/assets/article/avatar2.png",
        "title": "AI技术的发展前景",
        "cover": "/assets/article/cover2.png",
        "description": "AI最近几年挺火，作为上班一族要学习ai相关的知识和工具，拥抱技术。",
        "commentCount": 128,
        "shareCount": 90
      }
    ]
  },
  
  onTabChange(e) {
    console.log(e.detail)
  },

  onArticleClick(event) {
    const {article } = event.detail;
    const s =  JSON.stringify(article);
    // 跳转到文章详情页
    wx.navigateTo({
      url: `/page/module/pages/article/article?article=${encodeURIComponent(s)}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const sysInfo = wx.getSystemInfoSync()
    this.setData({
      safeAreaTop: sysInfo.safeArea.top,
      screenHeight: sysInfo.screenHeight
    });
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