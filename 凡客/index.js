var con1=document.querySelectorAll(".lunbo div")
var con2=document.querySelectorAll(".bj li")
var con3=document.querySelector(".bj")
var con4=document.querySelector(".zuoyou1")
var con5=document.querySelector(".zuoyou")
var con6=document.querySelectorAll(".jsdaohang>li")
var con7=document.querySelectorAll(".jsdaohang1")
var con8=document.querySelector(".weixin")
var con9=document.querySelector(".weixingerweima")
var con10=document.querySelector(".buy")
var con11=document.querySelector(".jsbuy")
con8.onmouseover=function(){
    con9.style.display="block"
}
con8.onmouseout=function(){
    con9.style.display="none"
}
Array.from(con1).forEach(
    function(v,index){
        v.onmouseover=function(){
            num=index
            for(var i=0;i<con1.length;i++){
                con1[i].style.background="#dddddd"
                con2[i].style.opacity=0;
                con2[i].style.zIndex=1
            }
            con1[index].style.background="#a10000"
            con2[index].style.opacity=1;
            con2[index].style.zIndex=2
        }
    }
)
var num=0
function move(){
    num++;
    if(num==con1.length){
        num=0
    }
    if (num==-1){
        num=con1.length-1
    }
    for(var i=0;i<con1.length;i++){
        con1[i].style.background="#dddddd"
        con2[i].style.opacity=0;
        con2[i].style.zIndex=1
    }
    con1[num].style.background="#a10000"
    con2[num].style.opacity=1;
    con2[num].style.zIndex=2
}
var t1=setInterval(move,2000)
con3.onmouseover=function(){
    clearInterval(t1)
}
con3.onmouseout=function(){
    t1=setInterval(move,2000)
}
con4.onclick=function(){
    move()
}
con5.onclick=function(){
    num-=2;

    move()
}
var arr=[]
Array.from(con7).forEach(function(uls1){
    var lis1=uls1.querySelectorAll("li")
    var h=40*lis1.length-35
    arr.push(h)
})
console.log(arr)
Array.from(con6).forEach(function(uls,lis){
    uls.onmouseover=function(){
        con7[lis].style.height=arr[lis]+"px"
    }
    uls.onmouseout=function(){
        con7[lis].style.height=0+"px"
    }
})
con10.onmouseover=function(){
    con11.style.display="block"
}
con10.onmouseout=function(){
    con11.style.display="none"
}