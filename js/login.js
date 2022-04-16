var $logbg = $("img");
var $logpage = $("#loginpage");
var $logwindow = $("#logwidow");
var $btn = $("#login");
var text1 = $("#text1");
var text2 = $("#text2");
var $form = $("form")
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
    if(text1.val()==""){
        alert("您还未输入姓名！");
    }
    else{
        if(text2.val()==""){
            alert("请输入密码！");
        }
        else
        {
            $form.submit();
            alert("提交成功！");
        }
    }
})


