// pages/publish/publish.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      value: '',
      //图片
        fileList: [{
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',//这是一个固定的URL
          name: '图片1',
          isImage: true,
          deletable: true,
        },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      ],
  
      //日历数据(暂未启用)
      date: '',
      show: false,
    },
  
   //图片上传函数
   afterRead(event) {
      const { file } = event.detail;
      // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
      wx.uploadFile({
        url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
        filePath: file.url,
        name: 'file',
        formData: { user: 'test' },
        success(res) {
          // 上传完成需要更新 fileList
          const { fileList = [] } = this.data;
          fileList.push({ ...file, url: res.data });
          this.setData({ fileList });
        },
      });
  },
  
  
  onChange(event) {
      // event.detail 为当前输入的值
      console.log(event.detail);
    },
  
  
  //日历函数
  onDisplay() {
      this.setData({ show: true });
    },
    onClose() {
      this.setData({ show: false });
    },
    formatDate(date) {
      date = new Date(date);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(event) {
      this.setData({
        show: false,
        date: this.formatDate(event.detail),
      });
    },
  
//跳转到预览界面的函数
    navigateToPreview: function() {
    wx.navigateTo({
      url: '/pages/preview/preview',
      success: function(res) {
        // 跳转成功的回调函数
        console.log('跳转成功');
      },
      fail: function(err) {
        // 跳转失败的回调函数
        console.error('跳转失败:', err);
      }
    });
  },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
  
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
  
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
  
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
  
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
  
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
  
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
  
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
  
    }
  })