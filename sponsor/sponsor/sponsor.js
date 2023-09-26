const a=document.querySelector('.main');//主体
const b=document.querySelector('body');
const c=document.querySelectorAll('.kuaib');//包裹正方体的div

//const d=document.querySelector('.btnkuai');//person按钮
//const e=document.querySelector('.btnmain');//above按钮

//const auto=document.querySelector('.auto');//above按钮
let autotime=false;
let con='main';
//按钮点击控制-------------------------------------------------------------------
//d.onclick=function(){//相对自身旋转
//    con='kuai';
//    e.setAttribute('class','btnmain');
//    auto.setAttribute('class','auto');
//    d.setAttribute('class','btnkuai fluid');
//    clearInterval(autotime);
//    autotime=false;
//}
//e.onclick=function(){//相对整体旋转
//    con='main';
//    e.setAttribute('class','btnmain fluid');
//    auto.setAttribute('class','auto');
//    d.setAttribute('class','btnkuai');
//    clearInterval(autotime);
//    autotime=false;
//}
const sspeed=document.querySelector('.sspeed');
//auto.onclick=function(){//自动旋转
    con='auto';
    //e.setAttribute('class','btnmain');
    //auto.setAttribute('class','auto fluid');
    //d.setAttribute('class','btnkuai');
    if(autotime==false){//自动旋转
        autotime=setInterval(() => {
            num+=sspeed.innerHTML/3;
            num>360?num-=360:num;
            numx+=sspeed.innerHTML/3;
            numx>360?numx-=360:numx;
            numy+=sspeed.innerHTML/3;
            numy>360?numy-=360:numy;
            console.log(num,numx,numy);
            for(let i=0;i<c.length;i++){
                c[i].style.transform='rotateX('+0+'deg) rotateY('+numy+'deg) rotateZ('+numx+'deg)'
            }
            a.style.transform='rotateX(73deg) rotateZ('+num+'deg)';
        }, 20);
    }
