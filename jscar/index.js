// 获取element
var img_ele = document.getElementById("Img")
var ele = document.getElementById("Main");

var speed = 50;
var inteval = null;
var start, end;

function Point(x,y){
    this.x = x;
    this.y = y;
}

// 绑定点击事件
ele.onclick = function(event) {
    // 小车的原始位置
    start = new Point(parseFloat(img_ele.offsetLeft), parseFloat(img_ele.offsetTop));
    // 小车的结束位置，也就是鼠标点击的位置
    end = new Point(parseFloat(event.clientX), parseFloat(event.clientY));

    console.log(start);
    console.log(end);
    move();
    inteval = setInterval(move, 300);
}
//定位图片位置
function GetMouse(oEvent) {
    var x = oEvent.clientX;
    var y = oEvent.clientY;
    img_ele.style.left = x + "px";
    img_ele.style.top = y + "px";

}


function move(){
    console.log('move--')

    
        

    // 运动的距离
    var distance = Math.sqrt((end.y - start.y) * (end.y - start.y)  + (end.x - start.x) * (end.x - start.x))
    // x方向移动
    var speedX = speed / distance * (end.x - start.x)
    var speedY = speed / distance * (end.y - start.y)
    // y方向移动
    img_ele.style.left = parseFloat(img_ele.offsetLeft) + speedX + "px";
    img_ele.style.top = parseFloat(img_ele.offsetTop) + speedY + "px";

    if(!start || !end || img_ele.offsetLeft <= 50 || img_ele.offsetTop <= 50 ||
        img_ele.offsetLeft >= window.screen.width - img_ele.width - 50 ||
        img_ele.offsetTop >= window.screen.height - img_ele.height - 50){
        clearInterval(inteval);
        console.log('clearInterval')
        return;
    }

}
