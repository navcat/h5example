/**
 * 使用箭头函数
 */

(function(){
    return [
        (() => this.x).bind({x: 'inner'})()
    ]
}).call({x: 'outer'});