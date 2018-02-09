//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    motto: 'Hello World',
    numList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    userInfo: {},
    img_url:'',
    DownLoadingTime:1,
    RefreshBool:true,
    DownLoading:false,
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
    console.log(app);
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
      url: 'https://nphapi.igango.com/home/Index/optimization', //仅为示例，并非真实的接口地址
        method:'POST',
        data:{
          source:1
        },
        dataType:'json',
        success: function (res) {
          console.log(res.data)
        }
    })
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
  onPullDownRefresh: function () {
        var _this=this;
        console.log('下拉刷新');
 

  },
  onReachBottom:function(){
       console.log('上啦加载');
       var _this=this;
       if (this.data.DownLoadingTime%2==0){
          this.setData({
                DownLoading:true
          })
       }else{
         this.setData({
           DownLoading:false
         })
       }
       this.data.DownLoadingTime++;
       console.log(this.data.DownLoading);
       console.log(this.data.DownLoadingTime % 2 == 0);
  }
})


