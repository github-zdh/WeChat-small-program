//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    title: '哈哈哈',
    imgs: [
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", 
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", 
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      ]
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  onLoad: function (options) {
    console.log(options);
    this.setData({
      title: options.title
    })
  }
})
