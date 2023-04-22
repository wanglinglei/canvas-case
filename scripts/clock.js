// 数字时钟

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


function renderClock() {
    ctx.clearRect(0,0,800,600)
    // 初始化表盘
    ctx.save();
    ctx.translate(400, 300);
    ctx.rotate(-Math.PI / 2);
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, 200, 0, 2 * Math.PI);
    ctx.strokeStyle = 'darkgrey';
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.closePath();
    // 绘制刻度
    for (let i = 0; i < 12; i++) {
        ctx.rotate(Math.PI / 6);
        ctx.beginPath();
        ctx.moveTo(180, 0);
        ctx.lineTo(200, 0);
        ctx.strokeStyle = 'darkgrey';
        ctx.stroke();
        ctx.closePath();
    }
    ctx.restore();
    ctx.save();
    for (let i = 0; i < 60; i++) {
        ctx.rotate(Math.PI / 30);
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(180, 0);
        ctx.lineTo(190, 0);
        ctx.strokeStyle = 'darkgrey';
        ctx.stroke();
        ctx.closePath();
    }

    ctx.restore();
    ctx.save();

    // 计算时间
    const time = new Date();
    const hour = time.getHours() % 12;
    const minute = time.getMinutes();
    const second = time.getSeconds();
    console.log('时间', hour, minute, second);
    // 绘制秒针
    ctx.beginPath();
    ctx.rotate(2 * Math.PI / 60 * second);
    ctx.moveTo(-30, 0);
    ctx.lineTo(170, 0);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    ctx.restore();
    ctx.save();
    // 绘制分针

    ctx.beginPath();
    ctx.rotate(2 * Math.PI / 60 * minute + 2 * Math.PI / 3600 * second);
    ctx.moveTo(-20, 0);
    ctx.lineTo(150, 0);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();

    ctx.restore();
    ctx.save();
    // 绘制时针
    ctx.beginPath();
    ctx.rotate(2 * Math.PI / 12 * hour + 2 * Math.PI / 60 / 12 * minute);
    ctx.moveTo(-10, 0);
    ctx.lineTo(130, 0);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    ctx.restore();
}


setInterval(()=>{
    renderClock();
},1000)