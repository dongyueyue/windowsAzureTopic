var JANGPIN;
function getTargetDu(){
    var rightNum = getRightNum();
    var randNum = Math.random()*100;
    var chaDu = -30;
    return 120;
    if(rightNum*10<randNum){
        JANGPIN = null;
        return 290;
    }else{
        //如果中奖
        var randNumjiang = Math.random()*100;
        if(randNumjiang<=33){
            JANGPIN = "MJ"
            return 120;
        }else if(randNumjiang<66 && randNumjiang>33){
            JANGPIN = "T"
            return 180;
        }else{
            JANGPIN = "YB"
            return 240;
        }
    }
}
//奖励函数 转盘最后结束时调用  JANGPIN 为奖励
function jiangli(){
//        console.log(JANGPIN);
//        if( JANGPIN  == MJ ){
//            $('.rgba_book').show();
//        }else if( JANGPIN == T) {
//            $('.rgba').show();
//        }else if( JANGPIN == YB){
//            $('.rgba_one').show();
//        }else if(JANGPIN == null){
//            $('.rgba1').show();
//        }
    if( JANGPIN != null){
        $('.rgba_one').show();
    }else{
        $('.rgba_book').show();
    }

}
zhuanpan(jiangli);
function zhuanpan(callback){
    var canvas = document.getElementById("lotteryCvs");
    var context = canvas.getContext("2d");
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    context.translate(WIDTH/2,HEIGHT/2+45);
    var as = new Image();
    as.src = "imgs/cj_zp2.png";
    as.width = 419;
    as.height = 419;
    var pin = new Image();
//        pin.src = "imgs/cj_zz.png";
    pin.width = 120;
    pin.height = 145;
    var du = 0,cha = 0;
    var flag = false;//开关
    var startTime;//定义开始时间
    var num;//答对题数
    var i = Math.random()*100;//中奖概率
    var targetDu = 0;
    context.rotate(180);
    $("#btnLottery").click(function(){
        du = 0;
        targetDu = getTargetDu();
        flag = true;
//            startTime = new Date().getTime();
        $(this).attr("disabled","disabled");
    });
    var t =   setInterval(function(){
        context.drawImage(as,-as.width/2,-as.height/2);
        context.drawImage(pin,-pin.width/2-5,-pin.height/2-10);
        cha = (targetDu+360*5 - du)/40;
        //最后时速度
        if(cha <= 16 && cha > 0){
            cha = 16
        }
        console.log(cha);
        var speed = 0;
        if(flag){
            //匀速 - 每次累加值相同
            if(du+cha > targetDu+360*5){
                speed = targetDu+360*5 - du;
                du = targetDu+360*5;
            }else if(cha == 0){
                speed = 0;
            }else{
                du = du + cha;
                speed = cha
            }

        }
        if(cha == 0 && flag){
            flag = false;
            $("#btnLottery").removeAttr("disabled");
            callback && callback();
        }
        context.rotate(speed*Math.PI/180);
        context.drawImage(as, -as.width / 2, -as.height / 2);
    }, 100);
}
