// 每一个javascript对象（null除外）都和另一个对象关联
// Object.prototype 没有原型的对象

// 可写：是否可以设置该属性的值；
// 可枚举：是否可以通过for/in循环返回该属性
// 可配置：死否可以修改或者删除该属性

// 通过对象直接量创建的对象使用Object.prototype作为他们的原型
// 通过new创建的对象使用构造函数的prototype属性作为他们的原型
// 通过Object.create()创建的对象使用第一个参数（也可以是null）作为他们的原型
// (P138)

/**
 * 继承对象o
 * @param  {[type]} o [description]
 * @return 返回一个新的对象
 */
function inherit(o){
	// o必须是对象
	if(o == null) throw TypeError();
	if(Object.create)
		return Object.create(o);
	var t = typeof o;
	if(t !== 'object' && t !== 'function'){
		throw TypeError();
	}
	function f(){}
	f.prototype = o;
	return new f();
}

// 创建没有原型的对象(连toString属性都没有)
var o1 = Object.create(null);
Console.log(o1.prototype);  // > undefined

// 创建普通的空对象
var o2 = {};
var o3 = new Object();
var o3 = Object.create(Object.prototype);



var o5 = {};
Object.defineProperty(o5, 'x', {
	value: 'hello',
	writable: true,
	enumerable: false,
	configurable: true
})