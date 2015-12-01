/**
 * jquery版本的瀑布流
 * @date 2015-12-1 08:56:54
 * @author NavCat
 */
$(document).ready(function(){
    var data = [];
    var img_prefix = 'images/';     // 图片的前缀
    for (var i=1; i<=30; i++){
        data.push(img_prefix + i + '.jpg');
    }

    var container = $(".container");
    var column_height = [];
    for(var index in data){
        var box = $('<div>').attr('class', 'box')
            .append($('<img>').attr('src', data[index]));
        box.appendTo(container);
    }
    changePos();

    function changePos(){
        // 第一张图片的宽度
        var img_width = $(".box").get(0).offsetWidth;
        console.log(img_width);
        // 每一行图片的数量
        var box_num = Math.floor($(window).width() / img_width);
        $('.box').each(function(index, el) {
            var box = $(el);
            // 第一排
            if (index < box_num){
                console.log(el)
                console.log(el.offsetHeight)
                console.log(box.height())
                console.log('--------------------')
                column_height[index] = el.offsetHeight;
                box.css({
                    'left': (img_width * index) + 'px',
                    'top': 0
                });
            }else{
                console.log(column_height);
                // 上一排的最低高度
                var min_height = Math.min.apply(null, column_height);
                // 最低高度的位置
                var min_index = $.inArray(min_height, column_height);
                console.log(min_height);
                box.css({
                    'left': (img_width * min_index) + 'px',
                    'top': column_height[min_index] + 'px'
                });
                column_height[min_index] += box.height();
            }
        });
    }

});