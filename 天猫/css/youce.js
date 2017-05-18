var arr5=["#EA5F8D","#0AA6E8","#64C333","#F15453","#000"]
var sc=$(".jszuo li:not(.jsfanhui)")
sc.hover(function(){
    var index=$(this).index()
    $(this).css("background",arr5[index-1])
},function(){
    $(this).css("background","")
})
$(window).scroll(function(){
    var wh=$(window).scrollTop()
    console.log(wh)
    $(".x").each(function(index,ele){
        if(wh>=$(ele).offset().top){
            sc.eq(index).addClass("active1").siblings().removeClass("active1")
        }else{
            sc.eq(index).addClass("")
        }
    })
})