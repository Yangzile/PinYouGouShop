$(function () {

    // // 相关分类
    // var tabs = document.querySelectorAll(" .asideLi");
    // var goods = document.querySelectorAll(".aside .tab-pane");
    // tabFunc(tabs, goods);
    //
    // // 商品介绍
    // var tabs1 = document.querySelectorAll(".detail .asideLi");
    // var goods1 = document.querySelectorAll(".detail .tab-pane");
    // 扫码标题
    var shaoma=document.getElementById("shaoma");
    // 登录标题
    var denglu=document.getElementById("denglu");
    // 扫码的窗体
    var index=document.getElementById("index");
    //登录的窗体
    var profile=document.getElementById("profile");

    tabFunc(shaoma, denglu,index,profile);
    // 窗口切换
    function tabFunc(tabs, goods,index,profile) {
        // 标题鼠标事件
        tabs.onmouseenter=function () {
            tabs.classList.add("active");
            goods.classList.remove("active");
            index.classList.add("active");
            profile.classList.remove("active");
        };
        tabs.onmouseleave=function(){
            goods.classList.add("active");
            tabs.classList.remove("active");
            index.classList.remove("active");
            profile.classList.add("active");
        };
        // 窗体鼠标事件
        goods.onmouseenter=function () {
            goods.classList.add("active");
            tabs.classList.remove("active");
            index.classList.remove("active");
            profile.classList.add("active");
        };
    };
    // window.tabFunc = tabFunc;
})