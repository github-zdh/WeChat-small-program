//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    img_url:'',
    bindViewTap: function (event) {
      event.currentTarget.dataset.alphaBeta === 1 // - 会转为驼峰写法
      event.currentTarget.dataset.alphabeta === 2 // 大写会转为小写
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
        img_url:'http://file.aijiaeg.com/goodsImg/20170826/e816e4af29c38eae8b3369de15d320ff.jpg'

      })
    })
    wx.request({
        url: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=HzQ3t9ch7V1iN6C8uSu5VZL9evOJR6UkRsY1CELApx6DugMxNDUL7hKtW4kwhzOA2-Cphpwoi8dlaiT-la-fWLPgP9qC3e1DoMj-48M0Oab3bbq3tPTkR5r5O_MQW3ypJCLeAGADWF&type=jsapi', //仅为示例，并非真实的接口地址
        method:'GET',
        dataType:'json',
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
        }
    })
  }
})

