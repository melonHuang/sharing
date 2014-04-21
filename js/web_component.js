$(function() {
    function print(target, string, interval, callback) {
        var i = 0,
            length = string.length;
        var timer = setInterval(function() {
            target.html(string.slice(0, ++i));
            if(i == length) {
                clearInterval(timer);
                callback && callback();
                return;
            }
        }, interval);
    }
    // 标题页
    var i = 0;
    $(document.body).delegate('.wc-title', 'click', function() {
        if(i > 0) return;
        i++;
        print($('.word-web'), 'eb', 160, function() {
            print($('.word-component'), 'omponent', 160);
        });
    });


});

