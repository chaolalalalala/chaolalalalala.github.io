setInterval(function(){
    var date=new Date()
    var yuji=new Date(2017,4,23,0,0,0);
    var cha=yuji.getTime()-date.getTime()
    var shi=Math.floor(cha/(1000*60*60))
    $(".hh").html(shi<10?"0"+shi:shi)
    var fen=Math.floor((cha/(1000*60))%60)
    $(".ff").html(fen<10?"0"+fen:fen)
    var miao=Math.floor((cha/1000)%60)
    $(".mm").html(miao<10?"0"+miao:miao)
},1000)
