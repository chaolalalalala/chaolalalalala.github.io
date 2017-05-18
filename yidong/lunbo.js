var con1=document.querySelectorAll(".banner2>ul li")
var con2=document.querySelectorAll(".lunbo>ul li")
var con3=document.querySelector(".banner2")
var con4=document.querySelector(".zuojiantou")
var con5=document.querySelector(".youjiantou")
var con6=document.querySelector(".row10")
var con7=document.querySelector(".lunbotu2")
var con8=document.querySelector(".zuojiantou1")
var con9=document.querySelector(".youjiantou1")
var con10=document.querySelector(".gonggao2")
var con11=document.querySelector(".gonggao4-1")
var con12=document.querySelector(".gonggao4-2")
var con13=document.querySelector(".gonggao1")
var num=0
var z=1
var t=setInterval(move,2000)
function move(){
    con1[num].classList.add("leftout")
    con2[num].classList.remove("row1-2")
    num++;
    if(num==con1.length){
        num=0
    }
    con1[num].classList.add("leftin")
    con2[num].classList.add("row1-2")
    con1[num].style.zIndex=z++
}
con1.forEach(
    function(v){
        v.addEventListener("animationend",function(){
            v.className=""
            flog=true
        })
    }
)
con3.onmouseover=function(){
    clearInterval(t)
}
con3.onmouseout=function(){
    t=setInterval(move,2000)
}
con2.forEach(
    function(ele,index){
        ele.onclick=function(){
            if(index==num){
                return
            }
            if(index>num){
                con2[num].classList.remove("row1-2")
                con2[index].classList.add("row1-2")
                con1[num].classList.add("leftout")
                con1[index].classList.add("leftin")

            }
            if(index<num){
                con2[num].classList.remove("row1-2")
                con2[index].classList.add("row1-2")
                con1[num].classList.add("rightout")
                con1[index].classList.add("rightin")

            }
            con1[index].style.zIndex=z++
            num=index
        }
    }
)

var flog=true
con5.onclick=function(){
    if(flog){
        flog=false
        move()
    }
}
con4.onclick=function(){
    if(flog){
        con1[num].classList.add("rightout")
        con2[num].classList.remove("row1-2")
        num-- 
        if(num==-1){
            num=con1.length-1
        }
        con1[num].classList.add("rightin")
        con2[num].classList.add("row1-2")
        flog=false
    }
    con1[num].style.zIndex=z++
}


var num2=4
 var t1=setInterval(move4,2000)

function move4(){
    con6.style.transition="all 1s"
    num2++;
    con6.style.marginLeft=-295*num2+"px"
}
var fale=true
con9.onclick=function(){
    if(fale){
        move4()
        fale=false
    }
}
con8.onclick=function(){
    if (fale){
        fale=false
        num2-=2;
        move4()

    }
}
con7.onmouseover=function(){
    clearInterval(t1)
}
con7.onmouseout=function(){
    t1=setInterval(move4,2000)
}
con6.addEventListener("transitionend",function(){
    if(num2==12){
        con6.style.transition="none"
        num2=4
        con6.style.marginLeft=-295*num2+"px"

    }else if(num2==0){
        con6.style.transition="none"
        num2=8
        con6.style.marginLeft=-295*num2+"px"
    }
    fale=true
})




/*con8.onclick=function(){
    // con6.style.marginLeft=-295+"px"
}
con9.onclick=function(){
    con6.style.marginLeft=-295+"px"
}*/
var num5=0
function move5(){
    num5++
    if(num5==4){
        num5=0
    }
    con10.style.marginLeft=-479.16*num5+"px"
}
var t2=setInterval(move5,2000)
con13.onmouseover=function(){
    clearInterval(t2)
}
con13.onmouseout=function(){
    t2=setInterval(move5,2000)
}
con12.onclick=function(){
    move5()
}
con11.onclick=function(){
    num5--;
    if(num5<0){
        num5=3
    }
    con10.style.marginLeft=-479.16*num5+"px"
}
