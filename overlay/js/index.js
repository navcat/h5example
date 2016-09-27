$(function(){
	// 显示弹窗
	$("#show").on('click', function(){
		$(".overlay").show();
	});
	// 点击遮罩，隐藏
	$(".overlay").on('click', function(e){
		// 阻止冒泡，如果点击的是当前div，隐藏
		if(e.target == e.currentTarget)
		$(".overlay").hide();
	});
});