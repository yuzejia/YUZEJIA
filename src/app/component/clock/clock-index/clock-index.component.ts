import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-index',
  templateUrl: './clock-index.component.html',
  styleUrls: ['./clock-index.component.less']
})
export class ClockIndexComponent implements OnInit {

  // 现在时间
  dateDay: string;
  //每次绘制新图形之前清空当前区域
  constructor() { }

  ngOnInit() {
    console.log();
    let el = document.getElementById('clock') as HTMLCanvasElement;
    this.clockInit();
    setInterval(this.clockInit, 1000);
  }

  private clockInit() {
  const hs = [" I ", "I I", "III", "I V", " V ", "V I", "VII", "VIII", "I X", " X ", "X I", "XII"];

    const el = <HTMLCanvasElement> document.getElementById('clock');
    const context = el.getContext("2d")
    context.clearRect(0, 0, 500, 500);

    //画表盘
    context.beginPath();
    context.arc(250, 250, 200, 0, 2 * Math.PI);
    context.strokeStyle = "#A9A9A9";
    context.lineWidth = 15;
    context.stroke();
    context.closePath();
    //循环绘制分钟刻度
    //重新定义画布的原点
    context.translate(250, 250);
    //绘制分钟刻度
    for (var i = 0; i < 60; i++) {
      //每次旋转6度
      context.rotate(6 * Math.PI / 180);
      context.beginPath();
      context.moveTo(0, -185);
      context.lineTo(0, -190);
      context.lineWidth = 4;
      context.strokeStyle = "lightgreen"
      context.stroke();
      context.closePath();
    }
    //绘制小时刻度
    for (var i = 0; i < 12; i++) {
      //旋转30度
      context.rotate(30 * Math.PI / 180);
      context.beginPath();
      context.moveTo(0, -180);
      context.lineTo(0, -190);
      context.strokeStyle = "#008000";
      context.stroke();
      context.closePath();

      context.beginPath();
      context.font = "12px  微软雅黑";
      //文字轮廓
      context.fillStyle = "red";
      context.fillText(hs[i], -8, -160);
      context.closePath();
    }
    //获取现在的系统时间
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    //获得的小时是一个整数,需要加上分钟代表的小数
    hour = hour + minute / 60;
    //如果是下午减去12
    hour = hour > 12 ? hour - 12 : hour;
    var second = date.getSeconds();

    //画时针
    context.rotate(hour * 30 * Math.PI / 180);
    context.beginPath();
    //设置线段开始点
    context.moveTo(0, 20);
    //设置线段结束点
    context.lineTo(0, -80);
    context.lineWidth = 5;
    context.strokeStyle = "#008000";
    context.stroke();
    context.closePath();
    //将画布角度还原到初始状态
    context.rotate(-hour * 30 * Math.PI / 180);


    //画分针
    context.rotate(minute * 6 * Math.PI / 180);
    context.beginPath();
    //设置线段开始点
    context.moveTo(0, 20);
    //设置线段结束点
    context.lineTo(0, -140);
    context.lineWidth = 4;
    context.strokeStyle = "lightgreen";
    context.stroke();
    context.closePath();
    //将画布角度还原到初始状态
    context.rotate(-minute * 6 * Math.PI / 180);

    //画秒针
    context.rotate(second * 6 * Math.PI / 180);
    context.beginPath();
    //设置线段开始点
    context.moveTo(0, 20);
    //设置线段结束点
    context.lineTo(0, -175);
    context.lineWidth = 3;
    context.strokeStyle = "crimson";
    context.stroke();
    context.closePath();
    //在圆形的中心点绘制一个圆形
    context.beginPath();
    context.arc(0, 0, 10, 0, 2 * Math.PI);
    context.fillStyle = "gold";
    context.fill();
    context.closePath();
    //在秒针上端绘制一个圆形
    context.beginPath();
    context.arc(0, -155, 8, 0, 2 * Math.PI);
    context.fillStyle = "gold";
    context.fill();
    context.closePath();
    //将画布角度还原到初始状态
    context.rotate(-second * 6 * Math.PI / 180);
    //将圆心的位置重置到左上角
    context.translate(-250, -250);
  }


}
