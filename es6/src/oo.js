/**
 * 面向对象
 */

class A{}

console.log(A.prototype);			// A{}
console.log(A.prototype.__proto__)	// {}
console.log(A.__proto__)			// [Function]

/// A不存在任何继承，属于特殊情况
console.log(A.__proto__ == Function)						// false
console.log(A.__proto__ === Function)						// false
console.log(A.prototype.__proto__ == Function.prototype)	// false
console.log(A.prototype.__proto__ === Function.prototype)	// false

console.log(A.__proto__ === Function.prototype)				// true
console.log(A.prototype.__proto__ === Object.prototype)		// true
console.log(A.prototype === A.constructor)					// false
console.log(A.prototype.constructor === A)					// true

console.log('----------------')


class B extends A{}

console.log(B.prototype)			// B{}
console.log(B.prototype.__proto__)	// A{}
console.log(B.__proto__)			// [Function: A]

// __proto__属性指向父类，表示构造函数的继承
console.log(B.__proto__ == A)						// true
console.log(B.__proto__ === A)						// true
// prototype.__proto__指向父类的的prototype属性，表示方法的继承
console.log(B.prototype.__proto__ == A.prototype)	// true
console.log(B.prototype.__proto__ == A.prototype)	// true

/// 理解：
/// 作为一个对象，子类(B)的原型(__proto__属性)是父类(A)
/// 作为一个构造函数，子类(B)的原型(prototype属性)是父类的实例

/// B的实例继承A的实例
/// Object.setPrototypeOf(B.prototype, A.prototype)
/// 等同于
/// B.prototype.__proto__ = A.prototype

/// B继承A的静态属性
/// Object.setPrototypeOf(B, A)
/// 等同于
/// B.__proto__ = A

/// B.prototype = new A()
/// 等同于
/// B.prototype.__proto__ = A.prototype

console.log(A.constructor)			// [Function: Function]
console.log(B.constructor)			// [Function: Function]
console.log(A.constructor == B.constructor)			// true
console.log(A.constructor === B.constructor)		// true

console.log(A.constructor == A)					// false
console.log(A.constructor === A)				// false

console.log(B.constructor == A)					// false
console.log(B.constructor === A)				// false

console.log(A.prototype === A.constructor)		// false
console.log(B.prototype == B.constructor)		// false
console.log(B.prototype === B.constructor)		// false


console.log('--------------')
// 子类继承Object类
/// OA其实就是构造函数Object的复制，A的实例就是Object的实例
class OA extends Object{}
console.log(OA.constructor)				// [Function: Function]
console.log(OA.prototype)				// OA{}
console.log(OA.prototype.__proto__)		// {}
console.log(OA.__proto__)				// [Function: Object]
console.log(OA.__proto__ == Object)		// true
console.log(OA.__proto__ === Object)	// true
console.log(OA.prototype.__proto__ == Object.prototype)		// true
console.log(OA.prototype.__proto__ === Object.prototype)	// true

console.log('-------------')

class None extends null{}
console.log(None)						// [Function: None]
console.log(None.prototype)				// None{}
console.log(None.prototype.__proto__)	// undefined
console.log(None.__proto__)				// [Function]

console.log(None.__proto__ === Function.prototype)		// true