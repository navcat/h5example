'use strict';

/**
 * npm install --global babel-cli
 * npm install --save babel-preset-es2015
 *
 * babel-node example.js 来执行该函数
 * npm run build  讲es6转码为es5
 */

// 转码前
var input = [1, 2, 3];
input.map(function (item) {
  return item + 1;
});

// var {foo: {bar}} = {baz: 'baz'};
// console.log(bar); // baz
// // TypeError


var s1 = Symbol();
var s2 = Symbol();

console.log(s1 === s2); // false
console.log(s1 == s2); // false
console.log(s1 == s1); // true
console.log(s1 === s1); // true

console.log('--------------------------');

var s3 = Symbol.for('foo');
var s4 = Symbol.for('foo');
console.log(s3 == s4); // true
console.log(s3 === s4); // true

console.log('--------------------------');
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log('--------------------------');
console.log(1 == '1'); // true