//}
let num=0;
let numx=0;
let numy=0;
let speed=4;
sspeed.innerHTML=1;
//const btnjia=document.querySelector('.btnjia');//增加
//const btnjian=document.querySelector('.btnjian');//减小
//btnjia.onclick=function(){//增加速度
//    sspeed.innerHTML++;
//    sspeed.innerHTML>19?sspeed.innerHTML=19:sspeed.innerHTML;
//    sspeed.innerHTML>10?speed=1-(sspeed.innerHTML-10)/10:speed=11-sspeed.innerHTML;
//    btnjia.style.backgroundColor='rgba(0, 153, 255, 0.842)';
//    setTimeout(()=>{btnjia.style.backgroundColor='rgba(0, 153, 255, 0.642)'},100);
//}
//btnjian.onclick=function(){//减小速度
//    sspeed.innerHTML--;
//    sspeed.innerHTML<1?sspeed.innerHTML=1:sspeed.innerHTML;
//    sspeed.innerHTML>10?speed=1-(sspeed.innerHTML-10)/10:speed=11-sspeed.innerHTML;
//    btnjian.style.backgroundColor='rgba(0, 153, 255, 0.842)';
//    setTimeout(()=>{btnjian.style.backgroundColor='rgba(0, 153, 255, 0.642)'},100);
//}
//const reset=document.querySelector('.reset');//重置位置按钮
//reset.onclick=function(){//重置位置
//    reset.style.backgroundColor='rgba(0, 153, 255, 0.842)';
//    setTimeout(()=>{reset.style.backgroundColor='rgba(0, 153, 255, 0.642)'},100);
//    num=0;
//    numx=0;
//    numy=0;
//    for(let i=0;i<c.length;i++){
//        c[i].style.transform='rotateX('+0+'deg) rotateY('+numy+'deg) rotateZ('+numx+'deg)';
//    }
//    a.style.transform='rotateX(73deg) rotateZ('+num+'deg)';
//}
//鼠标移动控制---------------------------------------------------------------
b.onmousedown=function(e){
    const sx=e.screenX;
    const sy=e.screenY;
    let lastex=sx;
    let lastey=sy;
    b.onmousemove=function(e){//鼠标移动事件
        const ex=e.screenX;
        const ey=e.screenY;
        if(con=='main'){//全部旋转状态
            num+=(lastex-ex)/speed;
            a.style.transform='rotateX(73deg) rotateZ('+num+'deg)';
        }else if(con=='kuai'){//个体旋转状态
            numx+=(lastex-ex)/speed;
            numy+=(ey-lastey)/speed;
            for(let i=0;i<c.length;i++){
                c[i].style.transform='rotateX('+0+'deg) rotateY('+numy+'deg) rotateZ('+numx+'deg)';
            }
        }
        lastex=ex;
        lastey=ey;
    };
    b.onmouseup=function(){//移出事件
        b.onmousemove='none';
    }
}
////canvas背景-------------------------------------------------------------------------
//let can=document.querySelector('#can');//canvas画布
//let cxt=can.getContext('2d');//操作画布
//let winw=window.innerWidth;//屏幕宽
//let winh=window.innerHeight;//屏幕高
//can.setAttribute("width", winw);//设置canvas宽
//can.setAttribute("height", winh);//设置canvas高
//function color(){//随机颜色函数
//    let r=Math.floor(Math.random()*256);
//    let g=Math.floor(Math.random()*256);
//    let b=Math.floor(Math.random()*256);
//    return `rgb(${r},${g},${b})`;
//}
//let starlist=[]//存放所有的球
//makestar=function(){
//    let left=Math.floor(Math.random()*winw);//left值
//    let top=Math.floor(Math.random()*winh);//top值
//    let xj=Math.floor(Math.random()*10);//x轴随机变化值
//    let yj=Math.floor(Math.random()*10);//y轴随机变化值
//    let xjj=Math.floor(Math.random()*2);//x加还是减
//    let yjj=Math.floor(Math.random()*2);//y加还是减
//    let col=color();//随机颜色
//    starlist.push({//将这些值以对象的形式添加到数组中
//        left,top,xj,yj,xjj,yjj,col
//    })
//    return;
//}
//for(let i=0;i<100;i++){//制作球
//    makestar();
//}
//setInterval(()=>{//计时器
//    cxt.beginPath();
//    cxt.fillStyle='rgba(0,0,0,.05)';
//    cxt.fillRect(0,0,winw,winh);
//    cxt.closePath();//让页面颜色变浅
//    for(let i=0;i<starlist.length;i++){
//        starlist[i].left<0?starlist[i].xj=-starlist[i].xj:starlist[i].left;//超出边界，反弹
//        starlist[i].left>winw?starlist[i].xj=-starlist[i].xj:starlist[i].left;//超出边界，反弹
//        starlist[i].top<0?starlist[i].yj=-starlist[i].yj:starlist[i].top;//超出边界，反弹
//        starlist[i].top>winh?starlist[i].yj=-starlist[i].yj:starlist[i].top;//超出边界，反弹
//        if(starlist[i].xjj=='0'){//0就减变化值
//            starlist[i].left-=starlist[i].xj;
//        }else if(starlist[i].xjj=="1"){//1就加变化值
//            starlist[i].left+=starlist[i].xj
//        }
//        if(starlist[i].yjj=='0'){//0就减变化值
//            starlist[i].top-=starlist[i].yj;
//        }else if(starlist[i].yjj=="1"){//1就加变化值
//            starlist[i].top+=starlist[i].yj
//        }
//        cxt.beginPath();
//        cxt.arc(starlist[i].left,starlist[i].top,1,0,Math.PI*2,true);//画圆
//        cxt.fillStyle=starlist[i].col;//画圆的颜色
//        cxt.fill();//画圆填充
//        cxt.closePath();
//    }
//},20)
//蒙版--------------------------------------------------------------------------------
let guan=document.querySelector('.back');
let mengb=document.querySelector('.mengb');
guan.onclick=function(){
    mengb.style.display='none';
}
let mian=document.querySelectorAll('.mian');
let mbtext=document.querySelector('.mbtext')
for(let i=0;i<mian.length;i++){
    mian[i].onclick=function(){
        let imglist=this.parentNode.querySelectorAll('img');
        let mbimg=mengb.querySelectorAll('img');
        let tit=imglist[0].getAttribute('src').split('/')[imglist[0].getAttribute('src').split('/').length-2];
        mbtext.innerHTML=tit;
        for(let i=0;i<imglist.length;i++){
            mbimg[i].setAttribute('src',imglist[i].getAttribute('src'));
        }
        for(let i=0;i<imglist.length;i++){//图片懒加载
            let imgsave=imglist[i].getAttribute('src').split('/')[imglist[i].getAttribute('src').split('/').length-1].split('.')[0].slice(0,-1);
            let imgsaveall=imglist[i].getAttribute('src').split('/');
            imgsaveall[imglist[i].getAttribute('src').split('/').length-1]=
                imgsave+'.'+imgsaveall[imglist[i].getAttribute('src').split('/').length-1].split('.')[1];
            let iii=new Image();
            iii.src=imgsaveall.join('/');
            iii.onload=function(){
                mbimg[i].setAttribute('src',imgsaveall.join('/'));
            }
        }
        mengb.style.display='block';
    }
}