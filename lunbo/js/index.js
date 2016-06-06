$(document).ready(function() {
	var interval;
	// 第一张图片的宽度
	var img_width = parseInt($(".img-list img").first().width());
	/**
	 * 控制图片向左移动
	 */
	function moveLeft(){
		// 获取图片容器的位置
		var left = $(".img-list").position().left;
		if(Math.abs(left) > img_width){
			left += img_width;
			// 如果第一张图片超出范围，则将该图片放到队列的最后
			$(".img-list img").first().appendTo($(".img-list"));
		}
		// 将图片容器向左移动
		$(".img-list").css('left', (parseInt(left) - 5) + "px");
	}

	// 鼠标移动到图片上时停止移动
	$(".img-list img").hover(function(){
		clearInterval(interval);
	}, function(){
		interval = setInterval(moveLeft, 100);
	});

	interval = setInterval(moveLeft, 100);
});