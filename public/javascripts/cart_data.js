$(function () {

    // 点击单个按钮的事件
    function dangecheck() {
        $('.choice').click(function () {
            $('.choice').each( function () {
                total();//改总价
                countAll();//最后的总数量
            });
        })

    }

    // 点击全部删除按钮的事件
    function delAllClick() {
        var delAllBtn = $('#delAllBtn');
        delAllBtn.on('click', function () {
            //先循环每个复选框
            $(".choice").each(function () {
                if (($(this).parents("tr").find(".choice")).prop("checked")) {//判断复选框有没有选中
                  /*  $.ajax({
                        url: "/cart/deletcart",
                        type: "get",
                        data: {
                            listName: listName,
                        },
                        success: function (response) {
                            if (response.success) {
                                alert("删除成功前端");
                            } else {
                                alert("删除失败前端: " + response.message);
                            }
                        }
                    });*/
                  // 选中就移除
                  $(this).parents("tr").remove();
                }
            });
            total();//改总价
            countAll();//最后的总数量
        });

    }

    // 点击全选按钮的事件
    function toggleAllClick() {

        $("#toggle-all").click(function()
        {
            // 判断是否已经选中
            if($(this).is(":checked")==true)
            {
                // 没选中就全选
                $("input[name='chkBulletin']").each(function()
                {
                    $(this) .prop('checked', true);
                });

            }
            else
            {
                // 选中就取消全选
                $("input[name='chkBulletin']").each(function()
                {
                    $(this).prop('checked', false);
                });
            }
            total();//改总价
            countAll();//最后的总数量
        });

    }

    // 点击 '+' 事件
    function plusClick() {
        $('.plus').each( function () {
            $(this).click(function () {
                // 改变数量
                var count = parseFloat($(this).prev().val());

                count++;
                $(this).prev().prop("value",count);

                // 改小计
                var price = parseFloat($(this).parents("tr").find(".price").html());
                var money = price * count;
                $(this).parents("tr").find(".sum").html(money);
                total();//改总价
                countAll();//最后的总数量
            });


        })
    }

    // 点击 '-' 事件
    function minsClick() {

        $('.mins').each(function () {
            $(this).click(function () {
                //1.改变数量
                var count = parseFloat($(this).next().val());
                count--;
                if (count < 1) { //当数量减到1时不能再减
                    alert('不能少于1')
                    return;
                }
                $(this).next().prop("value",count);
                var price = parseFloat($(this).parents("tr").find(".price").html());
                var money = price * count;
                $(this).parents("tr").find(".sum").html(money);
                total();//改总价
                countAll();//最后的总数量
            });
        })
    }

    // 单个删除
    function delGoodClick() {

        $('.delGood').each(function(){
            $(this).click(function () {
                var listName=$(this).parents("tr").find("#item-msg").html();
                let re = $(this).parents("tr"); //找到要删除的行
                if (confirm("你确定删除吗？")) {
                    $.ajax({
                        url: "/cart/deletcart",
                        type: "get",
                        data: {
                            listName: listName,
                        },
                        success: function (response) {
                            if (response.success) {
                                alert("删除成功前端");
                            } else {
                                alert("删除失败前端: " + response.message);
                            }
                        }
                    });
                    re.remove();
                }
                total();//改总价
                countAll();//最后的总数量
            })
        })
    }

    // 合计
    function total() {
        let allsum = 0;
        $(".sum").each(function () {//先循环每个小计
            if (($(this).parents("tr").find(".choice")).prop("checked")) {//判断复选框有没有选中
                allsum += parseFloat($(this).html());
            }
            $(".summoney").html(allsum);
        });
    }
    //总数量
    function countAll() {
        let counts = 0;

        for(let i=0;i<$(".choice").length;i++){

            if($(".choice")[i].checked==true){
                counts+=parseInt( $('.itxt')[i].value);
            }
        }
        $("#totalNum").html(counts);
    }

    toggleAllClick();
    plusClick();
    minsClick();
    delGoodClick();
    delAllClick();
    dangecheck();
})