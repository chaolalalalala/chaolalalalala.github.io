var cond1=document.querySelector(".z")
var cond2=document.querySelector(".saoma2")
var cond3=document.querySelectorAll(".n")
var cond4=document.querySelectorAll(".kuozhan")
var cond5=document.querySelector(".j")
var cond6=document.querySelector(".jsshang")
var cond7=document.querySelector(".z")
var cond8=document.querySelector(".saoma2")
var cond9=document.querySelector(".k")
var cond10=document.querySelector(".jswangzhi")
var cond11=document.querySelectorAll(".gl>li")
console.log(cond11)
var cond12=document.querySelectorAll(".jscelan")
var cond13=document.querySelector(".sanjiao")
var cond14=document.querySelector(".sanjiao1")
var cond15=document.querySelector(".sanjiao2")
var cond16=document.querySelector(".sanjiao3")
var cond17=document.querySelector(".gl")
var cond18=document.querySelector(".kuozhan1")
cond1.onmouseover=function(){
    cond2.style.display="block"
}
cond1.onmouseout=function(){
    cond2.style.display="none"
}
var arr1=[]
Array.from(cond4).forEach(
    function(le){
        var obj1=le.querySelectorAll(".kuozhanz")
        var h=28*obj1.length
        arr1.push(h)
    }
)
// console.log(arr1)
Array.from(cond3).forEach(
   function(v,index){
       v.onmouseover=function(){
            cond4[index].style.height=arr1[index]+"px"
           cond13.style.transform="rotate(180deg)"

}
       v.onmouseout=function(){
           cond4[index].style.height=0+"px"
           cond13.style.transform="rotate(0deg)"

       }
}
)
cond17.onmouseover=function(){
    cond18.style.height=56+"px"
    cond16.style.transform="rotate(180deg)"
}
cond17.onmouseout=function(){
    cond18.style.height=0+"px"
    cond16.style.transform="rotate(0deg)"
}
cond5.onmouseover=function(){
    cond6.style.display="block"
    cond15.style.transform="rotate(180deg)"
}
cond5.onmouseout=function(){
    cond6.style.display="none"
    cond15.style.transform="rotate(0deg)"
}
cond7.onmouseover=function(){
    cond8.style.display="block"
}
cond7.onmouseout=function(){
    cond8.style.display="none"
}
cond9.onmouseover=function(){
    cond10.style.display="block"
    cond14.style.transform="rotate(180deg)"
}
cond9.onmouseout=function(){
    cond10.style.display="none"
    cond14.style.transform="rotate(0deg)"
}
/*
cond11.onmouseover=function(){
    
}
cond11.onmouseout=function(){
    cond12.style.display="none"
}*/
Array.from(cond11).forEach(
    function(qw,qe){
        qw.onmouseover=function(){
            cond12[qe].style.display="block"
        }
        qw.onmouseout=function(){
            cond12[qe].style.display="none"
        }
    }
)

