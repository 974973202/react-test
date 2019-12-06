import request from './fetch';

let wx = window.wx
const Wxconfig = async (info) => {
  let showurl = window.location.href.split('#')[0]
  const { data: { appId, timestamp, nonceStr, signature } } = 
    await request('api/h5_order/share', { showurl }, 'post')
    wx.config({
      debug: false, //生产环境需要关闭debug模式
      appId, //appId通过微信服务号后台查看
      timestamp, //生成签名的时间戳
      nonceStr, //生成签名的随机字符串
      signature, //签名
      jsApiList: [
        'onMenuShareAppMessage',  //旧的接口，即将废弃
        'onMenuShareTimeline', //旧的接口，即将废弃
        'updateAppMessageShareData',  //新的接口
        'updateTimelineShareData', //新的接口
      ] 
    });
    wx.ready(function () {
      _shareConfig(info)
    })
    wx.error(function(res){
      console.error("错误",res)
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    });
}

function _shareConfig({ title, desc, imgUrl }){
    //分享给朋友
    wx.onMenuShareAppMessage({
      title: title, // 分享标题
      desc: desc, // 分享描述
      // link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: imgUrl, // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
      // 用户点击了分享后执行的回调函数
      }
    });

    ///分享到朋友圈
    wx.onMenuShareTimeline({
      title: title, // 分享标题
      // link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: imgUrl, // 分享图标
      success: function () {
      // 用户点击了分享后执行的回调函数
      }
    })
}

export default Wxconfig