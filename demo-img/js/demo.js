$(function () {

    var rotateStatus = false; //是否正在旋转状态

    function timeOut() {  //超时函数
        $('#lotteryBtn').stopRotate();
        $("#lotteryBtn").rotate({
            angle: 0,
            duration: 3000,
            animateTo: 1440, //这里是设置请求超时后返回的角度，所以应该还是回到最原始的位置，1440是因为我要让它转4圈，就是360*4得来的
            callback: function () {
                $('#resultText').html('网络超时');
                rotateStatus = false;
            }
        });
    };

    function rotateFunc(angle, text) {  //angle:奖项对应的角度，text:提示语
        $('#lotteryBtn').stopRotate();
        $("#lotteryBtn").rotate({
            angle: 0,
            duration: 3000,
            animateTo: angle + 1440, //angle是图片上各奖项对应的角度，1440是我要让指针旋转4圈。所以最后的结束的角度就是这样子^^
            callback: function () {
                $('#resultText').html(text);
                rotateStatus = false;
            }
        });
    };

    $("#lotteryBtn").on('click', function () {

        if(rotateStatus){
            console.log('已经在抽奖中..不要重复点击');
            return;
        }

        rotateStatus = true;
        $('#resultText').html('抽奖中...');

        var time = [0, 1];
        time = time[Math.floor(Math.random() * time.length)];
        console.log(time);
        if (time == 0) {
            timeOut(); //网络超时
            return;
        }
        if (time == 1) {
            var data = [1, 2, 3, 0]; //返回的数组
            data = data[Math.floor(Math.random() * data.length)];
            console.log('中了' + data + '等奖');
            if (data == 1) {
                rotateFunc(157, '恭喜您抽中了一等奖')
            }
            if (data == 2) {
                rotateFunc(247, '恭喜您抽中了二等奖')
            }
            if (data == 3) {
                rotateFunc(22, '恭喜您抽中了三等奖')
            }
            if (data == 0) {
                var angle = [67, 112, 202, 292, 337];
                angle = angle[Math.floor(Math.random() * angle.length)]
                rotateFunc(angle, '很遗憾，这次您未抽中奖')
            }
            return;
        }
    });

})

