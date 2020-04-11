//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    navh: app.globalData.statusBarHeight,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    show: false, //遮罩层
    arr: [{
      name: "出库"
    }, {
      name: "入库"
    }],
    selVal: "", //预约项目选择值
  },
  selSingle: function(e) { //预约项目
    var that = this,
      index = e.currentTarget.dataset.index,
      arr = that.data.arr,
      selVal = that.data.selVal;
    arr.forEach(function(v, i) {
      if (index == i) {
        arr[index].checked = true;
        var selVal = v.name
        that.setData({
          selVal: selVal
        })
      } else {
        arr[i].checked = false;
      }
    })
    that.setData({
      arr,
    })
  },
  okChange: function() { //选择预约项目
    if (this.data.selVal == "出库") {
      wx.navigateTo({
        url: '../outlibrary/outlibrary',
      })
    } else {
      wx.navigateTo({
        url: '../enterlibrary/enterlibrary',
      })
    }
  },
  onClickShow() { //遮罩显示
    this.setData({
      show: true
    });
  },

  onClickHide() { //遮罩隐藏
    this.setData({
      show: false
    });
  },
  search() {
    wx.navigateTo({ //搜索
      url: '../search/search',
    })
  },
  enterrecord() { //入库
    wx.navigateTo({
      url: '../enterlibrary/enterlibrary',
    })
  },
  outrecord() { //出库
    wx.navigateTo({
      url: '../outlibrary/outlibrary',
    })
  },
  library() { //库存
    wx.navigateTo({
      url: '../library/library',
    })
  },
  transaction() { //单据历史
    wx.navigateTo({
      url: '../transaction/transaction',
    })
  },
  enterrecord() { //入库记录
    wx.navigateTo({
      url: '../enterrecord/enterrecord',
    })
  },
  outrecord() { //出库记录
    wx.navigateTo({
      url: '../outrecord/outrecord',
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function() {
    /* 获取页面栈 */
    // let pages = getCurrentPages()
    // this.setData({
    //   route: pages[0].route.replace('pages', ('..'))
    // })
    /* tabbar */
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})