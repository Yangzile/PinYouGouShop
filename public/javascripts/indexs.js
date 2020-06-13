$(function () {
    // #轮播切换时间设置为2秒，默认是5秒
    $('#myCarousel').carousel({
        interval: 2000,
    })
    //   #点击轮播图下方小圆点可以改变轮播图片
    $("#myCarousel li").click(function () {
        var index=$(this).attr("data-slide-to")
        $('#myCarousel').carousel(parseInt(index))
    })
    // 关闭广告
    $('#gg').click(function () {
        $('header').remove();
    })
    // 小导航栏的鼠标移入，移出
    $(".dropdown").mouseover(function () {
        $(this).addClass("open");
    });
    $(".dropdown").mouseleave(function(){
        $(this).removeClass("open");
    })
    //商品分类的鼠标事件
    $(".content-col1.fl").find("li").each(function () {
        $(this).mouseenter(function () {
            $(this).find("div").show();
        });
        $(this).mouseleave(function () {
            $(this).find("div").hide();
        });
    })
    // 猜你喜欢的商品跳转
    $('.pic img').each(function () {
        $(this).click(function(){
            var title = $(this).parent().siblings().children("p:eq(0)").text()
            var pice = $(this).parent().siblings().children("h3").text()
            pice=pice.replace("¥", "");
            var herf ='/item?'+'title='+title+'&pice='+pice
            console.log("herf",herf)
            $(this).parent().attr('href',herf);
            // console.log("pice",pice )
            // $.ajax({
            //
            // })


        });
        // return false;
    });

})