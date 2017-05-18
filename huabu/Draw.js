class Draw{
    constructor(cobj,yangshi){
        this.cobj=cobj;
        this.color=yangshi.color;
        this.width=yangshi.width;
        this.style=yangshi.style;
    }
    inte(){
        this.cobj.strokeStyle=this.color
        this.cobj.lineWidth=this.width
        this.cobj.fillStyle=this.color
    }
    rect(ox,oy,mx,my){
        this.inte()
        // this.cobj.strokeRect(ox,oy,mx-ox,my-oy)

        this.cobj.beginPath()
        this.cobj.rect(ox,oy,mx-ox,my-oy)
        this.cobj[this.style]()
    }
    line(ox,oy,mx,my){
        this.inte()
        this.cobj.beginPath();
        this.cobj.moveTo(ox,oy)
        this.cobj.lineTo(mx,my)
        this.cobj.stroke()
    }
    neiyuan(ox,oy,mx,my){
        this.inte()
        this.cobj.beginPath()
        var r=Math.abs(mx-ox)>Math.abs(my-oy)?Math.abs(my-oy)/2:Math.abs(mx-ox)/2
        this.cobj.arc(ox+(mx>ox?r:-r),oy+(my>oy?r:-r),r,0,2*Math.PI)
        this.cobj[this.style]()
    }
    waiyuan(ox,oy,mx,my){
        this.inte()
        this.cobj.beginPath()
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))/2
        this.cobj.arc(ox+(mx-ox)/2,oy+(my-oy)/2,r,0,2*Math.PI)
        this.cobj[this.style]()
    }
    zhongyuan(ox,oy,mx,my){
        this.inte()
        this.cobj.beginPath()
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))
        this.cobj.arc(ox,oy,r,0,2*Math.PI)
        this.cobj[this.style]()
    }
    duobian(ox,oy,mx,my,b){
        this.inte()
        this.cobj.save()
        this.cobj.translate(ox,oy)
        this.cobj.rotate(Math.PI/2)
        var angle=Math.PI/b
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))
        var x=Math.cos(angle)*r
        var y=Math.sin(angle)*r
        this.cobj.beginPath()
        this.cobj.moveTo(x,y)
        for(var i=0;i<b;i++){
            this.cobj.lineTo(x,-y)
            this.cobj.rotate(-2*angle)

            // this.cobj.stroke()
        }
        this.cobj[this.style]()
        this.cobj.restore()

    }
    qianbi(ox,oy,mx,my){
        this.inte()
        this.cobj.lineTo(mx,my)
        this.cobj.stroke()
    }
    xiangpi(ox,oy,mx,my){
        this.cobj.clearRect(mx,my,10,10)
    }
}
    

