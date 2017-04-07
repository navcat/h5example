/**
 * 任意值的集合
 */
function Set() {            // 构造函数
    'use strict';
    this.values = {};       // 集合数据保存在对象的属性里
    this.n = 0;             // 集合中值的个数
    this.add.applay(this, arguments);

}

/**
 * 将每个参数都添加至集合中
 */
Set.prototype.add = function() {
    for(var i = 0; i < arguments.length; i++){
        var val = arguments[i];
        var str = Set._v2s(val);        // 转换为字符串
        // 如果不在集合中
        if(!this.values.hasOwnProperty(str)) {
            this.values[str] = val;
            this.n ++ ;
        }
    }
    return this;
}

/**
 * 从集合中删除元素，这些元素由参数指定
 */
Set.prototype.remove = function(){

}

Set.prototype.foreach = function(f, context){
    for(var s in this.values){
        // 忽略继承来的属性
        if(this.values.hasOwnProperty(s)){
            // 调用f，传入value
            f.call(context, this.values[s]);
        }
    }
}

/**
 * 内部函数，讲任意的的js值和唯一的字符串对应起来
 * @param  {[type]} val [description]
 * @return {[type]}     [description]
 */
Set._v2s = function(val) {
    switch(val){
        case undefined: return 'u';
        case null: return 'n';
        case true: return 't';
        case false: return 'f';
        default: switch(typeof val){
            case 'number': return '#' + val;
            case 'string': return '"' + val;
            default: return '@' + objectId(val);
        }
    }

    function objectId(o) {
        // 私有属性，用于存放ID
        var prop = "|**objectid**|";
        if(!o.hasOwnProperty(prop)) {
            o[prop] = Set._v2s.next ++;
        }
        return o[prop];
    }
}
Set._v2s.next = 100;  // 设置初始的ID为100