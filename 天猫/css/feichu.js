var conf1=document.querySelector(".dingsousuo")
var conf2=document.querySelector(".jszuodaohang")
var conf3=document.querySelectorAll(".jszuo li:not(.jsfanhui)")
var conf4=document.querySelectorAll(".x")
var conf5=document.querySelector(".jsfanhui")
var conf6=document.querySelectorAll(".h")

var conf7=document.querySelectorAll(".jsfei")
var conf8=document.querySelector(".m")
var conf9=document.querySelector(".saoma")
var conf10=document.querySelector(".f")
conf8.onmouseover=function(){
    conf9.style.display="block"
}
// console.log(conf7)
var p
Array.from(conf6).forEach(
    function(ls,la){
        hover(ls,function(){
            conf9.style.display="none"
            clearTimeout(p)
            p=setTimeout(function(){

                conf7[la].classList.add("lala")

            },200)

        },function(){
            clearTimeout(p)
            if(conf7[la].classList.contains("lala")){
                conf7[la].classList.remove("lala")
                conf7[la].classList.add("haha")
            }
        })
        /*ls.onmouseover=function(){
            clearTimeout(p)
            p=setTimeout(function(){

                conf7[la].classList.add("lala")

            },200)

        };
        ls.onmouseout=function(){
            clearTimeout(p)
            if(conf7[la].classList.contains("lala")){
                conf7[la].classList.remove("lala")
                conf7[la].classList.add("haha")
            }
        }*/
    }
)
Array.from(conf7).forEach(
    function(lq){
        // console.log(lq)
        lq.addEventListener("animationend",function(){
        if(lq.classList.contains("haha")){
            lq.classList.remove("haha")
        }
        })
    }
)
// console.log(conf3)
window.onscroll=function(){
    var obj=document.body;
    var h=obj.scrollTop;
    if(h>700){
        conf1.style.top="0px"

    }else{
        conf1.style.top="-50px"
    }
    if(h>670){
        conf2.style.width="37px"
        conf2.style.height="258px"
    }else {
        conf2.style.width="0px"
        conf2.style.height="0px"
    }
    if(h>450){
        conf10.style.opacity=1
    }
}

conf3.forEach(function(v,index){
    v.onclick=function(){
        console.log(1)
    var top=conf4[index].offsetTop
    animate(document.body,{scrollTop:top})
    }
})
conf5.onclick=function(){
    animate(document.body,{scrollTop:0})

}
conf10.onclick=function(){
    animate(document.body,{scrollTop:0})
}
