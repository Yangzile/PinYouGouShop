
$(function () {

    // 相关分类
    var tabs = document.querySelectorAll(".aside .asideLi");
    var goods = document.querySelectorAll(".aside .tab-pane");
    tabFunc(tabs, goods);

    // 商品介绍
    var tabs1 = document.querySelectorAll(".detail .asideLi");
    var goods1 = document.querySelectorAll(".detail .tab-pane");
    tabFunc(tabs1, goods1);
    function tabFunc(tabs, goods) {
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].setAttribute('index', i);
            tabs[i].onmouseenter = function () {
                for (var j = 0; j < tabs.length; j++) {
                    tabs[j].className = 'asideLi';
                    goods[j].className = 'tab-pane';
                }
                var ind = this.getAttribute('index');
                goods[ind].className = 'active';
                this.className = "active";
            };
        }
    };

// 加入购物车
$('#addcart').click(function () {
        var listName=$('#biaoti').html();
        var number=$('.itxt').val();
        var userName = $('#loginname').html();
        var item_arry=[];

        if($(".btn.selected").length != $("#specification").find("dl").length){
            alert("请选择商品信息！")
            return ;
        }else {
            $(".btn.selected").each(function () {

                var title =$(this).parent().siblings(".title").children("i").html()
                item_arry.push(title);
                var item=$(this).html()
                item_arry.push(item);
            })
        }
        if(userName!="你好！，请登录" && number!= 0){
                $.ajax({
                    url: "/cart/addcart",
                    type: "get",
                    data: {
                        listName: listName,
                        number:parseInt(number),
                        item_arry:item_arry,
                    },
                    success: function (response) {
                        if (response.success) {
                            alert("添加成功前端");
                        } else {
                            alert("添加失败前端: " + response.message);
                        }
                    }
                });
        }else{
            // 没有登录
            location.href = "/login";
        }

    })
// 商品属性选项切换
$('#specification').find("dd").find("a").each(function () {
    $(this).click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    })
})


// 点击+事件
 $("#plus").click(function () {
        var count = parseFloat($(this).siblings("input").val());
        console.log(count);
        $(this).siblings("input").prop("value",++count);
    });
// 点击-事件
$("#mins").click(function () {
    var count = parseFloat($(this).siblings("input").val());
   if(count>1){
      $(this).siblings("input").prop("value",--count);
   }else {
       alert("不能再少了！");
   }

})







})