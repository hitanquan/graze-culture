// components/article-list-card/article-list-card.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    article: {
      type: Object,
      value: null
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap() {
      
      const { article } = this.properties;
      this.triggerEvent('click', {
        title: article.title, 
        description: article.description,
        article: article // 传递整个文章对象，以防需要
      })
    }
  }
})