// pages/publish/publish.js
var db=wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
      value: '',
      formData: {
        title: '',
        type: '',
        date: '',       // 从日历选择器获取
        timeDetail: '', // 具体时间输入框
        place: '',
        members: '',
        introduction: ''
      },
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
  
    // 开发时调试用，实际运行时可删除
  onChange(event) {
      // event.detail 为当前输入的值
      console.log(event.detail);
    },
  

 // 统一处理所有字段输入
 onFieldInput(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({
      [`formData.${field}`]: e.detail
    });
    console.log(this.data.formData)
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
 // 日历确认时更新数据
 onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
      'formData.date': this.formatDate(event.detail)
    });
  },

//保存函数
save(){
    const params = {
        title: encodeURIComponent(this.data.formData.title),
        type: encodeURIComponent(this.data.formData.type),
        date: encodeURIComponent(this.data.formData.date),
        time: encodeURIComponent(this.data.formData.timeDetail),
        place: encodeURIComponent(this.data.formData.place),
        members: encodeURIComponent(this.data.formData.members),
        introduction: encodeURIComponent(this.data.formData.introduction)
      };
     // 构建URL参数
    const query = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&');
    // 开发时调试用，实际运行时可删除
    wx.showLoading({
        title:'数据上传中',
        mask:true
    })
    db.collection('messages').add({
        data:{
            title: this.data.formData.title,
            type: this.data.formData.type,
            date: this.data.formData.date,
            time: this.data.formData.timeDetail,
            place: this.data.formData.place,
            members: this.data.formData.members,
            introduction: this.data.formData.introduction,
            query: query
        }
    }).then(res=>{
        console.log(res)
        wx.hideLoading()
    })
},


//跳转到预览界面的函数
    navigateToPreview: function() {
        // 中文不能直接传参，使用encode
        const params = {
            title: encodeURIComponent(this.data.formData.title),
            type: encodeURIComponent(this.data.formData.type),
            date: encodeURIComponent(this.data.formData.date),
            time: encodeURIComponent(this.data.formData.timeDetail),
            place: encodeURIComponent(this.data.formData.place),
            members: encodeURIComponent(this.data.formData.members),
            introduction: encodeURIComponent(this.data.formData.introduction)
          };
         // 构建URL参数
        const query = Object.keys(params)
          .map(key => `${key}=${params[key]}`)
          .join('&');
        // 开发时调试用，实际运行时可删除
        console.log(query)
      
    wx.navigateTo({
    url: `/pages/preview/preview?${query}`,
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