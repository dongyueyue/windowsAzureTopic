var dispa = 0;
shareData = {
    title: "你的选“云”功力如何？检验的时刻到了！更有神秘大礼等你！", // 分享标题
    desc: '选“云”的功力你有几成? 30秒过个招吧!', // 分享描述
    link: window.location.href, // 分享链接
    imgUrl: 'http://event.anruichina.com/h5Windows_Azure_final/imgs/Wechat_small_pic.png', // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
        if(dispa<1){
            canuse = true;
            dispa++;
        }else {
            canuse = false;
        }
        // 用户确认分享后执行的回调函数
        //mySwiper.slideTo(3);
        if(!JANGPIN){
            $(".share").hide();
        }else{
            $(".share").show();
        }
        $("#unzhongjiang").attr("src","imgs/wzj_bj_2.png")
        //$('.star_num img').attr("src","imgs/alertInfo_png");
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
    }
}
wx.ready(function () {

    //wx.checkJsApi({
    //    jsApiList: [
    //      'onMenuShareTimeline',
    //      'onMenuShareAppMessage'
    //    ],
    //    success: function (res) {
    //         //alert(JSON.stringify(res));
    //    }
    //});

    function getShareData(shareType) {
        return shareData;
    }


    function shareCancel(type) {

    }

    function shareFail(type) {

    }

    function shareConfirm(type) {
        //$.ajax({
        //    url: '/wechat/share',
        //    type: 'post',
        //    datatype: 'json',
        //    data: {type:type,url:window.location.href},
        //    success: function (data) {

        //    }
        //});
    }


    wx.onMenuShareAppMessage(getShareData(1));
    wx.onMenuShareTimeline(getShareData(2));
    wx.onMenuShareQQ(getShareData(3));
});

wx.error(function (res) {
    // alert(res.errMsg);
});

