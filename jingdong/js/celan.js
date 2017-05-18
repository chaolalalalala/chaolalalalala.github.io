$(".ban_z>ul>li").each(function(index,ele){
    $(ele).hover(function(){
        $(".bannerlist").eq(index).css("display","block")
    },function(){
        $(".bannerlist").eq(index).css("display","none")
    })
})
var num111=0
function zou(){
    num111++;
    if(num111>6){
        num111=0
    }
    if(num111<0){
        num111=6
    }
    $(".xxxtu").css({opacity:0},{zIndex:1},{transition:"all 0.3s"})
    $(".ddd").css("background","#FFFFFF")
    $(".xxxtu").eq(num111).css({opacity:1},{zIndex:2},{transition:"all 0.3s"})
    $(".ddd").eq(num111).css("background","#CD2F39")
}
var tt=setInterval(zou,2000)
$(".xpzb_tt").mouseover(function(){
    clearInterval(tt)
})
$(".xpzb_tt").mouseout(function(){
    tt=setInterval(zou,2000)
})
$(".zty").click(function(){
    zou()
})
$(".ztz").click(function(){
    num111-=2
    zou()
})
var num222=0
function zou1(){
        num222++;
        if(num222>2){
            num222=0
        }
        if(num222<0){
            num222=2
        }
    $(".lb125>li").eq(num222).css("display","block").siblings().css("display","none")
}
setInterval(zou1,2000)
