//index.js
//获取应用实例
var app = getApp();
var main=require('../../js/main.js');
var com = require('../../js/com.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    // imgUrls: ["http://file.aijiaeg.com/app/20170829/36ef67e7e8b3cdcadb02f44004961fd1.jpg", "http://file.aijiaeg.com/app/20170829/ae9dd85e3003d6b614b8e79090d4c139.jpg", "http://file.aijiaeg.com/app/20170826/34929677102566bc0527babf8590e8b4.jpg"],
    //轮播图数据
    imgUrls: [
        {
          "img": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", 
          "value":"1"
        },
        {
          "img": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
          "value": "2"
        },
        {
          "img": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
          "value": "3"
        }
    ],
    circular: true,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log(main);
    console.log(com);
    console.log('onLoad')
    console.log(main.first());
    console.log(com.first());
    wx.showShareMenu({
      withShareTicket: true
    })
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
        success: function (res) {
          console.log(res.data)
        }
    })
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 经度
        var longitude = res.longitude // 纬度
      }
    })
  },
  SelectedItem: function (e, item) {
    console.log(this);
    console.log(e );
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
    
  }


})