// // pages/index/index.js
Page({

  data: {
    // 下拉菜单
    selectTime: [
        {text: "默认时间", value: 0},
        {text: "发布时间", value: 1},
        {text: "会议时间", value: 2}
    ],
    selectLocation: [
        {text: "地区", value: 'a'},
        {text: "广东省", value: 'b'},
        {text: "北京市", value: 'c'}
    ],
    selectType: [
        {text: "类型", value: 'A'},
        {text: "数学", value: 'B'},
        {text: "计算机", value: 'C'}
    ],
    valueTime: 0,
    valueLocation: 'a',
    valueType: 'A'

  },

  onLoad(options) {

  },

  onReady() {

  },

  onShow() {

  },

  onHide() {

  },

  onUnload() {

  },

  onPullDownRefresh() {

  },

  onReachBottom() {

  },

  onShareAppMessage() {

  }
})

  