// pages/enterrecord/enterrecord.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0, //选项卡默认索引
    navh: app.globalData.statusBarHeight,
    h: app.globalData.screenHeight,
    list: [{
      id: "121"
    }, {
      id: "122"
    }, {
      id: "123"
    }], //出库订单
    revoke: [] //撤销订单
  },
  /* 选项卡 start */

  swiperTab: function(e) { //滑动切换
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },

  clickTab: function(e) { //点击切换
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  /* 选项卡 end */
  revoke: function (e) { //撤销
    var that = this
    console.log(e.currentTarget.dataset.item)
    var item = e.currentTarget.dataset.item
    var index = e.currentTarget.dataset.index
    wx.showModal({
      title: '确定要取消出库订单吗?',
      cancelColor: "#63C2F9",
      confirmColor: "#63C2F9",
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定', 1)
          var list = that.data.list
          var revoke = that.data.revoke
          revoke.unshift(item)
          list.splice(index, 1)
          that.setData({
            list,
            revoke
          })
        } else if (res.cancel) {
          console.log('用户点击取消', 2)
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})