// 顶部
var $topcol = $(".top div");
$topcol.eq(0).css({"width":"200px"});
$topcol.eq(1).css({"width":"1000px"});
$topcol.eq(2).css({"width":"200px"});
window.addEventListener('scroll', function(){
    let t = $('body, html').scrollTop();   // 目前监听的是整个body的滚动条距离
    if(t>0){
        $(".top").addClass("topfixed");
    }
    else{
        $(".top").removeClass("topfixed");
    }
});

// 一、用js（两种主要方法）
// var searchimg = document.getElementById("search-img");
// var searchinput = document.getElementById("search-text");
// var storeimg = document.getElementById("store-img");
// var storelist = document.getElementById("store-list");
// var menuimg = document.getElementById("menu-img");
// var menu = document.getElementById("ul");
// //1、为DOM对象添加监听事件来实现
// searchimg.addEventListener("mouseenter",showserchtext,false);
// searchimg.addEventListener("mouseleave",notshowserchtext,false);
// searchinput.addEventListener("mouseenter", show,false);
// searchinput.addEventListener("mouseleave", notshow,false);
// storeimg.addEventListener("mouseenter",showstorelist,false);
// storeimg.addEventListener("mouseleave",notshowstorelist,false);
// storelist.addEventListener("mouseenter", show,false);
// storelist.addEventListener("mouseleave", notshow,false)
// menuimg.addEventListener("mouseenter",showmenu,false);
// menuimg.addEventListener("mouseleave",notshowmenu,false);
// menu.addEventListener("mouseenter", show,false);
// menu.addEventListener("mouseleave", notshow,false)
// function show(){
//     this.style.visibility="visible";
// }
// function notshow(){
//     this.style.visibility="hidden";
// }
// function showserchtext(){
//     searchinput.style.visibility="visible";
// }
// function notshowserchtext(){
//     searchinput.style.visibility="hidden";
// }
// function showstorelist(){
//     storelist.style.visibility="visible";
// }
// function notshowstorelist(){
//     storelist.style.visibility="hidden";
// }
// function showmenu(){
//     menu.style.visibility="visible";
// }
// function notshowmenu(){
//     menu.style.visibility="hidden";
// }
// //2、为DOM对象设置事件属性
// searchimg.onmouseover = function(){
//     searchinput.style.visibility="visible";
// }
// searchimg.onmouseout = function(){
//     searchinput.style.visibility="hidden";
// }
// searchinput.onmouseover = function(){
//     this.style.visibility="visible";
// }
// searchinput.onmouseout = function(){
//     this.style.visibility="hidden";
// }
// storeimg.onmouseover = function(){
//     storelist.style.visibility="visible";
// }
// storeimg.onmouseout = function(){
//     storelist.style.visibility="hidden";
// }
// storelist.onmouseover = function(){
//    this.style.visibility="visible";
// }
// storelist.onmouseout = function(){
//     this.style.visibility="hidden";
// }
// menuimg.onmouseover = function(){
//     menu.style.visibility="visible";
// }
// menuimg.onmouseout = function(){
//     menu.style.visibility="hidden";
// }
// menu.onmouseover = function(){
//    this.style.visibility="visible";
// }
// menu.onmouseout = function(){
//     this.style.visibility="hidden";
// }
// 3、IE浏览器特有的方法：
// attachEvent("元素名","事件名",事件函数)  或者 元素名.attachEvent("事件名",事件函数)

