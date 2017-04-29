/**
 * 使用箭头函数
 */

(function(){
    return [
        (() => this.x).bind({x: 'inner'})()
    ]
}).call({x: 'outer'});


var foo = 'bar';
var o = {o: 'ooo'};
var s = Symbol();
var baz = {[foo]: 'abc', [o]: 'efg', [Symbol()]: 'test', [s]: 'good'};
console.log(baz)
console.log(baz[foo])			// abc
console.log(baz['bar'])			// abc
console.log(baz[o])				// efg
console.log(baz[{o: 'ooo'}])	// efg
console.log(baz[Symbol()])		// undefined
console.log(baz[s])				// good