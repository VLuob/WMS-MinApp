// pages/enterlibrary/enterlibrary.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navh: app.globalData.statusBarHeight,
    list: [{
      name: "吨位"
    }, {
      name: "板书"
    }, {
      name: "不需要"
    }],
    selVal: '' //选中的值
  },
  // 单选操作
  selSingle: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,
      list = that.data.list,
      selVal = that.data.selVal;
    list.forEach(function (v, i) {
      if (index == i) {
        list[index].checked = true;
        var selVal = v.name
        that.setData({
          selVal: selVal
        })
      }
      else {
        list[i].checked = false;
      }
    })
    that.setData({
      list,
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