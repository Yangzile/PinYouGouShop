$(function () {

    $("#registerBtn").on('click',function () {
        var passWord = $("#passWord");
        var userName = $("#userName");
        var email = $("#email");
        var checkpassword = $("#checkpassword");
        var checkcode=$("#checkcode");
        var code =$("#code");
        var tip = $('#tip').show();
       console.log(checkcode.val().toUpperCase() != code.val());
       
        
        // <!-- 对比两次输入的密码 -->
        if (passWord.val() != checkpassword.val()) {
            alert("两次密码不相同");
            tip.html("两次密码不相同");
            tip.css("color", "red");
            return false;
        }
        else if (userName.val() == '') {
            alert("账号不能为空");
            tip.html("账号不能为空");
            tip.css("color", "red");
            return false;
        }
        //密码不能为空
        else if (passWord.val() == '') {
            alert("密码不能为空");
            tip.html("密码不能为空");
            tip.css("color", "red");
            return false;
        }
        //密码不能为空
        else if (checkpassword.val() == '') {
            alert("第二次密码不能为空");
            tip.html("第二次密码不能为空");
            tip.css("color", "red");
            return false;
        }
        else if(checkcode.val().toUpperCase() != code.val()){
            alert("验证码错误");
            tip.html("验证码错误");
            tip.css("color", "red");
            return false;
        }
        $.ajax({
            url: "/register/user",
            type: "post",
            data: {
                userName: userName.val(),
                passWord: passWord.val(),
                email: email.val()
            },
            success: function (response) {
                console.log('进入ajax');
                if (response.success) {
                    alert("注册成功前端");
                        location.href = "/login";
                } else {
                    alert("注册失败前端" + response.message);
                    return false;
                }
            }
        });


    });
    


    function createcode() {
        var codes = "";
        var codeLength = 4;
        var code = document.getElementById("code");
        var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        for (var i = 0; i < codeLength; i++) {
            var charIndex = Math.floor(Math.random() * 36);
            codes += random[charIndex];
        }
        code.value = codes;
    }
    $("#code").click(function () {
        createcode();
    })
    createcode();
})