var conx1=document.querySelector(".toubu3-1")
var conx2=document.querySelector(".toubu3-1-1")
var conx3=document.querySelector(".toubu3-2")
var conx4=document.querySelector(".toubu3-2-1")
var conx5=document.querySelectorAll(".row21>li:not(.row22)")
var conx6=document.querySelectorAll(".row20")
var conx7=document.querySelectorAll(".youbian1")
var conx8=document.querySelector(".toubuxia2-1-1")
var conx9=document.querySelector(".shen")
var conx10=document.querySelector(".toubuxia2")
conx1.onmouseover=function(){
    conx2.style.display="block"
}
conx1.onmouseout=function(){
    conx2.style.display="none"
}
conx3.onmouseover=function(){
    conx4.style.display="block"
}
conx3.onmouseout=function(){
    conx4.style.display="none"
}
conx5.forEach(function(v,index){
    v.onmouseover=function(){
        v.style.background="#f3f3f3"
        conx6[index].style.display="block"
    }
    v.onmouseout=function(){
        v.style.background="#e8e8e8"
        conx6[index].style.display="none"
    }
})
conx7.forEach(function(ele,li){
    ele.onmouseover=function(){
        conx7[li].style.left=-86+"px"
    }
    ele.onmouseout=function(){
        conx7[li].style.left=-22+"px"
    }

})
conx8.onmouseover=function(){
    conx9.style.display="block"
    // conx8.stopPropagation()
}
conx8.onmouseout=function(){
    conx9.style.display="none"
}
