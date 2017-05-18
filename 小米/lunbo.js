var num3=0
function lunbo(l,o,p){
    num3++;
    if(num3>l){
        num3=l
    }
    if(num3<0){
        num3=0
    }
    o.css("marginLeft",-num3*296+"px")
    o.css("transition","all 0.5s")
    p.eq(num3).css("background","#ff6700").siblings().css("background","#b0b0b0")

}
$(".z").click(function(){
    lunbo(2,$(".m"),$(".c"))
})
$(".x").click(function(){
    num3-=2
    lunbo(2,$(".m"),$(".c"))
})
$(".b").click(function(){
    lunbo(3,$(".a"),$(".n"))
})
$(".v").click(function(){
    num3-=2
    lunbo(3,$(".a"),$(".n"))
})
$(".bb").click(function(){
    lunbo(3,$(".aa"),$(".nn"))
})
$(".vv").click(function(){
    num3-=2
    lunbo(3,$(".aa"),$(".nn"))
})
$(".bbb").click(function(){
    lunbo(3,$(".aaa"),$(".nnn"))
})
$(".vvv").click(function(){
    num3-=2
    lunbo(3,$(".aaa"),$(".nnn"))
})

