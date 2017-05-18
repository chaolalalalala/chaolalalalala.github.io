var con1=document.querySelectorAll(".list1");
var con2=document.querySelectorAll(".list1-zhezhao");
var con3=document.querySelectorAll(".banner-xia-left-bottom2")
var con4=document.querySelectorAll(".jstop li")
var con5=document.querySelector(".banner-xia-top-left")
var con6=document.querySelector(".banner-bottom-main");
var con7=document.querySelectorAll(".lunbo ul li")
var con8=document.querySelectorAll(".jstop2 li")
var con9=document.querySelector(".banner-bottom")
var con10=document.querySelector(".banner-xia-jiantou")
var con11=document.querySelector(".banner-xia-jiantou1")
var con12=document.querySelector(".jsdong")
var con13=document.querySelectorAll(".banner-xia-zhezhao")
var con14=document.querySelectorAll(".banner-xia-left-bottom1-bofang")
var con15=document.querySelectorAll(".banner-top-right2")

var con17=document.querySelectorAll(".maotou")
var con18=document.querySelector(".inner")

var num4=0
setInterval(function(){
    
    if(num4==0){
        con18.style.transition="all 0.3s"
    }
    num4++
    con18.style.marginTop=-53*num4+"px"
    con18.addEventListener("transitionend",function(){
        if(num4==3){
        con18.style.transition="none"
        con18.style.marginTop=0;
        num4=0
        }
    })

},2000)
Array.from(con15).forEach(
    function(nei,xia){
        nei.onmouseover=function(){
            for(var i=0;i<con15.length;i++){
                con17[i].style.opacity=0;
                con17[i].style.top=0
            }

            con17[xia].style.opacity=1;
            con17[xia].style.top=-12+"px"

        }
        nei.onmouseout=function(){

            con17[xia].style.opacity=0;
            con17[xia].style.top=0+"px"

        }
    }
)
Array.from(con1).forEach(function(v,i){
    v.onmouseover=function(){
        con2[i].style.opacity="0.8"

    }
    v.onmouseout=function(){
        con2[i].style.opacity="0"

    }
})
con10.onclick=function(){
    con12.style.marginLeft=-488+"px"
    con12.style.transition="all 0.5s"
}
con11.onclick=function(){
    con12.style.marginLeft=0+"px"
    con12.style.transition="all 0.5s"

}
Array.from(con3).forEach(
    function(v,index){
    v.onmouseover=function(){
        num=index
        for(var i=0;i<con3.length;i++){
            con4[i].style.display="none"
            con3[i].style.display="block";
            con13[i].style.opacity=0
            con14[i].style.opacity=0
            con14[i].style.animation="none"

        }
        con4[index].style.display="block"
        con3[index].style.display="block";
        con13[index].style.opacity=1
        con14[index].style.opacity=1
        con14[index].style.animation="suofang 0.3s linear  forwards"

        // con3[index].classList.toggle("banner-xia-left-bottom2")
    }
        
})
var num=0;
function move() {
    num++;
    if(num==con3.length){
        num=0
        con12.style.marginLeft=0+"px"

    }
    if(num==(con3.length)/2){
        con12.style.marginLeft=-488+"px"
        con12.style.transition="all 0.3s"
    }
    for (var i = 0; i < con3.length; i++) {
            con4[i].style.display = "none"
            con3[i].style.display = "block";
            con13[i].style.opacity=0
            con14[i].style.opacity=0
            con14[i].style.animation="none"
        }
        con4[num].style.display = "block"
        con3[num].style.display = "block";
        con13[num].style.opacity=1
        con14[num].style.opacity=1
        con14[num].style.animation="suofang 0.3s linear  forwards"
    }
    var t1=setInterval(move,2000)
    con5.onmouseover=function(){
        clearInterval(t1)
    }
    con5.onmouseout=function(){
        t1=setInterval(move,2000)
    }
var newbj=["#e8e8e8","#ebd2dd","#8076e9","#7688cf","#e8e8e8","#ebd2dd"]
Array.from(con7).forEach(

    function(t,o){


        t.onmouseover=function(){
            num2=o;
            for(var i=0;i<con7.length;i++){
                con7[i].style.background="#a2a2a2"
                con8[i].style.opacity=0
                con8[i].style.zIndex=1

            }
            con7[o].style.background="#fff"
            con8[o].style.opacity=1
            con8[o].style.zIndex=2
            con9.style.background=newbj[o]
        }

    }
)

var num2=0;
function move1() {
    num2++;
    if(num2==con7.length){
        num2=0;
    }
    for (var i=0; i<con7.length; i++) {
        con7[i].style.background = "#a2a2a2"
        con8[i].style.opacity = 0
        con8[i].style.zIndex = 1
    }
    con7[num2].style.background = "#fff"
    con8[num2].style.opacity = 1
    con8[num2].style.zIndex = 2
    con9.style.background=newbj[num2]
}

    var t2=setInterval(move1,2000);
    con6.onmouseover=function(){
        clearInterval(t2)
    }
    con6.onmouseout=function(){
        t2=setInterval(move1,2000)
    }