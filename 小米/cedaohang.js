$(".banner-1>ul>li").each(function (index,ele) {
    $(ele).mouseover(function(){
        $(".asidesec").eq(index).css("display","block")
    })
    $(ele).mouseout(function(){
        $(".asidesec").eq(index).css("display","none")
    })
})
$(".daoyou>ul>li").each(function (index,ele) {
    $(ele).mouseover(function(){

        $(".clearfix").eq(index).css("height","206px")
    })
    $(ele).mouseout(function(){
        $(".clearfix").eq(index).css("height","0px")
    })
})