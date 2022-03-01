const basics = {
  state: {
    imgUrl: process.env.VUE_APP_BASE_URL_ASSETS + '/Enclosure/',
    img_url_cat: process.env.VUE_APP_BASE_URL_ASSETS + '/Enclosure/CATEGORY/IMAGES/',  // 品类
    img_url_jud: process.env.VUE_APP_BASE_URL_ASSETS + '/Enclosure/JUDGE/IMAGES/',  // 仲裁
    img_url_set_acc: process.env.VUE_APP_BASE_URL_ASSETS + '/Enclosure/SETTLEMENT/ACCEPT/IMAGES/',  // 结算验收通过
    img_url_set_obe: process.env.VUE_APP_BASE_URL_ASSETS + '/Enclosure/SETTLEMENT/OBEY/IMAGES/',  // 结算赔偿支付通过
    img_url_set_ref: process.env.VUE_APP_BASE_URL_ASSETS + '/Enclosure/SETTLEMENT/REFUND/IMAGES/',  // 结算需方退货退款支付
    img_url_set_dis: process.env.VUE_APP_BASE_URL_ASSETS + '/Enclosure/SETTLEMENT/DISOBEY/IMAGES/',  // 结算违约缴纳
    img_url_ord: process.env.VUE_APP_BASE_URL_ASSETS + '/Enclosure/ORDER/IMAGES/',  // 订单相关图片文件夹(成果、退款、验收证明等)
    img_url_user_feedback_user: process.env.VUE_APP_BASE_URL_ASSETS + '/Enclosure/USER/USE_FEEDBACK/IMAGES/',  // 工具使用意见反馈图片文件夹
    img_url_user_feedback_order: process.env.VUE_APP_BASE_URL_ASSETS + '/Enclosure/USER/ORDER_FEEDBACK/IMAGES/',  // 退货退款异常反馈图片文件夹
    file_url_addphone: process.env.VUE_APP_BASE_URL_ASSETS + '/Enclosure/GUIDE/WEB/ADDPHONE/EXCEL/',  // 增加人力资源上传文件文件夹
  },
  mutations: {

  },
  actions: {

  }
}

export default basics
