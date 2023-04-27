const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ggkDom=document.querySelector("#ggk");  
const jp=document.querySelector("#jp");



// 创建一个目标图像
ctx.fillStyle = "darkgray";
ctx.fillRect(0,0,400,100);
ctx.fillStyle="#fff";
ctx.font = "20px Arial";
ctx.fillText("刮刮卡",180,40)

const rewardList=[{content:'一等奖',p:1},{content:'二等奖',p:5},{content:'三等奖',p:14},{content:'谢谢惠顾',p:100}]

function randomReward(){
   const randomNumber = Math.floor(Math.random()*100);

   const item=rewardList.find(item=>randomNumber<item.p);
   console.log(item,randomNumber);
   const rewardText= item.content||'谢谢惠顾' ;
   jp.textContent=rewardText;

}
randomReward()
// https://www.w3school.com.cn/jsref/canvas_globalcompositeoperation.asp
// 在目标图像顶部显示源图像, 之外的部分不可见
// ctx.globalCompositeOperation ="source-atop"

// // 创建一个源图像
// ctx.fillStyle = "skyblue";
// ctx.fillRect(200,200,200,200);
let isDrawing = false;
canvas.onmousedown=function(){
  isDrawing=true
}

// 移动时绘制圆形 将源图像内的内容清除
canvas.onmousemove=function(e){
  if(isDrawing){
    const x=e.pageX-ggkDom.offsetLeft;
    const y=e.pageY-ggkDom.offsetTop;
    ctx.globalCompositeOperation ="destination-out";
    ctx.arc(x,y,20,0,2*Math.PI);
    ctx.fill();
  }
} 

canvas.onmouseup=function(){
  console.log('onmouseup');
  isDrawing=false
}