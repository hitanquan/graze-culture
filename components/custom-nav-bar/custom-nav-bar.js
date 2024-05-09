// components/custom-nav-bar/custom-nav-bar.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    searchValue: '',
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
  
  /**
   * 组件的方法列表
   */
  methods: {
    onTabChange(e) {
      console.log(e.detail)
    },
  }
})