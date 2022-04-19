var $logbg = $("img");
var $logpage = $("#loginpage");
var $logwindow = $("#logwidow");
var $btn = $("#login");
var text1 = $("#text1");
var text2 = $("#text2");
var ver1 = $("#verify-name");
var ver2 = $("#verify-password");
var $form = $("form");
var flag1 = 0;
var flag2 = 0;
text1.keyup(function(){
    var str = $(this).val();
    console.log(str);
    var reg = /^[\w\p{sc=Han}]{2,6}$/u;
    var bool = reg.test(str);
    if(bool){
        ver1.html("");
        ver1.css({"color":"green","font-size":"20px"});
        flag1 = 1;
    }
    else{
        if(str.length<2||str.length>6){
            ver1.html("长度不合要求");
            ver1.css({"color":"red","font-size":"20px"});
        }
        else{
            ver1.html("含非法字符");
            ver1.css({"color":"red","font-size":"20px"});
        }    
        flag1 = 0;
    }
});

text2.keyup(function(){
    var str2 = $(this).val();
    console.log(str2);
    var reg2 = /^[a-zA-Z0-9]{4,8}$/;
    var bool2 = reg2.test(str2);
    if(bool2){
        ver2.html("");
        ver2.css({"color":"green","font-size":"20px"});
        flag2 = 1;
    }
    else{
        if(str2.length<4||str2.length>8){
            ver2.html("长度不合要求");
            ver2.css({"color":"red","font-size":"20px"});
        }
        else{
            ver2.html("含非法字符");
            ver2.css({"color":"red","font-size":"20px"});
        }
        flag2 = 0;
    }
});

$logwindow.click(function(){
    $logbg.css({"opacity":"0.8"});
    $logwindow.css({"background-color":"rgba(219, 225, 225, 1)"});
    // 阻止事件冒泡
    return false;
});
$logpage.click(function(){
    $logbg.css({"opacity":"1"});
    $logwindow.css({"background-color":"rgba(219, 225, 225, 0.4)"});
});
$btn.click(function(){
    // console.log(text1.val())
    if(flag1==0){
        alert("用户名不合要求！");
    }
    else{
        if(flag2==0){
            alert("密码不合要求！");
        }
        else
        {
            $form.submit();
            alert("提交成功！");
        }
    }
})


