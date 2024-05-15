// app.js
App({
  onLaunch() {
    // 云开发初始化
    // 初始化完成之后，可以使用云能力，例如调用云函数等
    wx.cloud.init({
      // 云开发环境的配置信息
      env: 'cloud-dev-server-3frnvwnfaf34ffa', // 云环境ID
      traceUser: true,
    })

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
