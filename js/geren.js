var banner=document.querySelector(".banner")
var biao=document.querySelector(".biao")
var shizhen=document.querySelector(".shizhen")
var fenzhen=document.querySelector(".fenzhen")
var miaozhen=document.querySelector(".miaozhen")
// var kd=document.querySelector(".kd")
var zhongxin=document.querySelector(".zhongxin")
// var div=document.createElement("div");
// biao.style.cssText="width:200px;height:200px;border:4px solid #999;border-radius:50%;margin:0 auto;position:relative" ;
// document.body.appendChild(banner);
// console.log(div);
for(var i=0;i<60;i++){
    var kd=document.createElement("div")
    kd.style.cssText="width:8px;height:10px;background:#777;position:absolute;top:0;left:196px;transform-origin:4px 200px"
    biao.appendChild(kd)
    var dushu=i*6
    kd.style.transform=`rotate(${dushu}deg)`
    if(i%5==0){
        kd.style.height=20+"px"
        kd.style.background="#000"
    }
}
//
// var zhongxin=document.createElement("div")
// zhongxin.style.cssText="width:10px;height:10px;background:#000;border-radius:50%;position:absolute;top:95px;left:95px;"
// div.appendChild(zhongxin)
// var shizhen=document.createElement("div")
// shizhen.style.cssText="width:5px;height:60px;position:absolute;top:40px;left:97.5px;background:#000;transform-origin:center bottom"
// div.appendChild(shizhen)
// var fenzhen=document.createElement("div")
// fenzhen.style.cssText="width:3px;height:80px;position:absolute;top:20px;left:98.5px;background:#000;transform-origin:center bottom"
// div.appendChild(fenzhen)
// var miaozhen=document.createElement("div")
// miaozhen.style.cssText="width:1px;height:100px;position:absolute;top:0px;left:99.5px;background:#000;transform-origin:center bottom"
// div.appendChild(miaozhen)
function setTime(){
    var date=new Date()
    var shizhens=date.getHours()
    var fenzhens=date.getMinutes()
    var miaozhens=date.getSeconds()
    shizhen.style.transform=`rotate(${shizhens/12*360+fenzhens/60*30}deg)`
    fenzhen.style.transform=`rotate(${fenzhens/60*360}deg)`
    miaozhen.style.transform=`rotate(${miaozhens/60*360}deg)`

}
setTime()
setInterval(setTime,1000)


