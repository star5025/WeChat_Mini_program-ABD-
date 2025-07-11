// pages/preview/preview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    type: "",
    date: "",
    time: "",      // 来自具体时间字段
    place: "",
    members: "",
    introduction: ""
  },
/**
 更多introduction示例：<br/><br/>会议议程丰富多元，不仅设有主旨演讲环节，邀请学界泰斗分享能源可再生利用的宏观战略与前瞻性观点；还安排了专题研讨，涵盖可再生能源材料创新、智能电网融合、生态环境影响评估等细分领域。参会者可在互动交流环节与讲者深度对话，碰撞思想火花。此外，会议设置的成果展览区，将展示最新科研设备、创新技术模型及优秀学术论文摘要，方便与会者直观了解行业进展。<br/><br/>本次会议对于推动能源领域学术研究进展、促进科研成果转化应用意义重大。它将助力产学研深度融合，加速可再生能源技术迭代升级，为全球能源可持续发展贡献智慧与方案，引领行业迈向更加清洁、高效、安全的未来。
 */

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad(options) {
    // 解码所有URL参数
    const decodeParams = (params) => {
      const decoded = {};
      for (const key in params) {
        try {
          // 尝试解码参数
          decoded[key] = decodeURIComponent(params[key]);
        } catch (e) {
          // 解码失败则使用原始值
          decoded[key] = params[key];
        }
      }
      return decoded;
    };
    
    // 解码整个options对象
    const decodedOptions = decodeParams(options);
    
    // 使用解码后的参数
    const {
      title = "关于能源可再生利用的最新研究",
      type = "环境",
      date = "2025/5/20",
      time = "从下午两点到下午四点半",
      place = "浙江温州江南皮革厂",
      members = "欢，熹，茶",
      introduction = '在全球积极应对气候变化、加速能源转型的大背景下...'
    } = decodedOptions;
    
    // 处理换行符
    const processedIntro = introduction.replace(/<br\/?>/g, '\n');
    
    this.setData({
      title,
      type,
      date: date.replace(/\//g, '/'), // 确保日期显示正常
      time,
      place,
      members,
      introduction: processedIntro
    });
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