// 二、用jquery,使用jquery对象的事件方法来实现
var $searchdiv = $("#search");
var $searchinput = $("#search-text");
var $storediv = $("#store");
console.log($storediv)
console.log($storediv.find("#store-img"))
console.log("分割线------------------------------")
var $storelist = $("#store-list");
var $menudiv = $("#menu");
var $menu = $("#menu ul");
function show(){
    $(this).css({"visibility":"visible"});
}
function notshow(){
    $(this).css({"visibility":"hidden"});
}
// 搜索
$searchdiv.mouseover(function(){
    $searchinput.css({"visibility":"visible"});
})
$searchdiv.mouseout(function(){
    $searchinput.css({"visibility":"hidden"});
})
$searchinput.mouseover(show);
$searchinput.mouseout(notshow);
// 购物车
$storediv.mouseover(function(){
    $storediv.find("#store-img").css({"font-size": "35px","color": "red"});
    $storelist.css({"visibility":"visible"});
})
$storediv.mouseout(function(){
    $storelist.css({"visibility":"hidden"});
    $storediv.find("#store-img").css({"font-size": "30px","color": "gray"});
})
$storelist.mouseover(show);
$storelist.mouseout(notshow);
// 菜单栏
$menudiv.mouseover(function(){
    $menudiv.find("#menu-img").css({"font-size": "35px","color": "red"});
    $menu.css({"visibility":"visible"});
})
$menudiv.mouseout(function(){
    $menu.css({"visibility":"hidden"});
    $menudiv.find("#menu-img").css({"font-size": "30px","color": "gray"});
})
$menu.mouseover(show);
$menu.mouseout(notshow);
var $li = $("#menu li");
$li.mouseover(function(){
    $(this).siblings().css({"background":""});
    $(this).css({"background":"pink","cursor":"pointer"});
})

// 第一行
var $left = $("#left");
var $right = $("#right");
var $slider1 = $("#row1col1");
var $slider2 = $("#row1col2");
var $h1 = $(".row1 h1");
var $h2 = $(".row1 h2");
var $li = $(".row1 li");
var $row1 = $(".row1.w.clear");
$left.click(leftphoto);
$right.click(rightphoto);
function leftphoto(){
    if($row1.attr("id")=="slider1"){
        alert("左侧见底！"); 
    }
    else{
        $slider2.css({"transform":"translate(0%,0)"});
        $slider1.css({"transform":"translate(0%,0)"});
        $row1.prop({"id":"slider1"});       
    }   
}
function rightphoto(){
    if($row1.attr("id")=="slider1"){
        $slider1.css({"transform":"translate(-100%,0)"});
        $slider2.css({"transform":"translate(-100%,0)"}); 
        $row1.prop({"id":"slider2"});
    }
    else{
        alert("右侧见底！"); 
    }    
}

var $row1button = $(".moreinfo");
$row1button.click(moreifo);
function moreifo(){
    if($row1.attr("id")=="slider1"){
       window.open("https://www.apple.com.cn/iphone-13-pro/");
    }
    else{
       window.open("https://consumer.huawei.com/cn/phones/p50-pro/");
    }
}
// 第二行
var $row2button = $(".row2 button");
$row2button.click(function(){
    alert("网页建设中...");
})
// 第三行
var $row3eva = $(".row3 i");
$row3eva.click(function(){
    if($(this).css('color') == "rgb(128, 128, 128)"){
        // console.log($(this).text());
        if($(this).text() ==""){
            alert("已将该商品设为【喜爱】\n(之后会推选同类商品！)");
            $(this).css({"color":"red"});
        }
        else if($(this).text() ==""){
            alert("购买此商品！\n网页建设中...");
            $(this).css({"color":"red"});
        }
    }
    else{
       
        if($(this).text() ==""){
            alert("已将该商品移除【喜爱】！");
            $(this).css({"color":"gray"});
        }
    }  
})
    // // 新建一个空数组，用来存储DOM对象
    // var row3eva_dom_list = [];
    // for(var x = 0; x < $row3eva_list.length; x++){
    //     // 将jquery转换为DOM对象
    //     var row3eva_dom = $row3eva_list[x];
    //     // 将DOM对象加到数组中
    //     row3eva_dom_list.push(row3eva_dom);
    // }
    // console.log(row3eva_dom_list);
    // window.onload = function(){
    //     // window.onload事件后，即浏览器将全部的DOM对象渲染成html元素，
    //     for(var x = 0; x < row3eva_dom_list.length; x++){
    //         console.log(row3eva_dom_list[x]); 
    //     } 
    // }








