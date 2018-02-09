//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    title: '哈哈哈',
    imgs: ["http://file.aijiaeg.com/app/20170829/36ef67e7e8b3cdcadb02f44004961fd1.jpg", "http://file.aijiaeg.com/app/20170829/ae9dd85e3003d6b614b8e79090d4c139.jpg", "http://file.aijiaeg.com/app/20170826/34929677102566bc0527babf8590e8b4.jpg"]
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
