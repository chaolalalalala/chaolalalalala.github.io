var con1=document.querySelectorAll(".lunbo div");
var con2=document.querySelectorAll(".jsbanner li");
var con3=document.querySelector(".banner1")
var con4=document.querySelector(".zuoyou2")
var con5=document.querySelector(".zuoyou1")
var con6=document.querySelector(".youjiantou")
var con7=document.querySelector(".zuojiantou")
var con8=document.querySelector(".jszuoyou")
var con9=document.querySelector(".jszuoyou1")
var con10=document.querySelector(".xmmxsp1")
con6.onclick=function(){
    // con8.style.marginLeft=-1226+"px"
    num1=0
    move1()

}
con7.onclick=function(){
    // con8.style.marginLeft=0+"px"
    num1=1
    move1()

}
con6.onmouseover=function(){
    con6.style.color="#ffac13"
}
con6.onmouseout=function(){
    if(con7.style.color=="#757575"){
        con6.style.color="#e0e0e0"
    }
    if(con7.style.color=="#e0e0e0"){
        con6.style.color="#757575"
    }
}
con7.onmouseover=function(){
    con7.style.color="#ffac13"
}
con7.onmouseout=function(){
    if(con6.style.color="#757575"){
        con7.style.color="#e0e0e0"
    }
    if(con6.style.color="#e0e0e0"){
        con7.style.color="#757575"
    }
}
var num1=0
function move1(){

    num1++
    if (num1>1){
        num1=0
    }
    if(num1==0){
        con8.style.transition="all 1s"
        con8.style.marginLeft=0+"px"
        con6.style.color="#757575"
        con7.style.color="#e0e0e0"
    }

    if(num1==1){
        con8.style.transition="all 1s"
        con8.style.marginLeft=-1226*num1+"px"
        con6.style.color="#e0e0e0"
        con7.style.color="#757575"

    }

}
var t3=setInterval(move1,2000)
con9.onmouseover=function(){
    clearInterval(t3)
}
con9.onmouseout=function(){
    t3=setInterval(move1,2000)
}
Array.from(con1).forEach(function(v,index){
    v.onmouseover=function(){
        num=index
        for (var i=0;i<con1.length;i++){
            con1[i].style.background="#7C676B"
            con2[i].style.opacity=0;
            con2[i].style.zIndex=1
        }
        con1[index].style.background="#e0e0e5"
        con2[index].style.opacity=1
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
    for (var i=0;i<con1.length;i++){
        con1[i].style.background="#7C676B"
        con2[i].style.opacity=0;
        con2[i].style.zIndex=1
    }
    con1[num].style.background="#e0e0e5"
    con2[num].style.opacity=1
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