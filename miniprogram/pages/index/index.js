// // pages/index/index.js
Page({

  data: {
      //数据表
      dataList:[],
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


  //下拉刷新获取数据
  getData(num=4,page=0){
      wx.cloud.callFunction({
        name:"getMessage",
        data:{
            num:num,
            page:page
        }
      }).then(res=>{
        var oldData=this.data.dataList
        var newData=oldData.concat(res.result.data);
        this.setData({
            dataList:newData
        })
      })
  },


  //点击事件
  clickRow(res){
    var {id,idx}=res.currentTarget.dataset
    wx.cloud.callFunction({
        name:"visitMessage",
        data:{
            id:id,
        }
    }).then(res=>{
        console.log(res.result.data)
        console.log(id)
        wx.navigateTo({
            url: `/pages/message/message?id=` + id,
              success: function(res) {
                // 跳转成功的回调函数
                console.log('跳转成功');
              },
              fail: function(err) {
                // 跳转失败的回调函数
                console.error('跳转失败:', err);
              }
            });
      })
  },

//每次加载执行此函数
  onLoad(options) {
        this.getData()
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
    var page=this.data.dataList.length
    this.getData(3,page)
  },

  onShareAppMessage() {

  }
})

  